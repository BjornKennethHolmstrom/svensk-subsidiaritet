#!/usr/bin/env node

/**
 * Generate combined PDF for KD response letter
 * 
 * Usage: node scripts/generate-brev-pdf.js
 * 
 * Input:  docs/brev/bilaga.md
 *         docs/brev/ursprunglig-analys.md
 *         docs/brev/kontakt.md
 * Output: static/downloads/brev/Från-Sjukvård-till-Hälsa-svensk-subsidiaritet-2026.pdf
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const INPUT_DIR = path.join(__dirname, '../docs/brev');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads/brev');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'Från-Sjukvård-till-Hälsa-svensk-subsidiaritet-2026.pdf');

const AUTHOR = 'Björn Kenneth Holmström';
const DATE = 'Mars 2026'; // Adjust as needed

// Order of files to combine
const FILES = [
    { name: 'bilaga.md', class: 'letter' },
    { name: 'ursprunglig-analys.md', class: 'analysis' },
    { name: 'kontakt.md', class: 'contact' }
];

// --- STYLING ---
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

    /* Letter (bilaga) styling */
    .letter {
        font-size: 11pt;
    }

    .letter h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24pt;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid #1c1917;
        padding-bottom: 0.5rem;
    }

    .letter h2 {
        font-family: 'Arial', sans-serif;
        font-size: 16pt;
        font-weight: bold;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .letter p {
        margin-bottom: 1rem;
        text-align: justify;
    }

    /* Analysis section – smaller font */
    .analysis {
        font-size: 9.5pt;
        line-height: 1.5;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #a8a29e;
    }

    .analysis h1,
    .analysis h2,
    .analysis h3,
    .analysis h4 {
        font-family: 'Arial', sans-serif;
        color: #1c1917;
    }

    .analysis h1 { font-size: 18pt; }
    .analysis h2 { font-size: 14pt; }
    .analysis h3 { font-size: 12pt; }

    .analysis blockquote {
        border-left: 3px solid #78716c;
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        font-style: italic;
        background: #f5f5f4;
        font-size: 9pt;
    }

    .analysis table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 8.5pt;
    }

    .analysis th {
        background: #e7e5e4;
        padding: 0.5rem;
        text-align: left;
        border-bottom: 2px solid #1c1917;
    }

    .analysis td {
        border-bottom: 1px solid #d6d3d1;
        padding: 0.5rem;
    }

    /* Contact section – signature style */
    .contact {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #a8a29e;
        font-family: 'Arial', sans-serif;
        font-size: 10pt;
        color: #44403c;
    }

    .contact p {
        margin-bottom: 0.3rem;
    }

    .contact .signature {
        margin-top: 1.5rem;
        font-style: italic;
    }

    /* General */
    a {
        color: #1c1917;
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .page-break {
        page-break-before: always;
    }
</style>
`;

// --- HELPER: Clean frontmatter and parse ---
function parseMarkdownFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // Remove YAML frontmatter if present
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    return marked.parse(content);
}

// --- MAIN ---
async function generate() {
    console.log('📄 Generating KD response letter PDF...');

    // Check input files
    for (const f of FILES) {
        const p = path.join(INPUT_DIR, f.name);
        if (!fs.existsSync(p)) {
            console.error(`❌ Missing file: ${f.name}`);
            process.exit(1);
        }
    }

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Read and parse each file
    const htmlSections = [];
    for (const f of FILES) {
        const filePath = path.join(INPUT_DIR, f.name);
        const contentHtml = parseMarkdownFile(filePath);
        htmlSections.push(`<div class="${f.class}">\n${contentHtml}\n</div>`);
    }

    // Combine HTML
    const combinedHtml = `
    <!DOCTYPE html>
    <html lang="sv">
    <head>
        <meta charset="UTF-8">
        ${pdfStyles}
    </head>
    <body>
        ${htmlSections.join('\n')}
    </body>
    </html>
    `;

    // Generate PDF
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(combinedHtml, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: OUTPUT_FILE,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: false,
        margin: { top: '2.5cm', bottom: '2cm', left: '2cm', right: '2cm' }
    });

    await page.close();
    await browser.close();

    console.log(`✅ Saved: ${OUTPUT_FILE}`);
    const stats = fs.statSync(OUTPUT_FILE);
    console.log(`   Size: ${(stats.size / 1024).toFixed(1)} KB`);
}

generate().catch(console.error);
