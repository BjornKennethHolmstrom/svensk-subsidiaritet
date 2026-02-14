#!/usr/bin/env node

/**
 * Generate essay PDF for Kvartal submission
 * 
 * Usage: node scripts/generate-kvartal-pdf.js
 * 
 * Input:  content/kvartal/draft.md
 * Output: static/downloads/kvartal/Chansen-att-tänka-BKH-2026.pdf
 * 
 * Requirements: marked, puppeteer (already in package.json)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---

const INPUT_FILE = path.join(__dirname, '../content/kvartal/draft.md');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads/kvartal');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'Chansen-att-tänka-BKH-2026.pdf');

const AUTHOR = 'Björn Kenneth Holmström';
const DATE = 'Februari 2026';

// --- STYLING (Clean essay, no cover page) ---

const pdfStyles = `
<style>
    @page {
        size: A4;
        margin: 3cm 2.5cm;
    }

    body {
        font-family: 'Georgia', 'Times New Roman', serif;
        font-size: 12pt;
        line-height: 1.7;
        color: #1c1917;
        margin: 0;
    }

    /* Header area */
    .essay-header {
        margin-bottom: 2.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #d6d3d1;
    }

    .essay-header .author {
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-size: 10pt;
        color: #78716c;
        letter-spacing: 0.5px;
        margin-bottom: 0.3rem;
    }

    .essay-header .date {
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-size: 9pt;
        color: #a8a29e;
    }

    /* Title from markdown h1 */
    h1 {
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-size: 24pt;
        font-weight: 800;
        line-height: 1.2;
        color: #000;
        margin: 0 0 0.3rem 0;
        border-bottom: none;
        letter-spacing: -0.5px;
    }

    /* Subtitle from markdown h2 */
    h2 {
        font-family: 'Georgia', 'Times New Roman', serif;
        font-size: 14pt;
        font-weight: normal;
        font-style: italic;
        color: #57534e;
        margin: 0 0 2rem 0;
        border-bottom: none;
    }

    p {
        margin-bottom: 1rem;
        text-align: left;
        orphans: 3;
        widows: 3;
    }

    strong { font-weight: bold; }
    em { font-style: italic; }

    a {
        color: #1c1917;
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-color: #a8a29e;
    }

    blockquote {
        border-left: 3px solid #1c1917;
        margin: 1.5rem 0;
        padding: 0.8rem 1.2rem;
        font-style: italic;
        color: #44403c;
    }

    /* Footnote section */
    .footnote-separator {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid #d6d3d1;
    }

    .footnote-content {
        font-size: 10pt;
        line-height: 1.5;
        color: #57534e;
    }

    .footnote-content p {
        margin-bottom: 0.6rem;
    }
</style>
`;

// --- MAIN GENERATOR ---

async function generate() {
    console.log('📄 Generating Kvartal essay PDF...');

    if (!fs.existsSync(INPUT_FILE)) {
        console.error(`❌ Input file not found: ${INPUT_FILE}`);
        console.error('   Place your draft at content/kvartal/draft.md');
        process.exit(1);
    }

    // Ensure output dir exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Read and parse markdown
    let markdown = fs.readFileSync(INPUT_FILE, 'utf-8');

    // Remove frontmatter if present
    markdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, '');

    // Split footnote from main body (separated by **Fotnot**)
    let mainBody = markdown;
    let footnote = '';

    const footnoteMatch = markdown.match(/\n\*\*Fotnot\*\*\n?([\s\S]*$)/);
    if (footnoteMatch) {
        mainBody = markdown.slice(0, footnoteMatch.index);
        footnote = footnoteMatch[1].trim();
    }

    const mainHtml = marked.parse(mainBody);
    const footnoteHtml = footnote ? marked.parse(footnote) : '';

    // Construct HTML
    const html = `
    <!DOCTYPE html>
    <html lang="sv">
    <head>
        <meta charset="UTF-8">
        ${pdfStyles}
    </head>
    <body>
        <div class="essay-header">
            <div class="author">${AUTHOR}</div>
            <div class="date">${DATE}</div>
        </div>

        <main>
            ${mainHtml}
        </main>

        ${footnoteHtml ? `
        <div class="footnote-separator">
            <div class="footnote-content">
                <strong>Fotnot</strong>
                ${footnoteHtml}
            </div>
        </div>
        ` : ''}
    </body>
    </html>
    `;

    // Render PDF
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: OUTPUT_FILE,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: false,
        margin: { top: '3cm', bottom: '2.5cm', left: '2.5cm', right: '2.5cm' }
    });

    await page.close();
    await browser.close();

    console.log(`✅ Saved: ${OUTPUT_FILE}`);
    console.log(`   Size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
}

generate().catch(console.error);
