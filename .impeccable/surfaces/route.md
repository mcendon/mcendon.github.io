---
version: 1
slug: 'route'
primary_target: 'route:/'
related_targets: []
---

# Surface Brief — `/` (Homepage)

## Scope and visitor mode

Produced for the homepage route at `/`. Operate mode: the visitor completes an evaluation task (recruiter / hiring decision-maker forms a credible hiring signal). The homepage extends the incumbent 5-card bento; only the hero card changes structurally (60/40 inner split, approved portrait landing for the first time). Header, footer, theme toggle, GitHub Repositories fetch, BaseLayout, and BlogPost layout are out of scope.

## Audience, job, action, proof

**Audience:** Recruiter or hiring decision-maker arriving from LinkedIn, GitHub, or search (primary). Tech peer / pre-screen helper landing on a specific post from a share (secondary). The author himself as a personal record (tertiary).

**Job:** Form a credible hiring signal in under sixty seconds; locate recent repo evidence; choose between LinkedIn outreach or repo drilling.

**Action:** Click the LinkedIn social link, drill into a recent GitHub repository, or use the header (Blog / About / theme toggle) to navigate further.

**Proof, anchored in real artifacts:**

- Hero bio — "14 years of experience, full-stack quality + profitability."
- Skills card — five established bullets (generalist breadth, AI/automation/blockchain, quality, teamwork, stack breadth).
- Recent Projects card — `https://api.github.com/users/mcendon/repos?sort=updated&per_page=6` (built at build time; six items, language dot, star count).
- LinkedIn profile — `linkedin.com/in/maurocendonhidalgo/`.
- GitHub profile — `github.com/mcendon`.

## Constraints

- Astro v7 + Tailwind v4 + MDX on GitHub Pages — locked stack, substitution out of scope.
- Light + dark required. Dark mode pivots both primaries (Trust-Green → Authorize-Blue `#1d4ed8`, Client-Safe Blue → Capability-Fuchsia `#a21caf`).
- Karla-only typography. No serif or mono UI fonts.
- A11y: portrait has descriptive alt text; social links carry `aria-label`; semantic HTML; keyboard focus-visible ring on every interactive surface.
- The approved portrait is `src/assets/images/about/mauro-snow.jpg` (already in repo) — single source of truth per PRODUCT.md. No second portrait, no third-party auto-fetched thumbnail.
- Public-but-private by default (PRODUCT.md principle 5): personal-life content stays on About; bilingual auto-generation disabled.
- Validation infrastructure is gated at `pnpm approve-builds` for `@parcel/watcher`, `@tailwindcss/oxide`, `esbuild` — one-time interactive approval then `pnpm exec astro check` + `pnpm format:fix`.

## Chosen direction

- Visual authority: bound by `DESIGN.md` — Pro-Dashboard North Star; Trust-Green & Client-Safe Blue light palette; Lift-on-Cue elevation (bento hover `-4px` + `0 20px 40px rgba(0,0,0,0.10)` + `0.03` gradient wash); Editorial component posture; 60/40 hero inner split at ≥1024px stacked below.
- Visitor path: hero (text 60% + approved portrait 40% at lg) → Skills card → Objectives (Trust-Green full-bleed) → Motivation (Client-Safe Blue full-bleed) → Recent Projects.
- Signature moment: the first viewport — gradient-cut h1 plus approved portrait plus LinkedIn / GitHub socials. Subsequent cards are supportive evidence, not competing focal elements.
- Hero badge area: kept quiet (decision resolved externally — not on the homepage).
- No new exit surface beyond the existing nav (Blog / About / theme) and the Recent Projects card.

## Unresolved decisions

Carried over from PRODUCT.md Open Decisions; not surfaced on this surface until bound:

1. Personal-life surface — guitar, music, fishing, partner. About page only.
2. El Topo Online product status — privacy-policy artifact only; no homepage link.
3. Donate / support as a real surface — `Donate.astro` remains out of homepage nav.
4. Bilingual content policy — English only.
5. Indie-tooling / power-user-OS as a positioning pillar — bound pillars stay generalist + AI/automation/blockchain; existing indie posts remain on the record but do not promote into the homepage narrative.
