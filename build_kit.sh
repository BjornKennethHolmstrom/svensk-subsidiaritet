#!/bin/bash

# --- SWEDISH BUILD ---
echo "🇸🇪 Building Swedish Kit..."
echo "% Studiecirkel: Att Återta Makten
% Svensk Subsidiaritet
% 2025" > cover_sv.md

pandoc cover_sv.md \
  content/studiecirkel/sv/00-0-ledarguide.md \
  content/studiecirkel/sv/00-1-innan-du-börjar.md \
  content/studiecirkel/sv/00-2-leda-i-samtal.md \
  content/studiecirkel/sv/00-3-efter-cirkeln.md \
  content/studiecirkel/sv/01-traff-1.md \
  content/studiecirkel/sv/02-traff-2.md \
  content/studiecirkel/sv/03-traff-3.md \
  content/studiecirkel/sv/04-traff-4.md \
  -o static/downloads/Studiecirkel-Kit-SV.pdf \
  --toc --toc-depth=2 \
  --variable mainfont="Georgia" \
  --pdf-engine=wkhtmltopdf

# --- ENGLISH BUILD ---
echo "🇬🇧 Building English Kit..."
echo "% Study Circle: Reclaiming Power
% Swedish Subsidiarity
% 2025" > cover_en.md

pandoc cover_en.md \
  content/studiecirkel/en/00-0-leaders-guide.en.md \
  content/studiecirkel/en/00-1-before-you-start.en.md \
  content/studiecirkel/en/00-2-lead-in-conversation.en.md \
  content/studiecirkel/en/00-3-after-the-circle.en.md \
  content/studiecirkel/en/01-meeting-1.en.md \
  content/studiecirkel/en/02-meeting-2.en.md \
  content/studiecirkel/en/03-meeting-3.en.md \
  content/studiecirkel/en/04-meeting-4.en.md \
  -o static/downloads/Study-Circle-Kit-EN.pdf \
  --toc --toc-depth=2 \
  --variable mainfont="Georgia" \
  --pdf-engine=wkhtmltopdf

# Cleanup
rm cover_sv.md cover_en.md
echo "✅ Done! PDFs created in static/downloads/"
