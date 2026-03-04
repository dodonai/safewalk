# SafeWalk — CLAUDE.md

## Project Overview

E-commerce platform selling snow & ice compliance document packages to small brick-and-mortar businesses in the Midwest. Solves the problem that 90%+ of businesses sued for slip-and-fall have no written policies.

## Our Stack

- **Frontend**: SvelteKit (Svelte 5) + TailwindCSS v4
- **Payments**: Stripe Checkout
- **Database**: Supabase (Postgres)
- **Document Generation**: Python FastAPI + Jinja2 + WeasyPrint (PDF)
- **Email**: Resend
- **Hosting**: GitHub Pages (static marketing site), Cloud Run (API — future)

## Product Tiers

| Tier | Price | Model | Contents |
|------|-------|-------|----------|
| Basic | $199 | One-time | Policy doc, employee poster, activity log form |
| Complete | $349 | One-time | Basic + contractor agreement template |
| Premium | $499/yr | Annual | Complete + digital logging app, photo evidence, auto updates |

Annual Updates add-on: $99/yr (Basic and Complete only; included in Premium)

## Architecture

```
src/
  routes/
    +page.svelte              # Landing page
    pricing/+page.svelte      # 3-tier pricing + checkout form
    how-it-works/+page.svelte # Visual walkthrough
    about/+page.svelte        # Team + legal credibility
    success/+page.svelte      # Post-purchase confirmation
    dashboard/+page.svelte    # Customer document downloads (client-side, needs Supabase)
    api/checkout/+server.ts   # Stripe checkout session creation
    api/webhook/+server.ts    # Stripe payment webhook handler
  lib/
    stripe.ts                 # Lazy-init Stripe client
    supabase.ts               # Lazy-init public Supabase client
    supabase-admin.ts         # Lazy-init service role Supabase client
    types.ts                  # Shared types and tier definitions
api/                          # Python document generation service (separate deployment)
  main.py                     # FastAPI app
  generate.py                 # Template rendering + PDF generation
  templates/                  # Jinja2 HTML templates for 4 document types
supabase/
  migrations/                 # Database schema
```

## Development

```bash
npm install
npm run dev -- --port 5180
```

## Deployment

- **Static site** (marketing pages): GitHub Pages via Actions workflow on push to main
- **API routes** (checkout, webhook): Not deployed yet — need Cloud Run or Vercel
- **Document generation API**: Not deployed yet — need Cloud Run with WeasyPrint

Base path is set via `BASE_PATH` env var for GitHub Pages (`/safewalk`). All internal links use `{base}/path` from `$app/paths`.

## Key Decisions

- Svelte 5 runes syntax (`$state`, `$derived`, `$effect`, `$props`)
- Event handlers: `onclick`, `onsubmit` (NOT `on:click`, `on:submit`)
- All server-side clients (Stripe, Supabase admin) use lazy initialization to avoid build-time errors
- Dashboard is client-side only (`ssr = false`, `prerender = false`) since it needs runtime Supabase
- `strict: false` in adapter-static so API routes don't break the static build

## Rule #1 — Use Dedicated Tools, NOT Bash

| Task | CORRECT tool | FORBIDDEN in Bash |
|------|-------------|-------------------|
| Read files | `Read` | `cat`, `head`, `tail`, `less` |
| Search content | `Grep` | `grep`, `rg`, `ag` |
| Find files | `Glob` | `find`, `ls`, `ls -la` |
| Edit files | `Edit` | `sed`, `awk`, `perl -i` |
| Create files | `Write` | `echo >`, `cat <<EOF`, `tee` |

**Bash is ONLY for**: git, npm, docker, python, pip, pytest, curl, etc.
