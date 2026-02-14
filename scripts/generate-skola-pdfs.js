#!/usr/bin/env node

/**
 * Generate PDFs for School Materials (Svensk Subsidiaritet)
 * Usage: node scripts/generate-school-pdfs.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---

const INPUT_DIR = path.join(__dirname, '../content/skola');
// Output directly to downloads folder to match your Svelte links (/downloads/filename.pdf)
const OUTPUT_DIR = path.join(__dirname, '../static/downloads'); 
const COVER_IMAGE = path.join(__dirname, '../static/images/skola-cover-optimized.png');

// Global Metadata
const AUTHOR = "Svensk Subsidiaritet";
const DATE = "Februari 2026";
const SITE_URL = "https://svensksubsidiaritet.se/verktyg/skola";

// File Mapping
const DOCUMENTS = [
    {
        file: '60-minuter.md',
        title: 'Systemtänkande på 60 minuter',
        subtitle: 'Lärarhandledning: En introduktionslektion',
        type: 'Lektionsplanering',
        output: 'skola-60-minuter.pdf'
    },
    {
        file: '60-minutes.md',
        title: 'Systems Thinking in 60 Minutes',
        subtitle: 'Teacher Guide: An Introductory Lesson',
        type: 'Lesson planning',
        output: 'skola-60-minutes.pdf'
    },
    {
        file: '6-veckor.md',
        title: 'Systemtänkande & Subsidiaritet',
        subtitle: 'En 6-veckors modul för Gymnasiet (Samhällskunskap 1b)',
        type: 'Kursmodul',
        output: 'skola-6-veckor.pdf'
    }
];

// --- STYLING ---
// Kept consistent with your brand but slightly cleaner for teachers
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

    .cover-image {
        max-width: 100%;
        max-height: 600px;
        object-fit: contain;
        margin-bottom: 2rem;
        display: block;
    }
   
    /* Cover Page */
    .cover {
        height: 297mm;
        width: 210mm;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        page-break-after: always;
        background-color: #fafaf9;
        margin: -2.5cm -2cm;
        padding: 2.5cm 2cm;
        overflow: hidden;
    }
    
    .cover-type {
        font-family: 'Arial', sans-serif;
        font-size: 10pt;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #d97706; /* Amber-600 */
        margin-bottom: 1rem;
        border-bottom: 2px solid #1c1917;
        display: inline-block;
        padding-bottom: 5px;
    }

    .cover h1 {
        font-family: 'Arial', sans-serif;
        font-size: 36pt;
        font-weight: 800;
        line-height: 1.1;
        margin: 0 0 1rem 0;
        color: #000;
        letter-spacing: -1px;
        border-bottom: none;
    }
    
    .cover .subtitle {
        font-size: 18pt;
        font-style: italic;
        color: #57534e;
        margin-bottom: 3rem;
        font-weight: normal;
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
    h1, h2, h3, h4 {
        font-family: 'Arial', sans-serif;
        color: #000;
        page-break-after: avoid;
    }
    
    h1 { font-size: 24pt; margin-top: 0; border-bottom: 2px solid #e7e5e4; padding-bottom: 0.5rem; color: #1c1917; }
    h2 { font-size: 18pt; margin-top: 2rem; font-weight: bold; color: #1c1917; border-bottom: 1px solid #f5f5f4; }
    h3 { font-size: 14pt; margin-top: 1.5rem; font-weight: bold; color: #444; }
    
    p { margin-bottom: 1rem; text-align: justify; }
    ul, ol { margin-bottom: 1rem; }
    li { margin-bottom: 0.5rem; }
    
    blockquote {
        border-left: 4px solid #d97706; /* Amber accent */
        margin: 1.5rem 0;
        padding: 1rem;
        font-style: italic;
        background: #fffbeb; /* Amber-50 */
    }

    code {
        font-family: monospace;
        background: #f5f5f4;
        padding: 2px 4px;
        border-radius: 3px;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 2rem 0;
        font-size: 10pt;
    }
    
    th {
        background: #f5f5f4;
        color: #000;
        padding: 0.8rem;
        text-align: left;
        border-bottom: 2px solid #1c1917;
    }
    
    td {
        border-bottom: 1px solid #e7e5e4;
        padding: 0.8rem;
    }

    a { color: #2563eb; text-decoration: none; }
</style>
`;

// --- HELPERS ---

function getCoverImage() {
    console.log(`🔍 Checking for cover image at: ${COVER_IMAGE}`);
    
    if (fs.existsSync(COVER_IMAGE)) {
        const stats = fs.statSync(COVER_IMAGE);
        console.log(`   ✅ File found! Size: ${stats.size} bytes`);
        
        if (stats.size === 0) {
            console.warn("   ⚠️ WARNING: File is empty (0 bytes).");
            return null;
        }

        const bitmap = fs.readFileSync(COVER_IMAGE);
        const base64 = bitmap.toString('base64');
        console.log(`   ✅ Converted to Base64 (Length: ${base64.length} chars)`);
        
        // Ensure this matches your actual file type
        return `data:image/png;base64,${base64}`;
    } else {
        console.error(`   ❌ ERROR: File NOT found at ${COVER_IMAGE}`);
        console.log(`      Current directory: ${__dirname}`);
    }
    return null;
}

// --- MAIN GENERATOR ---

async function generateAll() {
    console.log(`🏭 Starting School PDF Factory...`);
    console.log(`📂 Input: ${INPUT_DIR}`);
    console.log(`📂 Output: ${OUTPUT_DIR}`);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const coverBase64 = getCoverImage();
    const browser = await puppeteer.launch({ headless: "new" });

    for (const doc of DOCUMENTS) {
        const inputPath = path.join(INPUT_DIR, doc.file);
        const outputPath = path.join(OUTPUT_DIR, doc.output);

        if (!fs.existsSync(inputPath)) {
            console.warn(`⚠️  Skipping ${doc.file} (File not found)`);
            continue;
        }

        console.log(`📄 Processing: ${doc.title}...`);

        const markdown = fs.readFileSync(inputPath, 'utf-8');
        const contentHtml = marked.parse(markdown);

        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            ${pdfStyles}
        </head>
        <body>
            <div class="cover">
                <div class="cover-type">${doc.type}</div>
                
                <h1>${doc.title}</h1>
                <div class="subtitle">${doc.subtitle}</div>

                ${coverBase64 ? `<img src="${coverBase64}" class="cover-image" alt="Cover image">` : ''}

                <div class="meta">
                    ${AUTHOR} • ${DATE} <br/>
                    ${SITE_URL}
                </div>
            </div>

            <main>
                ${contentHtml}
            </main>
        </body>
        </html>
        `;

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });

        if (doc.file === '60-minutes.md')
        {
          await page.pdf({
              path: outputPath,
              format: 'A4',
              printBackground: true,
              displayHeaderFooter: true,
              headerTemplate: '<div></div>',
              footerTemplate: `
                  <div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; margin: 0 auto; padding-bottom: 10px;">
                      Svensk Subsidiaritet • School Supplies • <span class="pageNumber"></span>
                  </div>
              `,
              margin: { top: '2cm', bottom: '2cm', left: '2cm', right: '2cm' }
          });
        }
        else
        {
          await page.pdf({
              path: outputPath,
              format: 'A4',
              printBackground: true,
              displayHeaderFooter: true,
              headerTemplate: '<div></div>',
              footerTemplate: `
                  <div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; margin: 0 auto; padding-bottom: 10px;">
                      Svensk Subsidiaritet • Skolmaterial • <span class="pageNumber"></span>
                  </div>
              `,
              margin: { top: '2cm', bottom: '2cm', left: '2cm', right: '2cm' }
          });
        }

        await page.close();
        console.log(`✅ Saved: ${doc.output}`);
    }

    await browser.close();
    console.log(`\n✨ All School PDFs generated successfully!`);
}

generateAll().catch(console.error);
