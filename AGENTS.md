# AGENTS.md — ORAVIVUM Website

## Voordat je content schrijft
**LEES ALTIJD EERST:** `content/SCHRIJFREGELS.md`
Dit bestand bevat verboden woorden (o.a. "Botox"), tone of voice regels, en structuur-eisen.
Geen content schrijven zonder dit bestand gelezen te hebben.

## Technisch
- Next.js site, Tailwind CSS
- Blog/kennisbank: markdown bestanden in `content/blog/`
- Tweetalig: NL + EN met `---EN---` separator
- Frontmatter: title, titleEn, description, descriptionEn, date, readTime, slug, keywords
- Git push = auto-deploy op Vercel

## Content strategie
Zie: `/Users/chrisparker/.openclaw/workspace/projects/longevity/content-strategie.md`

## VERBODEN TERMEN
Het woord "botox" (in alle vormen: Botox, botox, BOTOX, botoxbehandeling, etc.) mag NERGENS worden gebruikt in deze codebase.

**Reden:** Google Ads keurt campagnes af bij het gebruik van de merknaam "Botox". Google scrapt de hele website inclusief meta tags, schema.org, en backend code.

**Gebruik in plaats daarvan:**
- "botulinetoxine" (NL)
- "botulinum toxin" (EN)
- "behandeling met botulinetoxine"
- "spierverslappers"
- "bruxisme behandeling"

**Dit geldt voor:**
- Paginateksten en headings
- Meta titles en descriptions
- Schema.org JSON-LD
- FAQ vragen en antwoorden
- URL slugs en routes
- Blog content (NL + EN)
- Alt teksten en aria labels
- Code comments

Bij twijfel: gebruik "botulinetoxine" of omschrijf de behandeling zonder merknaam.
