#!/usr/bin/env python3
"""
Flatten all route content markdown into one directory with descriptive,
route-derived filenames, for uploading to Claude project knowledge.

    scripts/export-content.py                 # Swedish only -> /tmp/svensk-subsidiaritet-innehall
    scripts/export-content.py --all-locales   # include content.en.md too
    scripts/export-content.py --zip           # also produce a .zip next to the output dir
    scripts/export-content.py --out ~/exports/site

Naming: src/routes/evidens/datamodeller/simuleringar/aubi/content.sv.md
     -> evidens-datamodeller-simuleringar-aubi.sv.md

Non-'content' filenames keep their stem when it differs from the route segment,
so studiecirkel/traff-1/traff-1.sv.md becomes studiecirkel-traff-1.sv.md and
bibliotek/.../sections/chapter-1-sv.md becomes
bibliotek-svenska-subsidiaritetshypotesen-sections-chapter-1.sv.md.

Writes an INDEX.md listing every exported file with its route, first heading
and word count. Upload that alongside the content files.
"""

import argparse
import re
import shutil
import sys
from pathlib import Path

# Directories under src/routes that are never exported.
SKIP_DIRS = {"old", "node_modules", ".svelte-kit"}

# content.sv.md / content.en.md  and  traff-1.sv.md  and  chapter-1-sv.md
DOT_PATTERN = re.compile(r"^(?P<stem>.+)\.(?P<locale>sv|en)\.md$")
DASH_PATTERN = re.compile(r"^(?P<stem>.+)-(?P<locale>sv|en)\.md$")


def parse_name(filename: str):
    """Return (stem, locale) or None if this isn't a localised content file."""
    for pattern in (DOT_PATTERN, DASH_PATTERN):
        match = pattern.match(filename)
        if match:
            return match.group("stem"), match.group("locale")
    return None


def output_name(route_parts: list[str], stem: str, locale: str) -> str:
    """Build a flat, descriptive filename from the route path and file stem."""
    parts = list(route_parts)
    # Drop a redundant stem: studiecirkel/traff-1/traff-1.sv.md -> studiecirkel-traff-1
    if stem != "content" and (not parts or parts[-1] != stem):
        parts.append(stem)
    if not parts:
        parts = ["hem"]
    return "-".join(parts) + f".{locale}.md"


def first_heading(path: Path) -> str:
    try:
        with path.open(encoding="utf-8") as handle:
            for line in handle:
                line = line.strip()
                if line.startswith("#"):
                    return line.lstrip("#").strip()
                if line and not line.startswith("---"):
                    return line[:70]
    except OSError:
        pass
    return "(no heading)"


def word_count(path: Path) -> int:
    try:
        return len(path.read_text(encoding="utf-8").split())
    except OSError:
        return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--routes", default="src/routes", help="routes directory")
    parser.add_argument(
        "--out",
        default="/tmp/svensk-subsidiaritet-innehall",
        help="output directory (cleared on each run)",
    )
    parser.add_argument(
        "--all-locales",
        action="store_true",
        help="export .en.md as well as .sv.md",
    )
    parser.add_argument("--zip", action="store_true", help="also write a zip archive")
    args = parser.parse_args()

    routes = Path(args.routes).resolve()
    if not routes.is_dir():
        print(f"Routes directory not found: {routes}", file=sys.stderr)
        print("Run this from the repository root, or pass --routes.", file=sys.stderr)
        return 1

    wanted = {"sv", "en"} if args.all_locales else {"sv"}

    out = Path(args.out).resolve()
    if out.exists():
        shutil.rmtree(out)
    out.mkdir(parents=True)

    entries = []
    collisions = 0

    for source in sorted(routes.rglob("*.md")):
        if any(part in SKIP_DIRS for part in source.relative_to(routes).parts):
            continue
        parsed = parse_name(source.name)
        if parsed is None:
            continue
        stem, locale = parsed
        if locale not in wanted:
            continue

        route_parts = list(source.parent.relative_to(routes).parts)
        if route_parts == ["."]:
            route_parts = []

        name = output_name(route_parts, stem, locale)
        target = out / name
        if target.exists():
            print(f"  collision, skipped: {name}  <- {source.relative_to(routes)}")
            collisions += 1
            continue

        shutil.copy2(source, target)
        entries.append(
            {
                "name": name,
                "route": "/" + "/".join(route_parts) if route_parts else "/",
                "locale": locale,
                "heading": first_heading(source),
                "words": word_count(source),
            }
        )

    index = out / "INDEX.md"
    total_words = sum(entry["words"] for entry in entries)
    lines = [
        "# Innehållsindex — svensksubsidiaritet.se",
        "",
        f"{len(entries)} filer, {format(total_words, ',').replace(',', ' ')} ord.",
        "",
        "Varje fil är en sida på webbplatsen. Filnamnet motsvarar sidans "
        "sökväg med bindestreck i stället för snedstreck.",
        "",
        "| Fil | Sökväg | Språk | Rubrik | Ord |",
        "|---|---|---|---|---|",
    ]
    for entry in sorted(entries, key=lambda item: item["name"]):
        heading = entry["heading"].replace("|", "\\|")
        lines.append(
            f"| `{entry['name']}` | `{entry['route']}` | {entry['locale']} "
            f"| {heading} | {entry['words']} |"
        )
    index.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"\n{len(entries)} files -> {out}")
    print(f"Index written to {index}")
    if collisions:
        print(f"{collisions} filename collisions were skipped.")

    if args.zip:
        archive = shutil.make_archive(str(out), "zip", root_dir=out)
        print(f"Archive: {archive}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
