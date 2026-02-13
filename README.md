# Svensk Subsidiaritet

A research and policy initiative analyzing over-centralization in Swedish society and developing tools for distributed governance.

**Live site:** [svensksubsidiaritet.se](https://svensksubsidiaritet.se)

## Overview

This project diagnoses structural fragility caused by centralization across 10 critical Swedish systems (food, healthcare, education, energy, etc.) and provides concrete tools for implementing subsidiarity-based solutions.

### Key features

- **System analyses** – Cybernetic diagnosis of centralization in Swedish infrastructure
- **Interactive tools** – Proximity Compass and Power Analysis for measuring decision distance
- **Study circle kit** – Complete materials for local governance education
- **Research library** – GSI Framework, Swedish academic research, and pattern databases
- **Bilingual** – Full Swedish/English support

## Tech stack

- **Framework:** SvelteKit with static adapter
- **Language:** Svelte 5 (runes syntax), TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** mdsvex for markdown processing
- **i18n:** Custom stores for Swedish/English switching

## Project structure

```
src/
├── lib/
│   ├── components/     # Header, Footer, SEO, ShareButtons
│   ├── layouts/        # ArticleLayout, StudiecirkelLayout
│   ├── stores/         # i18n, locale management
│   ├── translations.ts # All UI text (sv/en)
│   ├── compass.ts      # Proximity Compass logic
│   ├── power-analysis.ts # Power Analysis tool
│   └── library.ts      # Research resources metadata
├── routes/
│   ├── system-analys/  # 10 system analyses (sv/en)
│   ├── verktyg/        # Interactive tools
│   ├── studiecirkel/   # Study circle materials
│   ├── bibliotek/      # Library & whitepaper
│   └── om-oss/         # About page
static/
├── downloads/          # PDFs (GSI, study materials)
└── images/            # Logos, covers, icons
content/
├── gsi/               # GSI Framework source files
└── studiecirkel/      # Study circle markdown sources
```

## Getting started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development notes

### Adding new system analyses

1. Create folder in `src/routes/system-analys/[slug]/`
2. Add `content.sv.md` and `content.en.md`
3. Create `+page.svelte` importing both
4. Add translation keys to `src/lib/translations.ts`
5. Add entry to systems array in `src/routes/system-analys/+page.svelte`

### Adding new study circle sessions

1. Add markdown files in `src/routes/studiecirkel/traff-[N]/`
2. Use frontmatter: `session`, `titleSv`, `titleEn`
3. Create `+page.svelte` using `StudiecirkelLayout`

### Translations

All UI text lives in `src/lib/translations.ts`. Access via:
```svelte
<script>
  import { t, locale } from '$lib/stores/i18n';
</script>

<h1>{$t.nav.manifesto}</h1>
```

## Contributing

This is an open research project. Contributions welcome for:

- Additional system analyses
- Tool improvements (Compass, Power Analysis)
- Translation refinements
- Pattern library entries
- Bug fixes

## Related projects

- **[Global Governance Frameworks](https://globalgovernanceframeworks.org)** – Parent framework
- **GSI Framework** – Global Subsidiarity Index (in `/content/gsi/`)

## License

Content: CC BY-SA 4.0  
Code: MIT

## Contact

**Björn Kenneth Holmström**  
bjorn.kenneth.holmstrom@gmail.com  
[GitHub](https://github.com/BjornKennethHolmstrom)

---

*Building distributed intelligence for the 21st century.*
