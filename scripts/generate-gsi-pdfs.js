#!/usr/bin/env node

/**
 * Generate Stand-Alone PDFs for the Global Subsidiarity Index (GSI)
 * * Usage: node scripts/generate-gsi-pdfs.js
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

// --- CONFIGURATION ---

const INPUT_DIR = path.join(__dirname, '../content/gsi');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads/gsi');
const COVER_IMAGE = path.join(__dirname, '../static/images/gsi-cover-optimized.png');

// Global Metadata
const AUTHOR = "Björn Kenneth Holmström";
const DATE = "February 2026";
const SITE_URL = "https://svensksubsidiaritet.se";

// File Mapping: Input Filename -> PDF Metadata
const DOCUMENTS = [
    {
        file: 'gsi-framework-v3.md',
        title: 'Global Subsidiarity Index Framework',
        subtitle: 'Version 3.0: A Universal Metric for Governance Architecture',
        type: 'Core Framework',
        output: 'GSI-Framework-v3.pdf'
    },
    {
        file: 'appendix-1-technical-manual.md',
        title: 'Appendix 1: Technical Manual',
        subtitle: 'Measurement Protocols & Verification Standards',
        type: 'Technical Documentation',
        output: 'GSI-Appendix-1-Technical-Manual.pdf'
    },
    {
        file: 'appendix-2-country-adaptation-guidelines.md',
        title: 'Appendix 2: Country Adaptation Guidelines',
        subtitle: 'Context-Specific Implementation Frameworks',
        type: 'Implementation Guide',
        output: 'GSI-Appendix-2-Country-Adaptation.pdf'
    },
    {
        file: 'appendix-3-dashboard-specifications.md',
        title: 'Appendix 3: Digital Platform Specifications',
        subtitle: 'Architectural Vision for the GSI Dashboard',
        type: 'Technical Specification',
        output: 'GSI-Appendix-3-Dashboard-Specs.pdf'
    },
    {
        file: 'appendix-4-case-studies.md',
        title: 'Appendix 4: Pilot Nation Case Studies',
        subtitle: 'Diagnostic Baselines: Sweden, Germany, Canada, Rwanda, South Korea',
        type: 'Case Studies',
        output: 'GSI-Appendix-4-Pilot-Cases.pdf'
    },
    {
        file: 'appendix-5-research-validation.md',
        title: 'Appendix 5: Research Validation',
        subtitle: 'Academic Foundations and Theoretical Basis',
        type: 'Research',
        output: 'GSI-Appendix-5-Research-Validation.pdf'
    },
    {
        file: 'appendix-6-implementation-roadmap.md',
        title: 'Appendix 6: Implementation Roadmap',
        subtitle: 'Phased Rollout Strategy 2026-2030',
        type: 'Strategy',
        output: 'GSI-Appendix-6-Roadmap.pdf'
    },
    {
        file: 'appendix-7-training-and-capacity-building.md',
        title: 'Appendix 7: Training & Capacity Building',
        subtitle: 'Curriculum for GSI Assessors and Policymakers',
        type: 'Training Manual',
        output: 'GSI-Appendix-7-Training.pdf'
    },
    {
        file: 'appendix-8-legal-and-ethical-framework.md',
        title: 'Appendix 8: Legal & Ethical Framework',
        subtitle: 'Data Sovereignty, Privacy, and Governance Protocols',
        type: 'Legal',
        output: 'GSI-Appendix-8-Legal-Ethical.pdf'
    }
];

// --- STYLING (The "Manifesto" Look) ---

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
        height: 297mm; /* Exact A4 Height */
        width: 210mm;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        page-break-after: always;
        background-color: #fafaf9; /* Stone-50 */
        margin: -2.5cm -2cm; /* Counteract body margin to bleed */
        padding: 2.5cm 2cm;
        overflow: hidden;
    }
    
    .cover-img-container {
        width: 100%;
        height: 350px;
        overflow: hidden;
        margin-bottom: 3rem;
        border: 1px solid #e7e5e4;
        background-color: #fff;
    }
    
    .cover-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cover-type {
        font-family: 'Arial', sans-serif;
        font-size: 9pt;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #78716c;
        margin-bottom: 1rem;
        border-bottom: 2px solid #1c1917;
        display: inline-block;
        padding-bottom: 5px;
    }

    .cover h1 {
        font-family: 'Arial', sans-serif;
        font-size: 32pt;
        font-weight: 800;
        line-height: 1.1;
        margin: 0 0 1rem 0;
        color: #000;
        letter-spacing: -1px;
        border-bottom: none;
    }
    
    .cover .subtitle {
        font-size: 16pt;
        font-style: italic;
        color: #57534e;
        margin-bottom: 2rem;
        font-weight: normal;
    }
    
    .cover .meta {
        margin-top: auto;
        border-top: 1px solid #e7e5e4;
        padding-top: 1rem;
        font-family: monospace;
        color: #78716c;
        font-size: 9pt;
    }

    /* Content Styling */
    h1, h2, h3, h4 {
        font-family: 'Arial', sans-serif;
        color: #000;
        page-break-after: avoid;
    }
    
    h1 { font-size: 22pt; margin-top: 2rem; border-bottom: 2px solid #e7e5e4; padding-bottom: 0.5rem; }
    h2 { font-size: 16pt; margin-top: 1.5rem; font-weight: bold; }
    h3 { font-size: 13pt; margin-top: 1.2rem; font-weight: bold; color: #444; }
    
    p { margin-bottom: 1rem; text-align: justify; }
    
    blockquote {
        border-left: 4px solid #1c1917;
        margin: 1.5rem 0;
        padding: 1rem;
        font-style: italic;
        background: #f5f5f4;
    }

    code {
        font-family: monospace;
        background: #f5f5f4; /* Light grey background */
        color: #1c1917;      /* Dark text */
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 0.9em;
    }
    
    pre {
        background: #292524; /* Stone-800 (Dark) */
        color: #fafaf9;      /* Stone-50 (Light Text) */
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        font-size: 0.9em;
        margin: 1.5rem 0;
    }

    pre code {
        background: transparent; /* Remove the white background */
        color: inherit;          /* Inherit the light text color */
        padding: 0;
        border-radius: 0;
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

    .page-break { page-break-before: always; }
</style>
`;

// --- HELPERS ---

function getCoverImage() {
    if (fs.existsSync(COVER_IMAGE)) {
        const bitmap = fs.readFileSync(COVER_IMAGE);
        return `data:image/jpeg;base64,${bitmap.toString('base64')}`;
    }
    return null;
}

// --- MAIN GENERATOR ---

async function generateAll() {
    console.log(`🏭 Starting GSI PDF Factory...`);
    console.log(`📂 Input: ${INPUT_DIR}`);
    console.log(`📂 Output: ${OUTPUT_DIR}`);

    // Ensure output dir exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const coverBase64 = getCoverImage();
    const browser = await puppeteer.launch({ headless: "new" });

    // Iterate through documents
    for (const doc of DOCUMENTS) {
        const inputPath = path.join(INPUT_DIR, doc.file);
        const outputPath = path.join(OUTPUT_DIR, doc.output);

        if (!fs.existsSync(inputPath)) {
            console.warn(`⚠️  Skipping ${doc.file} (File not found)`);
            continue;
        }

        console.log(`📄 Processing: ${doc.title}...`);

        // Read and Parse Markdown
        const markdown = fs.readFileSync(inputPath, 'utf-8');
        // Remove frontmatter if present
        const cleanMarkdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, '');
        const contentHtml = marked.parse(cleanMarkdown);

        // Construct HTML with Title Page
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
                
                ${coverBase64 ? `
                <div class="cover-img-container">
                    <img src="${coverBase64}" class="cover-img" />
                </div>` : ''}

                <h1>${doc.title}</h1>
                <div class="subtitle">${doc.subtitle}</div>

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

        // Render PDF
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });

        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: '<div></div>',
            footerTemplate: `
                <div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; margin: 0 auto; padding-bottom: 10px;">
                    Global Subsidiarity Index • ${doc.title} • <span class="pageNumber"></span>
                </div>
            `,
            margin: { top: '2cm', bottom: '2cm', left: '2cm', right: '2cm' }
        });

        await page.close();
        console.log(`✅ Saved: ${doc.output}`);
    }

    await browser.close();
    console.log(`\n✨ All PDFs generated successfully in ${OUTPUT_DIR}`);
}

generateAll().catch(console.error);
