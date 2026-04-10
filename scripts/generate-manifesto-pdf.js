#!/usr/bin/env node

/**
 * Generate PDFs for the Manifesto (Swedish and English)
 * 
 * Usage: node scripts/generate-manifesto-pdfs.js
 * 
 * Output: static/downloads/Manifest-svensk-subsidiaritet.pdf
 *         static/downloads/Manifesto-swedish-subsidiarity.pdf
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const VISION_DIR = path.join(__dirname, '../src/routes/vision');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads');
const STATIC_DIR = path.join(__dirname, '../static');

const AUTHOR = 'Björn Kenneth Holmström';
const SITE_URL = 'svensksubsidiaritet.se';

// File mapping: language code -> { input file, output file, title, subtitle }
const CONFIG = {
    sv: {
        input: path.join(VISION_DIR, 'content.sv.md'),
        output: path.join(OUTPUT_DIR, 'Manifest-svensk-subsidiaritet.pdf'),
        title: 'Manifest för Svensk Subsidiaritet',
        subtitle: 'Ett distribuerat Sverige – resilient, självstyrande och mänskligt',
        langName: 'Svensk Subsidiaritet'
    },
    en: {
        input: path.join(VISION_DIR, 'content.en.md'),
        output: path.join(OUTPUT_DIR, 'Manifesto-swedish-subsidiarity.pdf'),
        title: 'Swedish Subsidiarity Manifesto',
        subtitle: 'A Distributed Sweden – Resilient, Self-Governing, and Human',
        langName: 'Swedish Subsidiarity'
    }
};

// --- STYLING (Clean, manifesto-style) ---
const pdfStyles = `
<style>
    @page {
        size: A4;
        margin: 2.5cm 2cm;
    }

    body {
        font-family: 'Georgia', 'Times New Roman', serif;
        font-size: 11pt;
        line-height: 1.6;
        color: #1c1917;
        margin: 0;
    }

    /* Cover page */
    .manifesto-cover {
        page-break-after: always;
        margin-bottom: 2rem;
    }

    .manifesto-cover h1 {
        font-family: 'Arial', sans-serif;
        font-size: 32pt;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 0.5rem;
        border-bottom: 3px solid #1c1917;
        padding-bottom: 0.5rem;
        color: #000;
    }

    .manifesto-cover .subtitle {
        font-size: 16pt;
        font-style: italic;
        color: #57534e;
        margin-bottom: 2rem;
    }

    .manifesto-cover .meta {
        margin-top: 2rem;
        font-family: monospace;
        color: #78716c;
        font-size: 9pt;
    }

    /* Content */
    h1, h2, h3, h4 {
        font-family: 'Arial', sans-serif;
        color: #000;
        page-break-after: avoid;
    }

    h1 { font-size: 22pt; margin-top: 2rem; border-bottom: 1px solid #e7e5e4; }
    h2 { font-size: 16pt; margin-top: 1.5rem; }
    h3 { font-size: 13pt; margin-top: 1.2rem; }

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
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 10pt;
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

    .footer {
        margin-top: 3rem;
        font-size: 9pt;
        color: #78716c;
        text-align: center;
        border-top: 1px solid #e7e5e4;
        padding-top: 1rem;
    }
</style>
`;

// MIME types for image embedding
const mimeTypes = {
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp'
};

/**
 * Convert image src attributes to Base64 data URIs
 */
function embedImagesAsBase64(html) {
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    
    return html.replace(imgRegex, (match, src) => {
        // Skip external or already embedded
        if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
            return match;
        }
        
        let filePath;
        if (src.startsWith('/')) {
            filePath = path.join(STATIC_DIR, src);
        } else if (src.startsWith('./')) {
            filePath = path.join(VISION_DIR, src);
        } else {
            filePath = path.join(VISION_DIR, src);
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

async function generatePDF(lang) {
    const config = CONFIG[lang];
    if (!config) return;
    
    console.log(`📄 Generating ${lang.toUpperCase()} Manifesto...`);
    
    if (!fs.existsSync(config.input)) {
        console.error(`❌ Input file not found: ${config.input}`);
        return;
    }
    
    // Read and parse markdown
    let markdown = fs.readFileSync(config.input, 'utf-8');
    markdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, ''); // Remove frontmatter
    const contentHtml = marked.parse(markdown);
    
    // Build HTML with cover page
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        ${pdfStyles}
    </head>
    <body>
        <div class="manifesto-cover">
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
                ? 'Svensk Subsidiaritet – För ett distribuerat, resilient och mänskligt Sverige.' 
                : 'Swedish Subsidiarity – For a distributed, resilient, and human Sweden.'}<br/>
            ${SITE_URL}
        </div>
    </body>
    </html>
    `;
    
    // Embed images
    html = embedImagesAsBase64(html);
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Generate PDF
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: config.output,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `
            <div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; margin: 0 auto; padding-bottom: 10px; text-align: center;">
                ${config.title} • <span class="pageNumber"></span>
            </div>
        `,
        margin: { top: '2.5cm', bottom: '2.5cm', left: '2cm', right: '2cm' }
    });
    
    await page.close();
    await browser.close();
    
    console.log(`✅ Saved: ${path.basename(config.output)}`);
}

async function generateAll() {
    console.log('📚 Generating Manifesto PDFs...\n');
    
    await generatePDF('sv');
    await generatePDF('en');
    
    console.log(`\n✨ Done! PDFs saved in ${OUTPUT_DIR}`);
}

generateAll().catch(console.error);
