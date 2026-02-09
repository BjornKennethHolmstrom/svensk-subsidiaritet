#!/usr/bin/env node

/**
 * Generate PDF for The Swedish Subsidiarity Hypothesis
 * * Usage: node scripts/generate-subsidiarity-pdf.js [language]
 * Example: node scripts/generate-subsidiarity-pdf.js sv
 * * Requirements:
 * npm install marked puppeteer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LANGUAGE = process.argv[2] || 'sv'; // Default to Swedish
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
    console.error(`Invalid language: ${LANGUAGE}`);
    console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
    process.exit(1);
}

// File Paths
const INPUT_DIR = path.join(__dirname, '../src/routes/bibliotek/svenska-subsidiaritetshypotesen/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads');

const COVER_IMAGE = path.join(__dirname, '../static/images/whitepaper-cover-optimized.png');

// Output Filenames
const FILENAMES = {
    sv: 'Svensk-Subsidiaritetshypotes-2026.pdf',
    en: 'Swedish-Subsidiarity-Hypothesis-2026.pdf'
};
const OUTPUT_FILE = path.join(OUTPUT_DIR, FILENAMES[LANGUAGE]);

// Metadata
const metadata = {
    sv: {
        title: "Den Svenska Subsidiaritetshypotesen",
        subtitle: "Från centraliserad excellens till distribuerad resiliens",
        description: "En vitbok som diagnostiserar centraliseringens kostnader och presenterar ramverket för ett distribuerat Sverige.",
        author: "Björn Kenneth Holmström",
        date: "Februari 2026",
        footer: "Vitbok 2026 | Svensk Subsidiaritet",
        url: "https://svensksubsidiaritet.se"
    },
    en: {
        title: "The Swedish Subsidiarity Hypothesis",
        subtitle: "From Centralized Excellence to Distributed Resilience",
        description: "A whitepaper diagnosing the costs of centralization and presenting the framework for a distributed Sweden.",
        author: "Björn Kenneth Holmström",
        date: "February 2026",
        footer: "Whitepaper 2026 | Swedish Subsidiarity",
        url: "https://svensksubsidiaritet.se"
    }
};

const meta = metadata[LANGUAGE];

// Section Mapping (Order matters!)
const sections = [
    { file: 'abstract', title: LANGUAGE === 'sv' ? 'Sammanfattning' : 'Abstract' },
    { file: 'introduction', title: LANGUAGE === 'sv' ? 'Introduktion' : 'Introduction' },
    { file: 'chapter-1', title: LANGUAGE === 'sv' ? 'Kapitel 1: Tio Systemanalyser' : 'Chapter 1: Ten Systems Analysis' },
    { file: 'chapter-2', title: LANGUAGE === 'sv' ? 'Kapitel 2: Centraliseringens Kybernetik' : 'Chapter 2: The Cybernetics of Centralization' },
    { file: 'chapter-3', title: LANGUAGE === 'sv' ? 'Kapitel 3: Ramverket' : 'Chapter 3: The Framework' },
    { file: 'chapter-4', title: LANGUAGE === 'sv' ? 'Kapitel 4: Övergången' : 'Chapter 4: The Transition' },
    { file: 'chapter-5', title: LANGUAGE === 'sv' ? 'Kapitel 5: Det Globala Löftet' : 'Chapter 5: The Global Promise' }
];

// CSS Styling (Manifesto Aesthetic)
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
        color: #1c1917; /* Stone-900 */
        margin: 0;
    }
    
    /* Cover Page */
    .cover {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        page-break-after: always;
    }
    
    .cover-img-container {
        width: 100%;
        height: 400px;
        overflow: hidden;
        margin-bottom: 3rem;
        border: 1px solid #e7e5e4;
    }
    
    .cover-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cover h1 {
        font-family: 'Arial', sans-serif; /* Fallback for Inter */
        font-size: 36pt;
        font-weight: 800;
        line-height: 1.1;
        margin: 0 0 1rem 0;
        color: #000;
        letter-spacing: -1px;
    }
    
    .cover .subtitle {
        font-size: 18pt;
        font-style: italic;
        color: #57534e; /* Stone-600 */
        margin-bottom: 2rem;
    }
    
    .cover .meta {
        margin-top: auto;
        border-top: 1px solid #e7e5e4;
        padding-top: 1rem;
        font-family: monospace;
        color: #78716c;
        font-size: 10pt;
    }

    /* Content Styling */
    h1, h2, h3 {
        font-family: 'Arial', sans-serif;
        color: #000;
        page-break-after: avoid;
    }
    
    h1 { font-size: 24pt; margin-top: 2rem; border-bottom: 2px solid #000; padding-bottom: 0.5rem; }
    h2 { font-size: 18pt; margin-top: 1.5rem; }
    h3 { font-size: 14pt; font-style: italic; color: #444; }
    
    p { margin-bottom: 1rem; text-align: justify; }
    
    blockquote {
        border-left: 4px solid #000;
        margin: 1.5rem 0;
        padding-left: 1rem;
        font-style: italic;
        background: #f5f5f4; /* Stone-100 */
        padding: 1rem;
    }
    
    ul, ol { margin-bottom: 1rem; }
    li { margin-bottom: 0.5rem; }
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 2rem 0;
        font-size: 10pt;
    }
    
    th {
        background: #000;
        color: #fff;
        padding: 0.8rem;
        text-align: left;
    }
    
    td {
        border: 1px solid #e7e5e4;
        padding: 0.8rem;
    }

    /* Helper Classes */
    .page-break { page-break-before: always; }
</style>
`;

// Helper: Read Markdown
function readSections() {
    console.log(`📖 Reading sections for ${LANGUAGE}...`);
    return sections.map(section => {
        const filename = `${section.file}-${LANGUAGE}.md`;
        const filepath = path.join(INPUT_DIR, filename);
        
        if (!fs.existsSync(filepath)) {
            console.warn(`⚠️ Warning: Missing file ${filename}`);
            return { html: `` };
        }

        const content = fs.readFileSync(filepath, 'utf-8');
        // Strip frontmatter if present
        const cleanContent = content.replace(/^---\n[\s\S]*?\n---\n/, '');
        return { html: marked.parse(cleanContent) };
    });
}

// Helper: Get Cover Image
function getCoverImage() {
    if (fs.existsSync(COVER_IMAGE)) {
        const bitmap = fs.readFileSync(COVER_IMAGE);
        return `data:image/jpeg;base64,${bitmap.toString('base64')}`;
    }
    console.warn("⚠️ Cover image not found.");
    return null;
}

// Main Function
async function generate() {
    console.log(`🚀 Generating PDF: ${FILENAMES[LANGUAGE]}`);
    
    // 1. Prepare Content
    const sectionData = readSections();
    const coverBase64 = getCoverImage();
    
    // 2. Build HTML
    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        ${pdfStyles}
    </head>
    <body>
        <div class="cover">
            <div class="meta">VITBOK / WHITEPAPER 2026</div>
            <div style="flex-grow:1; display:flex; flex-direction:column; justify-content:center;">
                ${coverBase64 ? `<div class="cover-img-container"><img src="${coverBase64}" class="cover-img" /></div>` : ''}
                <h1>${meta.title}</h1>
                <div class="subtitle">${meta.subtitle}</div>
            </div>
            <div class="meta">
                ${meta.author} • ${meta.date} <br/>
                ${meta.url}
            </div>
        </div>
    `;

    // Add Sections
    sectionData.forEach((section, index) => {
        // Page break before every major chapter (skip for abstract/intro if desired)
        if (index > 0) html += `<div class="page-break"></div>`;
        html += `<main>${section.html}</main>`;
    });

    html += `</body></html>`;

    // 3. Render PDF
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Ensure output dir exists
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    await page.pdf({
        path: OUTPUT_FILE,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `
            <div style="font-size: 9pt; font-family: sans-serif; color: #999; margin: 0 auto; padding-bottom: 10px;">
                ${meta.footer} • <span class="pageNumber"></span>
            </div>
        `,
        margin: { top: '2cm', bottom: '2cm', left: '2cm', right: '2cm' }
    });

    await browser.close();
    console.log(`✅ Success! Saved to: ${OUTPUT_FILE}`);
}

generate().catch(console.error);
