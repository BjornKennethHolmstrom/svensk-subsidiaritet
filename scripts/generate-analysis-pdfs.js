#!/usr/bin/env node

/**
 * Generate combined PDFs for all system analyses (Swedish and English)
 * 
 * Usage: node scripts/generate-analysis-pdfs.js
 * 
 * Scans src/routes/system-analys/ for categories and subpages,
 * combines overview + subpages in alphabetical order,
 * and generates one PDF per language per category.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const ANALYSES_ROOT = path.join(__dirname, '../src/routes/system-analys');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads/analyser');
const STATIC_DIR = path.join(__dirname, '../static');

// Category display names (used for PDF titles and filenames)
const CATEGORY_NAMES = {
    aldreomsorg: { sv: 'Äldreomsorg', en: 'Elder Care' },
    boende: { sv: 'Boende', en: 'Housing' },
    energi: { sv: 'Energi', en: 'Energy' },
    halsovard: { sv: 'Hälsovård', en: 'Healthcare' },
    kultur: { sv: 'Kultur', en: 'Culture' },
    livsmedelssystem: { sv: 'Livsmedelssystem', en: 'Food System' },
    transport: { sv: 'Transport', en: 'Transport' },
    trygghet: { sv: 'Trygghet', en: 'Safety' },
    utbildning: { sv: 'Utbildning', en: 'Education' },
    valfard: { sv: 'Välfärd', en: 'Welfare' }
};

// Metadata
const AUTHOR = 'Björn Kenneth Holmström';
const SITE_URL = 'svensksubsidiaritet.se';

// Map of image extensions to MIME types
const mimeTypes = {
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp'
};

// Order of subpages (optional – if not specified, alphabetical order is used)
// You can customize ordering per category here if needed.
const SUBPAGE_ORDER = {
    energi: [
        'energikooperativ',
        'grannhandel',
        'energibanker',
        'kommunala-energirad',
        'lokala-natavgifter'
    ],
    halsovard: [
        'halsoringar',
        'halsoguider',
        'halsokapitalkonton',
        'social-forskrivning',
        'distribuerad-infrastruktur'
    ],
    kultur: [
        'vardagskultur',
        'hyperlokal-media',
        'sprakgemenskaper',
        'kulturella-allmanningar',
        'kanon'
    ],
    livsmedelssystem: [
        'plattformar',
        'arbetskraft',
        'foradling',
        'hushall',
        'overgangsdynamik'
    ],
    trygghet: [
        'trygghetsringar',
        'samhallsmedlare',
        'kommunala-trygghetsbudgetar',
        'reparativ-rattvisa',
        'trygghetscenter'
    ],
    utbildning: [
        'laranderingar',
        'kommunal-laroplansautonomi',
        'portfoljbaserad-bedomning',
        'lararkooperativ',
        'kompetensbanker'
    ],
    valfard: [
        'valfardsringar',
        'social-forskrivning',
        'grannverifiering',
        'personliga-valfardsbudgetar',
        'kommunala-valfardsbudgetar',
        'sociala-investeringsfonder'
    ]
};

// --- STYLING (Clean, academic) ---
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

    /* Category title page */
    .category-cover {
        margin-bottom: 2rem;
        page-break-after: always;
    }

    .category-cover h1 {
        font-family: 'Arial', sans-serif;
        font-size: 28pt;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 0.5rem;
        border-bottom: 2px solid #1c1917;
        padding-bottom: 0.5rem;
    }

    .category-cover .subtitle {
        font-size: 14pt;
        font-style: italic;
        color: #57534e;
        margin-bottom: 2rem;
    }

    .category-cover .meta {
        margin-top: 2rem;
        font-family: monospace;
        color: #78716c;
        font-size: 9pt;
    }

    /* Content headers */
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

    /* Section break between subpages */
    .subpage-divider {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 2px dashed #a8a29e;
        page-break-before: always;
    }

    /* Footer */
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

// --- HELPER FUNCTIONS ---

function parseMarkdownFile(filePath) {
    if (!fs.existsSync(filePath)) return null;
    let content = fs.readFileSync(filePath, 'utf-8');
    // Remove YAML frontmatter
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    return marked.parse(content);
}

function getSubpages(categoryPath, lang) {
    const subdirs = [];
    const items = fs.readdirSync(categoryPath, { withFileTypes: true });
    
    for (const item of items) {
        if (item.isDirectory()) {
            const subPath = path.join(categoryPath, item.name);
            const contentFile = path.join(subPath, `content.${lang}.md`);
            if (fs.existsSync(contentFile)) {
                subdirs.push({
                    name: item.name,
                    path: subPath,
                    contentFile
                });
            }
        }
    }
    
    // Sort subpages: use custom order if defined, otherwise alphabetical
    const categoryName = path.basename(categoryPath);
    const order = SUBPAGE_ORDER[categoryName] || null;
    
    if (order) {
        subdirs.sort((a, b) => {
            const indexA = order.indexOf(a.name);
            const indexB = order.indexOf(b.name);
            // Put unknown items at the end
            if (indexA === -1 && indexB === -1) return a.name.localeCompare(b.name);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
    } else {
        subdirs.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return subdirs;
}

/**
 * Convert image references in HTML from local paths to Base64 data URIs.
 * Supports both relative (./diagrams/...) and absolute (/diagrams/...) paths.
 */
function embedImagesAsBase64(html, categorySlug) {
    // Match img tags with src attributes
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    
    return html.replace(imgRegex, (match, src) => {
        // Skip external URLs
        if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
            return match;
        }
        
        // Resolve the file path
        let filePath;
        if (src.startsWith('/')) {
            // Absolute path from site root -> static/
            filePath = path.join(STATIC_DIR, src);
        } else if (src.startsWith('./')) {
            // Relative to current markdown file (category folder)
            filePath = path.join(STATIC_DIR, 'diagrams', categorySlug, path.basename(src));
        } else {
            // Try as relative to diagrams folder for this category
            filePath = path.join(STATIC_DIR, 'diagrams', categorySlug, src);
        }
        
        // Check if file exists, otherwise try alternative paths
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
            console.warn(`     ⚠️  Failed to read image: ${filePath}`, err.message);
            return match;
        }
    });
}

async function generateCategoryPDF(browser, categoryPath, lang) {
    const categoryName = path.basename(categoryPath);
    const displayName = CATEGORY_NAMES[categoryName]?.[lang] || categoryName;
    const langName = lang === 'sv' ? 'Svensk Subsidiaritet' : 'Swedish Subsidiarity';
    const outputFileName = lang === 'sv' 
        ? `${displayName.replace(/\s+/g, '-')}-svensk-subsidiaritet.pdf`
        : `${displayName.replace(/\s+/g, '-')}-swedish-subsidiarity.pdf`;
    const outputPath = path.join(OUTPUT_DIR, outputFileName);
    
    console.log(`  📄 Generating ${lang.toUpperCase()}: ${displayName}`);
    
    // Read overview
    const overviewFile = path.join(categoryPath, `content.${lang}.md`);
    const overviewHtml = parseMarkdownFile(overviewFile) || '';
    
    // Collect subpages
    const subpages = getSubpages(categoryPath, lang);
    const subpageHtmls = [];
    
    for (const sub of subpages) {
        const html = parseMarkdownFile(sub.contentFile);
        if (html) {
            subpageHtmls.push({
                name: sub.name,
                html
            });
        }
    }
    
    // Build combined HTML
    let combinedHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        ${pdfStyles}
    </head>
    <body>
        <div class="category-cover">
            <h1>${displayName}</h1>
            <div class="subtitle">En analys från ${langName}</div>
            <div class="meta">
                ${AUTHOR} • ${new Date().toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-US', { year: 'numeric', month: 'long' })}<br/>
                ${SITE_URL}
            </div>
        </div>
        
        <div class="overview">
            ${overviewHtml}
        </div>
    `;
    
    // Add subpages with dividers
    for (const sub of subpageHtmls) {
        combinedHtml += `
        <div class="subpage-divider"></div>
        <div class="subpage">
            ${sub.html}
        </div>
        `;
    }
    
    combinedHtml += `
        <div class="footer">
            ${lang === 'sv' ? 'Denna analys är en del av Svensk Subsidiaritets arbete för ett mer distribuerat och resilient Sverige.' : 'This analysis is part of Swedish Subsidiarity\'s work toward a more distributed and resilient Sweden.'}<br/>
            ${SITE_URL}
        </div>
    </body>
    </html>
    `;

    combinedHtml = embedImagesAsBase64(combinedHtml, categoryName);
    
    // Generate PDF
    const page = await browser.newPage();
    await page.setContent(combinedHtml, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `
            <div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; margin: 0 auto; padding-bottom: 10px; width: 100%; text-align: center;">
                ${displayName} • ${langName} • <span class="pageNumber"></span>
            </div>
        `,
        margin: { top: '2.5cm', bottom: '2.5cm', left: '2cm', right: '2cm' }
    });
    
    await page.close();
    console.log(`     ✅ Saved: ${outputFileName}`);
    return outputPath;
}

async function generateAll() {
    console.log('📚 Generating analysis PDFs for all categories...\n');
    
    if (!fs.existsSync(ANALYSES_ROOT)) {
        console.error(`❌ Analyses root not found: ${ANALYSES_ROOT}`);
        process.exit(1);
    }
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Get all categories (directories containing content.sv.md or content.en.md)
    const categories = [];
    const items = fs.readdirSync(ANALYSES_ROOT, { withFileTypes: true });
    
    for (const item of items) {
        if (item.isDirectory()) {
            const catPath = path.join(ANALYSES_ROOT, item.name);
            const hasSv = fs.existsSync(path.join(catPath, 'content.sv.md'));
            const hasEn = fs.existsSync(path.join(catPath, 'content.en.md'));
            if (hasSv || hasEn) {
                categories.push({
                    name: item.name,
                    path: catPath,
                    hasSv,
                    hasEn
                });
            }
        }
    }
    
    console.log(`Found ${categories.length} categories\n`);
    
    const browser = await puppeteer.launch({ headless: 'new' });
    let generated = 0;
    
    for (const cat of categories) {
        console.log(`📁 ${cat.name}`);
        if (cat.hasSv) {
            await generateCategoryPDF(browser, cat.path, 'sv');
            generated++;
        }
        if (cat.hasEn) {
            await generateCategoryPDF(browser, cat.path, 'en');
            generated++;
        }
        console.log('');
    }
    
    await browser.close();
    console.log(`✨ Done! Generated ${generated} PDFs in ${OUTPUT_DIR}`);
}

generateAll().catch(console.error);
