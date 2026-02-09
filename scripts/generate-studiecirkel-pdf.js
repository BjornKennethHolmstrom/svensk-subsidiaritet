#!/usr/bin/env node

/**
 * Generate PDF for the Study Circle Kit (Studiecirkel)
 * Usage: node scripts/generate-studiecirkel-pdf.js [language]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LANGUAGE = process.argv[2] || 'sv';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
    console.error(`Invalid language: ${LANGUAGE}`);
    process.exit(1);
}

// Paths
const CONTENT_ROOT = path.join(__dirname, '../content/studiecirkel');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads');
const COVER_IMAGE = path.join(__dirname, '../static/images/studiecirkel-cover-optimized.png');

// Output Filenames
const FILENAMES = {
    sv: 'Studiecirkel-Komplett-SV.pdf',
    en: 'Study-Circle-Complete-EN.pdf'
};
const OUTPUT_FILE = path.join(OUTPUT_DIR, FILENAMES[LANGUAGE]);

// File Mappings - Updated for new structure
const SECTIONS_CONFIG = {
    sv: [
        // Part 1: Facilitator Guides
        { 
            file: '00-ledarguide.md', 
            title: 'Cirkelledarens guide',
            section: 'Ledarguider'
        },
        { 
            file: '01-innan-du-börjar.md', 
            title: 'Innan du börjar – Vägledning för värdskap',
            section: 'Ledarguider'
        },
        { 
            file: '02-leda-i-samtal.md', 
            title: 'För cirkelledaren – Konsten att leda svenskar i samtal',
            section: 'Ledarguider'
        },
        { 
            file: '03-efter-cirkeln.md', 
            title: 'Efter cirkeln – Från samtal till samhälle',
            section: 'Ledarguider'
        },
        
        // Part 2: Session Guides (Full versions)
        { 
            file: 'traff-1.md', 
            title: 'Träff 1: Det svenska paradoxen – Diagnosen',
            section: 'Träffguider'
        },
        { 
            file: 'traff-2.md', 
            title: 'Träff 2: Närhetskompassen – Verktyget',
            section: 'Träffguider'
        },
        { 
            file: 'traff-3.md', 
            title: 'Träff 3: Subsidiaritet – Lösningen',
            section: 'Träffguider'
        },
        { 
            file: 'traff-4.md', 
            title: 'Träff 4: Från ord till handling',
            section: 'Träffguider'
        },
        
        // Part 3: Printable Materials
        { 
            file: 'material-systemkanslometer.md', 
            title: 'Material: Systemkänslometer',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-narhetskompassen-mall.md', 
            title: 'Material: Närhetskompassen',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-subsidiaritetsexempel.md', 
            title: 'Material: Subsidiaritetsexempel',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-skattkarta.md', 
            title: 'Material: Skattkarta',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-handlingsplan.md', 
            title: 'Material: Handlingsplan',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-30-dagarskontrakt.md', 
            title: 'Material: 30-dagarskontrakt',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-handouts-alla.md', 
            title: 'Material: Handouts för alla träffar',
            section: 'Material att skriva ut'
        },
        { 
            file: 'material-facilitator-checklista.md', 
            title: 'Material: Facilitatorns checklista',
            section: 'Material att skriva ut'
        }
    ],
    en: [
        // Part 1: Facilitator Guides
        { 
            file: '00-facilitator-guide.md', 
            title: "Facilitator's Guide",
            section: 'Facilitator Guides'
        },
        { 
            file: '01-before-you-begin.md', 
            title: 'Before You Begin – Guidance for Hosting',
            section: 'Facilitator Guides'
        },
        { 
            file: '02-leading-conversations.md', 
            title: 'For the Facilitator – The Art of Leading Dialogue',
            section: 'Facilitator Guides'
        },
        { 
            file: '03-after-the-circle.md', 
            title: 'After the Circle – From Conversation to Community',
            section: 'Facilitator Guides'
        },
        
        // Part 2: Session Guides
        { 
            file: 'session-1.md', 
            title: 'Session 1: The Swedish Paradox – The Diagnosis',
            section: 'Session Guides'
        },
        { 
            file: 'session-2.md', 
            title: 'Session 2: The Proximity Compass – The Tool',
            section: 'Session Guides'
        },
        { 
            file: 'session-3.md', 
            title: 'Session 3: Subsidiarity – The Solution',
            section: 'Session Guides'
        },
        { 
            file: 'session-4.md', 
            title: 'Session 4: From Words to Action',
            section: 'Session Guides'
        },
        
        // Part 3: Printable Materials
        { 
            file: 'material-system-sensor.md', 
            title: 'Material: System Sensor',
            section: 'Printable Materials'
        },
        { 
            file: 'material-proximity-compass-template.md', 
            title: 'Material: Proximity Compass Template',
            section: 'Printable Materials'
        },
        { 
            file: 'material-subsidiarity-examples.md', 
            title: 'Material: Subsidiarity Examples',
            section: 'Printable Materials'
        },
        { 
            file: 'material-treasure-map.md', 
            title: 'Material: Treasure Map',
            section: 'Printable Materials'
        },
        { 
            file: 'material-action-plan.md', 
            title: 'Material: Action Plan',
            section: 'Printable Materials'
        },
        { 
            file: 'material-30-day-contract.md', 
            title: 'Material: 30-Day Contract',
            section: 'Printable Materials'
        },
        { 
            file: 'material-all-handouts.md', 
            title: 'Material: Handouts for All Sessions',
            section: 'Printable Materials'
        },
        { 
            file: 'material-facilitator-checklist.md', 
            title: 'Material: Facilitator Checklist',
            section: 'Printable Materials'
        }
    ]
};

// Metadata
const metadata = {
    sv: {
        title: "Studiecirkel: Att återta makten",
        subtitle: "Komplett material för systemförståelse och närstyre",
        author: "Svensk Subsidiaritet",
        footer: "Studiecirkelmaterial 2026",
    },
    en: {
        title: "Study Circle: Reclaiming Power",
        subtitle: "Complete materials for systems understanding and subsidiarity",
        author: "Swedish Subsidiarity",
        footer: "Study Circle Kit 2026",
    }
};

const meta = metadata[LANGUAGE];
const sectionsToProcess = SECTIONS_CONFIG[LANGUAGE];

// CSS Styling (Workbook/Guide Aesthetic)
const pdfStyles = `
<style>
    @page {
        size: A4;
        margin: 2cm;
    }
    
    body {
        font-family: 'Georgia', serif;
        font-size: 11pt;
        line-height: 1.6;
        color: #292524; /* Stone-800 */
        margin: 0;
    }
    
    /* Cover Page */
    .cover {
        /* FIXED: Use exact A4 dimensions instead of viewport units */
        height: 297mm; 
        width: 210mm;
        
        /* FIXED: Ensure padding is included in the height/width calculation */
        box-sizing: border-box; 
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        page-break-after: always;
        background-color: #fafaf9; /* Stone-50 */
        
        /* Bleed logic: Undo the 2cm body margin */
        margin: -2cm; 
        padding: 2cm;
        
        /* FIXED: Cut off any tiny pixel overflow that forces a new page */
        overflow: hidden; 
    }
    
    .cover-img-container {
        width: 100%;
        height: 450px;
        overflow: hidden;
        margin-bottom: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    
    .cover-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cover h1 {
        font-family: 'Arial', sans-serif;
        font-size: 32pt;
        font-weight: 800;
        margin: 0 0 1rem 0;
        color: #1c1917;
    }
    
    .cover .subtitle {
        font-size: 16pt;
        font-style: italic;
        color: #57534e;
        margin-bottom: 2rem;
    }
    
    .cover .toc-preview {
        text-align: left;
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        margin: 2rem auto;
        max-width: 80%;
        font-size: 10pt;
    }
    
    .cover .toc-preview h3 {
        margin: 0 0 0.5rem 0;
        font-size: 12pt;
        color: #1c1917;
    }
    
    .cover .toc-preview ul {
        margin: 0;
        padding-left: 1.5rem;
        list-style: none;
    }
    
    .cover .toc-preview li {
        padding: 0.25rem 0;
        color: #44403c;
    }
    
    .cover .toc-preview li:before {
        content: "→ ";
        color: #78716c;
    }

    /* Content Styling */
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 24pt;
        font-weight: bold;
        color: #1c1917;
        border-bottom: 3px solid #e7e5e4;
        padding-bottom: 0.5rem;
        margin-top: 2rem;
        page-break-after: avoid;
    }
    
    h2 {
        font-family: 'Arial', sans-serif;
        font-size: 16pt;
        color: #44403c;
        margin-top: 1.5rem;
        page-break-after: avoid;
    }
    
    h3 {
        font-family: 'Arial', sans-serif;
        font-size: 13pt;
        color: #57534e;
        margin-top: 1rem;
        page-break-after: avoid;
    }

    /* Boxed Content (Exercises/Discussion) */
    blockquote {
        background: #f5f5f4;
        border-left: 5px solid #1c1917;
        margin: 1.5rem 0;
        padding: 1rem;
        font-style: italic;
        page-break-inside: avoid;
    }
    
    /* Code blocks */
    pre {
        background: #fafaf9;
        border: 1px solid #e7e5e4;
        border-radius: 4px;
        padding: 1rem;
        overflow-x: auto;
        font-size: 9pt;
        page-break-inside: avoid;
    }
    
    code {
        background: #fafaf9;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-size: 10pt;
    }
    
    /* Tables */
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        page-break-inside: avoid;
    }
    
    th, td {
        border: 1px solid #d6d3d1;
        padding: 0.75rem;
        text-align: left;
    }
    
    th {
        background: #f5f5f4;
        font-weight: bold;
        font-family: 'Arial', sans-serif;
    }
    
    /* Lists for discussion questions */
    ul, ol {
        margin-bottom: 1rem;
        padding-left: 2rem;
    }
    
    li {
        margin-bottom: 0.5rem;
    }
    
    /* Checkboxes */
    input[type="checkbox"] {
        margin-right: 0.5rem;
    }
    
    /* Strong emphasis */
    strong {
        color: #1c1917;
    }
    
    /* Links */
    a {
        color: #2563eb;
        text-decoration: none;
    }
    
    a:after {
        content: " (" attr(href) ")";
        font-size: 9pt;
        color: #78716c;
    }

    /* Page Breaks */
    .page-break { 
        page-break-before: always; 
    }
    
    .section-break {
        page-break-before: always;
        background: #1c1917;
        color: white;
        padding: 2rem;
        margin: -2cm -2cm 2cm -2cm;
        text-align: center;
    }
    
    .section-break h2 {
        color: white;
        margin: 0;
        font-size: 20pt;
    }
</style>
`;

function getCoverImage() {
    if (fs.existsSync(COVER_IMAGE)) {
        const bitmap = fs.readFileSync(COVER_IMAGE);
        return `data:image/jpeg;base64,${bitmap.toString('base64')}`;
    }
    return null;
}

function readMarkdown() {
    let currentSection = null;
    let htmlFragments = [];
    
    // Helper function to convert image paths to absolute
    function convertImagePaths(htmlContent) {
        // Convert markdown image syntax to HTML with absolute paths
        return htmlContent
            // Handle markdown image syntax
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
                // If it's already a full URL, keep it
                if (src.startsWith('http') || src.startsWith('data:')) {
                    return match;
                }
                // Convert relative path to absolute
                const absolutePath = path.join(__dirname, '../static', src);
                if (fs.existsSync(absolutePath)) {
                    const ext = path.extname(src).toLowerCase();
                    const mimeTypes = {
                        '.svg': 'image/svg+xml',
                        '.png': 'image/png',
                        '.jpg': 'image/jpeg',
                        '.jpeg': 'image/jpeg',
                        '.gif': 'image/gif',
                        '.webp': 'image/webp'
                    };
                    const mimeType = mimeTypes[ext] || 'image/jpeg';
                    
                    try {
                        const bitmap = fs.readFileSync(absolutePath);
                        const base64 = bitmap.toString('base64');
                        return `<img src="data:${mimeType};base64,${base64}" alt="${alt}" style="max-width: 100%; height: auto; margin: 1rem 0;" />`;
                    } catch (error) {
                        console.warn(`⚠️  Failed to read image: ${absolutePath}`);
                        return `<div style="border: 2px dashed #ccc; padding: 1rem; text-align: center; color: #666;">[Bild saknas: ${src}]</div>`;
                    }
                } else {
                    console.warn(`⚠️  Image not found: ${absolutePath}`);
                    return `<div style="border: 2px dashed #ccc; padding: 1rem; text-align: center; color: #666;">[Bild saknas: ${src}]</div>`;
                }
            })
            // Also handle HTML img tags just in case
            .replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (match, src) => {
                if (src.startsWith('http') || src.startsWith('data:')) {
                    return match;
                }
                const absolutePath = path.join(__dirname, '../static', src);
                if (fs.existsSync(absolutePath)) {
                    const ext = path.extname(src).toLowerCase();
                    const mimeTypes = {
                        '.svg': 'image/svg+xml',
                        '.png': 'image/png',
                        '.jpg': 'image/jpeg',
                        '.jpeg': 'image/jpeg',
                        '.gif': 'image/gif',
                        '.webp': 'image/webp'
                    };
                    const mimeType = mimeTypes[ext] || 'image/jpeg';
                    
                    try {
                        const bitmap = fs.readFileSync(absolutePath);
                        const base64 = bitmap.toString('base64');
                        return match.replace(src, `data:${mimeType};base64,${base64}`);
                    } catch (error) {
                        console.warn(`⚠️  Failed to read image: ${absolutePath}`);
                        return match.replace(src, '#');
                    }
                }
                return match;
            });
    }
    
    sectionsToProcess.forEach((section, index) => {
        const filepath = path.join(CONTENT_ROOT, section.file);
        
        // Add section break when section changes
        if (section.section && section.section !== currentSection) {
            currentSection = section.section;
            // Create a dedicated page for the section header - FIXED margin issue
            htmlFragments.push(`
                <div style="page-break-before: always; height: 297mm; width: 210mm; display: flex; align-items: center; justify-content: center; background: #1c1917; color: white; margin: 0; box-sizing: border-box;">
                    <div style="text-align: center; padding: 3rem;">
                        <h1 style="font-size: 36pt; margin: 0 0 1rem 0; color: white; border: none;">${section.section}</h1>
                        <p style="font-size: 16pt; color: #d6d3d1;">${meta.subtitle}</p>
                    </div>
                </div>
            `);
        }
        
        if (!fs.existsSync(filepath)) {
            console.warn(`⚠️  Missing: ${filepath}`);
            htmlFragments.push(`
                <div style="page-break-before: always; page-break-inside: avoid;">
                    <h1>${section.title}</h1>
                    <p><em>[Innehåll saknas - filen kommer att skapas]</em></p>
                </div>
            `);
            return;
        }
        
        const content = fs.readFileSync(filepath, 'utf-8');
        // Clean frontmatter
        const clean = content.replace(/^---\n[\s\S]*?\n---\n/, '');
        const html = marked.parse(clean);
        
        // Convert image paths in the HTML
        const htmlWithImages = convertImagePaths(html);
        
        // Wrap each section's content with proper page break control
        htmlFragments.push(`
            <div style="page-break-before: always; page-break-inside: avoid;">
                ${htmlWithImages}
            </div>
        `);
    });
    
    return htmlFragments;
}

async function generate() {
    console.log(`☕ Generating Complete Study Circle PDF (${LANGUAGE})...`);
    console.log(`📂 Looking for files in: ${CONTENT_ROOT}`);

    const sectionsHtml = readMarkdown();
    const coverBase64 = getCoverImage();

    // Build table of contents for cover
    const sections = [...new Set(sectionsToProcess.map(s => s.section).filter(Boolean))];
    const tocHtml = `
        <div class="toc-preview">
            <h3>Innehåll:</h3>
            <ul>
                ${sections.map(section => `<li>${section}</li>`).join('')}
            </ul>
        </div>
    `;

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            @page {
                size: A4;
                margin: 2cm;
            }
            
            body {
                font-family: 'Georgia', serif;
                font-size: 11pt;
                line-height: 1.6;
                color: #292524;
                margin: 0;
                padding: 0;
            }
            
            /* Cover Page */
            .cover {
                height: 297mm; 
                width: 210mm;
                box-sizing: border-box; 
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                page-break-after: always;
                background-color: #fafaf9;
                margin: -2cm; 
                padding: 2cm;
                overflow: hidden; 
            }
            
            .cover-img-container {
                width: 100%;
                height: 450px;
                overflow: hidden;
                margin-bottom: 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            
            .cover-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .cover h1 {
                font-family: 'Arial', sans-serif;
                font-size: 32pt;
                font-weight: 800;
                margin: 0 0 1rem 0;
                color: #1c1917;
            }
            
            .cover .subtitle {
                font-size: 16pt;
                font-style: italic;
                color: #57534e;
                margin-bottom: 2rem;
            }
            
            .cover .toc-preview {
                text-align: left;
                background: white;
                padding: 1.5rem;
                border-radius: 8px;
                margin: 2rem auto;
                max-width: 80%;
                font-size: 10pt;
            }
            
            .cover .toc-preview h3 {
                margin: 0 0 0.5rem 0;
                font-size: 12pt;
                color: #1c1917;
            }
            
            .cover .toc-preview ul {
                margin: 0;
                padding-left: 1.5rem;
                list-style: none;
            }
            
            .cover .toc-preview li {
                padding: 0.25rem 0;
                color: #44403c;
            }
            
            .cover .toc-preview li:before {
                content: "→ ";
                color: #78716c;
            }

            /* Content Styling */
            h1 {
                font-family: 'Arial', sans-serif;
                font-size: 24pt;
                font-weight: bold;
                color: #1c1917;
                border-bottom: 3px solid #e7e5e4;
                padding-bottom: 0.5rem;
                margin-top: 2rem;
                page-break-after: avoid;
            }
            
            h2 {
                font-family: 'Arial', sans-serif;
                font-size: 16pt;
                color: #44403c;
                margin-top: 1.5rem;
                page-break-after: avoid;
            }
            
            h3 {
                font-family: 'Arial', sans-serif;
                font-size: 13pt;
                color: #57534e;
                margin-top: 1rem;
                page-break-after: avoid;
            }

            /* Boxed Content (Exercises/Discussion) */
            blockquote {
                background: #f5f5f4;
                border-left: 5px solid #1c1917;
                margin: 1.5rem 0;
                padding: 1rem;
                font-style: italic;
                page-break-inside: avoid;
            }
            
            /* Code blocks */
            pre {
                background: #fafaf9;
                border: 1px solid #e7e5e4;
                border-radius: 4px;
                padding: 1rem;
                overflow-x: auto;
                font-size: 9pt;
                page-break-inside: avoid;
            }
            
            code {
                background: #fafaf9;
                padding: 0.2rem 0.4rem;
                border-radius: 3px;
                font-size: 10pt;
            }
            
            /* Tables */
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 1rem 0;
                page-break-inside: avoid;
            }
            
            th, td {
                border: 1px solid #d6d3d1;
                padding: 0.75rem;
                text-align: left;
            }
            
            th {
                background: #f5f5f4;
                font-weight: bold;
                font-family: 'Arial', sans-serif;
            }
            
            /* Lists for discussion questions */
            ul, ol {
                margin-bottom: 1rem;
                padding-left: 2rem;
            }
            
            li {
                margin-bottom: 0.5rem;
            }
            
            /* Strong emphasis */
            strong {
                color: #1c1917;
            }
            
            /* Links */
            a {
                color: #2563eb;
                text-decoration: none;
            }
            
            a:after {
                content: " (" attr(href) ")";
                font-size: 9pt;
                color: #78716c;
            }

            /* Page breaks - more aggressive */
            .force-page-break {
                page-break-before: always !important;
                page-break-after: always !important;
            }
            
            /* Ensure sections don't break awkwardly */
            .section-content {
                page-break-inside: avoid;
                page-break-after: auto;
            }
        </style>
    </head>
    <body>
        <div class="cover">
            ${coverBase64 ? `<div class="cover-img-container"><img src="${coverBase64}" class="cover-img" /></div>` : ''}
            <h1>${meta.title}</h1>
            <div class="subtitle">${meta.subtitle}</div>
            ${tocHtml}
            <div style="margin-top:auto; font-size:10pt; color:#78716c;">
                ${meta.author} • ${new Date().getFullYear()}
            </div>
        </div>
    `;

    // Join all sections with proper page breaks
    html += sectionsHtml.join('');
    html += `</body></html>`;

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Set a longer timeout for complex documents
    page.setDefaultTimeout(30000);
    await page.setContent(html, { waitUntil: 'networkidle0' });

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    await page.pdf({
        path: OUTPUT_FILE,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `
            <div style="font-size: 9pt; font-family: sans-serif; color: #999; margin: 0 auto; padding-bottom: 10px;">
                ${meta.footer} • Sida <span class="pageNumber"></span>
            </div>
        `,
        margin: { top: '2cm', bottom: '2.5cm', left: '2cm', right: '2cm' }
    });

    await browser.close();
    
    const stats = fs.statSync(OUTPUT_FILE);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`✅ PDF skapad: ${OUTPUT_FILE}`);
    console.log(`📄 Storlek: ${fileSizeMB} MB`);
    console.log(`📊 Sektioner: ${sectionsToProcess.length}`);
}
generate().catch(console.error);
