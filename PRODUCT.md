# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary visitor is a **recruiter or hiring decision-maker** evaluating Mauro Cendón Hidalgo for a software engineering role. They arrive from a referral, LinkedIn, GitHub, or a search for a senior candidate and need a quick, evidence-weighted answer to: does this person have the depth, breadth, and recent trajectory to be worth an interview? Their success on the site is leaving with that answer and a working next action — a LinkedIn outreach, a repo inspection, or a contact signal.

Secondary audiences:

- **Tech peers and pre-screen helpers** who land on a specific post from a social share or a search and want to read one piece of writing without friction.
- **The author himself**, treating the site as a personal record he will revisit years later.

The site is not currently aimed at prospective freelance / consulting clients; that is a future possibility, not a present job.

## Product Purpose

The site exists to make a senior software engineering career legible to hiring decision-makers, supported by a long-form blog that doubles as public evidence of how Mauro thinks, writes, and ships. Success means a recruiter can form a credible hiring signal in under sixty seconds and find the recent GitHub and LinkedIn artifacts to verify it; a peer can find a readable deep-dive post and follow it back to a real repo.

## Positioning

Mauro's distinct position rests on the intersection of two claims that a neighbouring candidate could not truthfully copy together:

1. **Senior full-stack generalist.** Fourteen-plus years across Angular, Vue, React, PHP, NodeJS, Java, Python, with stated emphasis on shipping profitable, business-driving applications.
2. **Senior practitioner of AI, automation, and blockchain integration.** Emphasis on integrating these into real product surfaces, not on research.

These are the binding positioning pillars. They are not exhaustive. The published blog also reflects an indie-tooling / power-user-OS craft voice (PhotoOPS, Pop!\_OS shortcuts, Gigabyte G5 recovery); that voice is evidence of craft, not a position. Future work must reflect the stated pillars above without deleting or de-emphasising the existing posts on the record.

## Operating Context

- Hosted on **GitHub Pages** at `https://mcendon.github.io`. Astro v7 static build, no server runtime.
- Posts are written in **Markdown / MDX** under `src/content/blog/`, validated by a Zod schema for frontmatter (`title`, `pubDate`, `description`, optional `heroImage`).
- Visitor signals currently implemented or wired in:
  - **Giscus** comments on blog posts (GitHub-authenticated).
  - **GitHub Repositories** card on the homepage, pulling public / pinned repos from `github.com/mcendon`.
  - **LinkedIn + GitHub** social links on the homepage hero.
  - **Light / dark theme** toggle (`ModeToggle.astro`), Tailwind v4 design tokens via CSS variables.
  - **Donate** component exists in the codebase but is not linked from the header or footer today.
- Local dev: `astro dev` on `localhost:4321` (`bun dev`). Build: `astro build`. Lint and format gates via `eslint .` and `prettier`; Husky pre-commit hook in place.
- A privacy policy at `/policies/el-topo-online/` references an entity called "El Topo Online"; whether this belongs to Mauro as a separate product has not been confirmed.

## Capabilities and Constraints

**Capabilities of the present build.**

- Static-site content (Markdown / MDX) with type-checked frontmatter.
- RSS feed at `/rss.xml`, sitemap, SEO + canonical URLs, OpenGraph tags via `BaseHead`.
- Light + dark theme via `ModeToggle.astro`; Tailwind v4 design tokens via CSS variables; sticky header.
- Featured-post + bento-grid blog index.
- Homepage bento-grid (hero, skills, objectives, motivation, recent projects) as the recruiter-facing answer surface.

**Constraints.**

- The site must remain buildable by GitHub Pages. No server-side runtime is available.
- Astro v7 + Tailwind v4 + MDX is the locked stack. Substituting the framework is not in scope.
- Single author with sparse, irregular posting cadence (three posts over approximately the last year). The product does not depend on weekly output.
- Author identity is established by name (`SITE_TITLE` = "Mauro Cendón Hidalgo") and the GitHub avatar. There is no logo, no mascot, no formal brand system.

**Deliberately undecided product facts.** Recorded so future work does not invent them.

- **Personal-life surface.** The About page mentions guitar, music, fishing, and exploring with partner and friends. The user has not bound personal life as part of the public product surface; it currently lives only on the About page. Future work must not surface personal-life content on the homepage, in navigation, or in marketing surfaces unless this is re-decided.
- **El Topo Online.** A privacy policy exists at `/policies/el-topo-online/`, but the user has not confirmed whether "El Topo Online" is a separate product of Mauro's that should be linked, branded, or given its own narrative. Until confirmed, treat the policy as a privacy artifact only and do not promote it on marketing surfaces.
- **Donate / support.** The `Donate` component exists but is not currently wired into navigation. Whether it is a real surface (to fund hosting or projects) or a placeholder to remove is undecided.
- **Bilingual content.** All published content is English. No language policy has been bound; existing posts set a default of English-only. Future work must keep content English-only unless this is re-decided.
- **Recruiter-friendly homepage vs. indie-tooling blog voice.** The blog voice emphasises indie tooling and OS power-user craft, neither of which the user bound into the positioning pillars. Existing posts remain on the record and must not be deleted or down-weighted; the homepage and navigation must reflect the stated pillars.

## Brand Commitments

- **Author name.** "Mauro Cendón Hidalgo", sourced from `src/consts.ts` `SITE_TITLE`. This is the published identity. No logo, no mascot, no extended brand system exists.
- **Voice.** English, concrete, occasionally first-person, written in a measured-craft tone (the photoops post opens with "I didn't plan to write a tool. I planned to scan photographs."). No formal voice guide; existing posts are the source of truth.
- **Author photo.** A single photo at `src/assets/images/about/mauro-snow.jpg` is the only real, approved-portrait asset on the site. Future work must not add or generate additional portraits.
- **Existing copy is authoritative.** The About page text, the homepage bio, the skills list, the objectives, and the motivation blurb are the current public claims. Do not extend them without revising the source files.

## Evidence on Hand

- **Three published blog posts** under `src/content/blog/`:
  - `gigabyte-g5-soft-brick-solution.md`
  - `photoops.md` (with hero image and embedded example outputs)
  - `why-im-back-on-linux-pop-os.md`
- **Real GitHub repositories** referenced from the homepage `GitHubRepos` component, linking to `github.com/mcendon`.
- **Privacy policy** at `/policies/el-topo-online/privacy.md`.
- **LinkedIn** at `linkedin.com/in/maurocendonhidalgo/` surfaced as the primary professional network.
- **Author photo** at `src/assets/images/about/mauro-snow.jpg` for the About page.

Absent — must NOT be fabricated in future work:

- Named clients, employer logos, or hiring outcomes.
- Case studies, whitepapers, or downloadable resources.
- Speaking appearances, podcast appearances, or press mentions.
- Awards, benchmarks, performance claims, or third-party endorsements.
- Testimonials or quotes attributed to others.
- Pricing, licensing, or service offerings. This is not a services site today.

## Product Principles

1. **Evidence over claim.** Every assertion about Mauro is anchored in a real artifact — a repo, a post, a linkable credential. The site never invents proof.
2. **Recruiter-fast.** A hiring decision-maker must reach a credible signal in under sixty seconds. The homepage answer set, repo proof, and contact path take precedence over expression.
3. **Craft-honest writing.** Long-form posts reflect how Mauro actually works — concrete verbs, real code, named projects, no marketing varnish. New posts must match that bar.
4. **Single-author cadence.** The site is updated by one person. Sparse, irregular posting is acceptable; the system must not assume weekly output.
5. **Public-but-private by default.** Personal life and unbranded experiments stay off the homepage unless explicitly promoted. The public product surface stays focused on the professional.

## Accessibility & Inclusion

- Astro renders semantic HTML throughout. The project lints with `eslint-plugin-jsx-a11y`.
- Light / dark theme support means switching contrast modes does not break content.
- No specific WCAG level has been committed. Future work should default to WCAG 2.1 AA and introduce explicit checks where it touches interaction (theme toggle, comment embed, mobile navigation, blog index cards).
- The primary audience (English-speaking recruiters) implies English-first copy and micro-copy. Spanish is not required by this site today.

## Open Decisions

Resolved by future iteration, not by init:

1. Whether personal life (guitar, music, fishing, exploring) becomes part of the public product surface beyond the About page.
2. Whether "El Topo Online" is owned by Mauro as a separate product to link and brand, or whether the privacy policy is the only artifact.
3. Whether Donate / support becomes a real surface or is removed.
4. Whether to bind a bilingual content policy.
5. Whether the indie-tooling / power-user-OS voice is promoted into a positioning pillar alongside the generalist and AI/automation/blockchain pillars.
