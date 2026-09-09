#!/usr/bin/env node

/**
 * Generate PDFs for the Governance Factorization Simulator v0.5 Blind Test Report (Swedish and English)
 * 
 * Usage: node scripts/generate-styrningsfaktorisering-report-pdfs.js
 * 
 * Output: static/downloads/Styrningsfaktorisering-v0.5-blindtest-rapport.pdf
 *         static/downloads/Governance-Factorization-v0.5-blind-test-report.pdf
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import katex from 'katex';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const REPORT_DIR = path.join(__dirname, '../src/lib/content/reports/styrningsfaktorisering');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads');
const STATIC_DIR = path.join(__dirname, '../static');

const AUTHOR = 'Björn Kenneth Holmström';
const SITE_URL = 'svensksubsidiaritet.se';

const CONFIG = {
    sv: {
        input: path.join(REPORT_DIR, 'styrningsfaktorisering-v0.5-blindtest-rapport-sv.md'),
        output: path.join(OUTPUT_DIR, 'Styrningsfaktorisering-v0.5-blindtest-rapport.pdf'),
        title: 'Kan olika delar av samma samhällsfunktion behöva styras på olika nivåer?',
        subtitle: 'Ett blindtest av Styrningsfaktoriseringssimulatorn v0.5',
        langName: 'Svensk Subsidiaritet'
    },
    en: {
        input: path.join(REPORT_DIR, 'styrningsfaktorisering-v0.5-blindtest-rapport-en.md'),
        output: path.join(OUTPUT_DIR, 'Governance-Factorization-v0.5-blind-test-report.pdf'),
        title: 'Can different parts of the same societal function need to be governed at different levels?',
        subtitle: 'A blind test of the Governance Factorization Simulator v0.5',
        langName: 'Swedish Subsidiarity'
    }
};

// --- STYLING ---
const pdfStyles = `
<style>
    @page {
        size: A4;
        margin: 2.2cm 1.8cm;
    }

    body {
        font-family: 'Georgia', 'Times New Roman', serif;
        font-size: 12.5pt;
        line-height: 1.6;
        color: #1c1917;
        margin: 0;
    }

    /* Cover page */
    .report-cover {
        page-break-after: always;
        margin-bottom: 2rem;
    }

    .report-cover h1 {
        font-family: 'Arial', sans-serif;
        font-size: 30pt;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 0.5rem;
        border-bottom: 3px solid #1c1917;
        padding-bottom: 0.5rem;
        color: #000;
    }

    .report-cover .subtitle {
        font-size: 16pt;
        font-style: italic;
        color: #57534e;
        margin-bottom: 2rem;
    }

    .report-cover .meta {
        margin-top: 2rem;
        font-family: monospace;
        color: #78716c;
        font-size: 10pt;
    }

    h1, h2, h3, h4 {
        font-family: 'Arial', sans-serif;
        color: #000;
        page-break-after: avoid;
    }

    h1 { font-size: 22pt; margin-top: 2rem; border-bottom: 1px solid #e7e5e4; }
    h2 { font-size: 17pt; margin-top: 1.5rem; }
    h3 { font-size: 14pt; margin-top: 1.2rem; }

    p {
        margin-bottom: 1rem;
        text-align: justify;
    }

    blockquote {
        border-left: 3px solid #78716c;
        margin: 1.5rem 0;
        padding: 0.5rem 1.5rem;
        font-style: italic;
        background: #f5f5f4;
        font-size: 11.5pt;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 11pt;
    }

    th {
        background: #e7e5e4;
        padding: 0.5rem;
        text-align: left;
        border-bottom: 2px solid #1c1917;
    }

    td {
        border-bottom: 1px solid #d6d3d1;
        padding: 0.5rem;
    }

    /* KaTeX sizing to match body text */
    .katex {
        font-size: 1.1em;
    }
    .katex-display {
        font-size: 1.1em;
        margin: 1em 0;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0.5em 0;
    }

    .footer {
        margin-top: 3rem;
        font-size: 10pt;
        color: #78716c;
        text-align: center;
        border-top: 1px solid #e7e5e4;
        padding-top: 1rem;
    }
</style>
`;

const mimeTypes = {
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp'
};

function embedImagesAsBase64(html) {
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    
    return html.replace(imgRegex, (match, src) => {
        if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
            return match;
        }
        
        let filePath;
        if (src.startsWith('/')) {
            filePath = path.join(STATIC_DIR, src);
        } else if (src.startsWith('./')) {
            filePath = path.join(REPORT_DIR, src);
        } else {
            filePath = path.join(REPORT_DIR, src);
        }
        
        if (!fs.existsSync(filePath)) {
            console.warn(`     ⚠️  Image not found: ${filePath}`);
            return match;
        }
        
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = mimeTypes[ext] || 'application/octet-stream';
        
        try {
            const imageData = fs.readFileSync(filePath);
            const base64 = imageData.toString('base64');
            const dataUri = `data:${mimeType};base64,${base64}`;
            return match.replace(src, dataUri);
        } catch (err) {
            console.warn(`     ⚠️  Failed to read image: ${filePath}`);
            return match;
        }
    });
}

function preRenderMath(mdContent) {
    const blocks = [];
    let processed = mdContent;

    processed = processed.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
        const tex = (tex1 ?? tex2 ?? '').trim();
        try {
            const rendered = katex.renderToString(tex, { displayMode: true, throwOnError: false });
            blocks.push(rendered);
            return `%%MATH${blocks.length - 1}%%`;
        } catch (e) {
            console.warn('KaTeX display error:', e);
            blocks.push(match);
            return `%%MATH${blocks.length - 1}%%`;
        }
    });

    processed = processed.replace(/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g, (match, tex1, tex2) => {
        const tex = (tex1 ?? tex2 ?? '').trim();
        try {
            const rendered = katex.renderToString(tex, { displayMode: false, throwOnError: false });
            blocks.push(rendered);
            return `%%MATH${blocks.length - 1}%%`;
        } catch (e) {
            console.warn('KaTeX inline error:', e);
            blocks.push(match);
            return `%%MATH${blocks.length - 1}%%`;
        }
    });

    return { processed, blocks };
}

function restoreMath(html, blocks) {
    return html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');
}

async function generatePDF(lang) {
    const config = CONFIG[lang];
    if (!config) return;
    
    console.log(`📄 Generating ${lang.toUpperCase()} styrningsfaktorisering report...`);
    
    if (!fs.existsSync(config.input)) {
        console.error(`❌ Input file not found: ${config.input}`);
        return;
    }
    
    let markdown = fs.readFileSync(config.input, 'utf-8');
    markdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, '');
    
    const { processed: processedMarkdown, blocks } = preRenderMath(markdown);
    const rawContentHtml = marked.parse(processedMarkdown);
    const contentHtml = restoreMath(rawContentHtml, blocks);
    
    const katexCssPath = path.join(__dirname, '../node_modules/katex/dist/katex.min.css');
    const katexCssUri = 'file://' + path.resolve(katexCssPath).replace(/\\/g, '/');
    
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="${katexCssUri}" />
        ${pdfStyles}
    </head>
    <body>
        <div class="report-cover">
            <h1>${config.title}</h1>
            <div class="subtitle">${config.subtitle}</div>
            <div class="meta">
                ${AUTHOR} • ${new Date().toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-US', { year: 'numeric', month: 'long' })}<br/>
                ${SITE_URL}
            </div>
        </div>
        
        <main>
            ${contentHtml}
        </main>
        
        <div class="footer">
            ${lang === 'sv' 
                ? 'Svensk Subsidiaritet – Forskning om styrningsfaktorisering' 
                : 'Swedish Subsidiarity – Research on Governance Factorization'}<br/>
            ${SITE_URL}
        </div>
    </body>
    </html>
    `;
    
    html = embedImagesAsBase64(html);
    
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Write temporary HTML file
    const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-styrningsfaktorisering-${lang}.html`);
    fs.writeFileSync(tempHtmlFile, html);
    const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--allow-file-access-from-files']
    });
    
    try {
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(120000);
        console.log('Loading HTML file locally...');
        await page.goto(tempHtmlUri, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 120000 });
        console.log('Content loaded, generating PDF...');
        
        await page.pdf({
            path: config.output,
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: '<div></div>',
            footerTemplate: `
                <div style="font-size: 9pt; font-family: sans-serif; color: #a8a29e; margin: 0 auto; padding-bottom: 10px; text-align: center;">
                    ${config.title} • <span class="pageNumber"></span>
                </div>
            `,
            margin: { top: '2.2cm', bottom: '2.2cm', left: '1.8cm', right: '1.8cm' }
        });
        
        console.log(`✅ Saved: ${path.basename(config.output)}`);
    } catch (error) {
        console.error(`❌ Error generating ${lang.toUpperCase()} PDF:`, error);
        throw error;
    } finally {
        await browser.close();
        if (fs.existsSync(tempHtmlFile)) fs.unlinkSync(tempHtmlFile);
    }
}

async function generateAll() {
    console.log('📚 Generating styrningsfaktorisering report PDFs...\n');
    
    await generatePDF('sv');
    await generatePDF('en');
    
    console.log(`\n✨ Done! PDFs saved in ${OUTPUT_DIR}`);
}

generateAll().catch(console.error);
