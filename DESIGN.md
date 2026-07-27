---
name: "Mauro Cendón Hidalgo — Personal Site"
description: "Recruiter-fast bento portfolio backed by a craft-honest long-form blog."
colors:
  primary:               "#15803d"  # Trust-Green (green-700) — recruiter-safe signal; bento hover wash start
  secondary:             "#1d4ed8"  # Client-Safe Blue (blue-700) — capability signal; bento hover wash end
  primary-dark:          "#1d4ed8"  # Authorize-Blue — dark-mode primary pivot
  primary-accent-dark:   "#60a5fa"  # blue-400 — dark-mode primary-accent
  secondary-dark:        "#a21caf"  # Capability-Fuchsia (fuchsia-700) — dark-mode secondary
  secondary-accent-dark: "#e879f9"  # fuchsia-400 — dark-mode secondary-accent
  background-light:      "#ffffff"
  background-dark:       "#09090b"   # zinc-950
  foreground-light:      "#09090b"   # zinc-950
  foreground-dark:       "#fafafa"   # zinc-50
  border-light:          "#e4e4e7"   # zinc-200
  border-dark:           "--alpha(--color-zinc-50 / 10%)"  # preserve dark-mode source (Tailwind v4 relative-color syntax)
  link-accent-linkedin:  "#0077b5"  # LinkedIn brand hover border accent (third-party brand, explicit exception to two-tone rule)
  link-accent-github:    "#333333"  # GitHub brand hover border accent (third-party brand, explicit exception)
  muted-light:           "#f4f4f5"   # zinc-100
  muted-dark:            "#27272a"   # zinc-800
  muted-foreground-light: "#52525b"  # zinc-600
  muted-foreground-dark:   "#a1a1aa"  # zinc-400
  card-light:            "#ffffff"
  card-dark:             "#18181b"   # zinc-900
  success:               "#86efac"   # green-300 — hero "available" badge fill

typography:
  display:
    fontFamily: "'Karla Variable', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "'Karla Variable', system-ui, sans-serif"
    fontSize: "3.052rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "'Karla Variable', system-ui, sans-serif"
    fontSize: "2.441rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Karla Variable', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Karla Variable', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0"
rounded:
  xs:    "calc(0.625rem - 0.375rem)"   # 0.25rem — sharp micro-corner
  sm:    "calc(0.625rem - 0.25rem)"    # 0.375rem
  md:    "calc(0.625rem - 0.125rem)"   # 0.5rem — button default
  lg:    "0.625rem"                    # 0.625rem — nav buttons, repo cards
  xl:    "calc(0.625rem + 0.25rem)"    # 0.875rem — bento cards
  2xl:   "calc(0.625rem + 0.5rem)"     # 1.125rem
  3xl:   "calc(0.625rem + 1rem)"       # 1.625rem
  card:  "0.75rem"                     # 12px — hero image & prose in BlogPost
  image: "0.5rem"                      # 8px — global img / pre / inline code
  pill:  "9999px"
spacing:
  "0.5": "0.5rem"
  "0.75":"0.75rem"
  "1":   "1rem"
  "1.25":"1.25rem"
  "1.5": "1.5rem"
  "1.75":"1.75rem"
  "2":   "2rem"
  "2em": "2em"
  "3em": "3em"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground-dark}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-primary-hover:
    backgroundColor: "rgba(21, 128, 61, 0.9)"  # primary/90 — hover darken
    textColor: "{colors.foreground-dark}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground-dark}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.md}"
    size: "2.75rem"
  button-ghost-hover:
    backgroundColor: "{colors.muted-light}"
    textColor: "{colors.foreground-light}"
  button-outline:
    backgroundColor: "{colors.background-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
  card-bento:
    backgroundColor: "{colors.card-light}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  card-bento-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground-dark}"
  card-repo:
    backgroundColor: "{colors.card-light}"
    rounded: "{rounded.lg}"
    padding: "1.25rem"
  card-image-hero:
    backgroundColor: "{colors.card-light}"
    rounded: "{rounded.card}"
    width: "70%"
  card-bento-overlay-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  social-link-hover-linkedin:
    borderColor: "{colors.link-accent-linkedin}"
  social-link-hover-github:
    borderColor: "{colors.link-accent-github}"
  featured-post-chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 1rem"
  hero-gradient-text:
    typography: "{typography.display}"
  social-link:
    backgroundColor: "{colors.background-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.5rem"
  social-link-hover:
    backgroundColor: "rgba(21, 128, 61, 0.10)"  # primary wash at 0.10
    textColor: "{colors.foreground-light}"
  nav-link-active:
    textColor: "{colors.primary}"
    padding: "0 0 4px 0"
  link:
    textColor: "{colors.foreground-light}"
  link-hover:
    textColor: "{colors.primary}"
  link-active:
    textColor: "{colors.primary}"
---

# Design System: Mauro Cendón Hidalgo — Personal Site

This Design System is a snapshot of the incumbent Tailwind v4 / Starwind token system used across the personal site at `mcendon.github.io`. It is **descriptive of what is already shipping**, not a proposal. The values here are normative — frontend work that wants to stay on-brand reads tokens from the YAML frontmatter and contexts from the prose below.

For product truth (users, positioning, constraints, deliberately undecided product facts), see [PRODUCT.md](PRODUCT.md).

## Overview

**Creative North Star: "The Pro-Dashboard".**

The site is laid out like the dashboard a senior engineer would assemble for a hiring decision-maker: each card answers one question, signals are honest, controls behave predictably. Layout is dense without being noisy; motion is purposeful but invisible until called. Surfaces stay calm at rest; lift only signals an interaction. The long-form blog is the proof surface beneath the dashboard — same vocabulary, lower stimulation.

The aesthetic posture is **confident, restrained, technical**. The site is not trying to impress; it is trying to be useful. Color carries signal, not decoration. Type is a single humanist sans (Karla). The light / dark toggle is a deliberate duality, not a styling afterthought: in light the system reads recruiter-safe and quiet; in dark it pivots the primary to a more capable blue and the secondary to capability-fuchsia, communicating that the same work holds up with different emphasis.

**Key Characteristics:**

- **Recruiter-fast.** Homepage bento is an answer sheet. Every card answers one question a recruiter arrived with.
- **Lift-on-Cue.** Borders and tokens carry structure at rest. Translation + shadow appear only on hover, focus, or active state.
- **Editorial components.** Cards have generous internal padding and restrained shadows. Nav and ghost buttons do most of the talking; filled CTAs appear sparingly.
- **Trust-Green & Client-Safe Blue.** Light palette reads reliable, not loud. Capability signals live in the underside color choices, not the surface.
- **Karla, alone.** A single humanist sans carries display, body, and labels. No serif accent. No mono for UI text.
- **Light by default, dark by intent.** The light/dark toggle exists and the dark variant pivots both primaries — it is a duality the user can lean into.

## Colors

A recruiter-safe light palette pivoting to a more vivid, capability-signalling dark palette. Every value is real and used.

### Primary

- **Trust-Green** (`#15803d` / Tailwind `green-700`): Used as the homepage hero gradient starting color, the objectives-card full-bleed background, the `border-color` of social links in their default state, and the dot color for repo "language" indicators in card footers. Trust-Green is _the recruiter-safe signal_ — when a recruiter lands on the homepage, the green-to-blue gradient on the hero h1 and the green objectives card together communicate "delivery, not disruption." Use this color when the role of the surface is to confirm reliability.

### Secondary

- **Client-Safe Blue** (`#1d4ed8` / Tailwind `blue-700`): Used as the homepage hero gradient end color, the motivation-card full-bleed background, and the GitHub social-link's hover border accent. Blue is _capability, not showcase_. Use it to signal that the person integrates with what the team already has.

### Primary (Dark mode pivot)

- **Authorize-Blue** (`#1d4ed8`): In dark mode the `--primary` token pivots from green to blue. The hero gradient, hover wash, and the objectives-card full-bleed background all become blue. The pivot signals that under reduced-light, professional reading conditions, the same identity holds but the emphasis shifts to capability.
- **Authorize-Blue Accent** (`#60a5fa` / `blue-400`): The dark-mode `--primary-accent` used as the active-border and active-link color. A lighter, more readable blue for interactive surfaces in dark.

### Secondary (Dark mode pivot)

- **Capability-Fuchsia** (`#a21caf` / `fuchsia-700`): In dark mode the `--secondary` token pivots to magenta. The motivation card fuchsia, hover-wash end-stop, and link accent all shift. Fuchsia is _only_ the dark mode secondary — never introduce it in light surfaces.
- **Capability-Fuchsia Accent** (`#e879f9` / `fuchsia-400`): The dark-mode `--secondary-accent` used to outline active interactive surfaces in dark.

### Neutral

- **White Ink** (`#ffffff`): Light-mode background and card surface. Use as the base for any elevated or filled surface in light.
- **Zinc-950 Ink** (`#09090b`): Light-mode foreground, dark-mode background. The most-used neutral in the system; carries body text in light and surfaces in dark.
- **Zinc-50 Mist** (`#fafafa`): Dark-mode foreground — text on `zinc-950` surfaces. Never use as a fill in light.
- **Zinc-200 Rule** (`#e4e4e7`): Light-mode `border` and `input`. 1px lines, no weight above 1 in light.
- **Zinc Opacity Rule** (`--alpha(--color-zinc-50 / 10%)`): Dark-mode `border`. Tailwind v4 relative-color syntax; never substitute with a flat zinc color in dark.
- **Zinc-100 Quiet** (`#f4f4f5`) / **Zinc-800 Quiet** (`#27272a`): `muted` surface in light / dark. Used by skill-items and ghost-button hover fills.
- **Zinc-600 Whisper** (`#52525b`) / **Zinc-400 Whisper** (`#a1a1aa`): `muted-foreground`. Body de-emphasised text (e.g., post date, repo description).

### Status

- **Success Lime** (`#86efac` / `green-300`): The optional "Available for opportunities" badge fill in the hero card. Currently commented out in the source; future reactivation should keep this exact token.

### Named Rules

**The Hero-Gradient Rule.** The double gradient `linear-gradient(135deg, primary → secondary)` appears on exactly three places: (1) `.gradient-text` on the hero h1, (2) `.bento-item::before` hover wash, and (3) `.social-link::before` hover wash. Its rarity is the point. Any new use beyond those three is signal dilution.

**The One-Voice Rule.** In light mode, primary appears on the hero h1 gradient start, the objectives card full-bleed, social link default border, repo language dots, and the `link:hover` color — roughly 5–6 surfaces in any single homepage scroll. Its density on a single page must not exceed that. Dark mode authorizes a slightly higher density (the primary accent fills more interactive surfaces), but the same rule of restraint still applies.

## Typography

**Display Font:** Karla Variable (loaded as `@fontsource-variable/karla`, weights 100–900).
**Body Font:** Karla Variable, identical family and stack.
**Label/Mono Font:** None distinct. UI labels share Karla Variable.

There is no contrast partner. Karla is humanist and screen-tuned, and the system uses one font for everything.

**Character:** A single humanist sans, no serif or mono accent, no second typeface. The system reads as one voice, not a system of voices. Display weight is heavy (800); title and label weights sit at 500–700; body is regular. Line-height is generous on body (1.7) and tight on display (1.1).

### Hierarchy

- **Display** (Karla, fontSize `clamp(2.5rem, 5vw, 4rem)`, fontWeight 800, lineHeight 1.1): The hero h1 only. Carries the gradient cut and `.gradient-text` background-clip. Used once per surface.
- **Headline** (Karla, fontSize `3.052rem`, fontWeight 700, lineHeight 1.2): Article titles and page h1s (`h1` global). Used on blog posts for the title; _not_ the homepage.
- **Title** (Karla, fontSize `2.441rem` (`h2`), fontWeight 700, lineHeight 1.3 and `1.953rem` (`h3`), fontWeight 700, lineHeight 1.3): Section headers inside the bento, blog post section h2/h3. Card titles (`h2` inside bento, `h3` inside repo cards) use this scale.
- **Body** (Karla, fontSize `1rem`, fontWeight 400, lineHeight 1.7): All paragraphs. Prose width is fixed at **720px (`width: 720px; max-width: calc(100% - 2em);`)** on blog posts — that is the reading measure and is part of the typography contract. Mobile collapses gracefully with the same max-width formula.
- **Label** (Karla, fontSize `0.875rem`, fontWeight 500): Nav buttons, skill card headings, repo card language, repo card stars, button text at `sm` size. Uppercase is **not** part of the system; labels are sentence case.

### Named Rules

**The One-Family Rule.** Karla is the only UI typeface. Future surfaces that want a second typeface (a serif for blog posts, a mono for code samples) must justify it against the product principle _Evidence over claim_ — a second font adds visual noise without serving recruiter-fast reading.

## Layout

The site uses a **full-bleed, single-axis layout**. The `.prose` container on blog posts is the only fixed-width surface (720px). Everything else — homepage bento, header, footer, blog index — is full-width with internal grid math.

- **Bento grid (homepage):** 12-column grid, gap `1.5rem` (mobile: `1rem`), grid-auto-rows `minmax(100px, auto)`. Default placement: hero spans 12 columns at all breakpoints; at md (≥768px) the skills / objectives cards split into 6-column pairs; at lg (≥1024px) the hero spans 8 with skills spanning 4+2 rows, objectives / motivation each spanning 4, and repos spanning 12. The grid is intentionally irregular at lg to make the board feel like a dashboard, not a uniform tile mosaic.
- **Blog index bento:** Same 12-column logic. Featured post spans 12 mobile / 12 tablet / 8 desktop with a 500px-tall image wrapper. Other posts span 12 mobile, 6 tablet (drop to 4 desktop) with intentional span variation at desktop to prevent the index from looking like a 4×N grid.
- **Reading measure (blog posts):** Fixed `width: 720px; max-width: calc(100% - 2em); margin: auto;` on `.prose`. Body line-height 1.7 gives a comfortable ~65–75 character measure. This width is a typography-rule, not a layout-rule — it is part of the reading posture.
- **Container padding rhythm:** `main` has `padding: 3em 1em` in the global CSS; the homepage overrides to `2rem 1rem` (mobile `1rem`). Footer uses `2em 1em 6em 1em`.
- **Sticky header:** `position: sticky; top: 0; z-10; bg-background` (no blur, fully opaque). 1px `border-bottom: var(--border)`. Logo + nav, single row at md+, stacked at mobile.
- **Card padding:** Bento cards `2rem` (mobile `1.5rem`). Repo cards `1.25rem`. Skill items `1rem` (mobile `0.75rem`). Social links `0.75rem 1.5rem`. Buttons: `0.5rem 1rem` (`md`); smaller at `sm`.

### Breakpoints

- `md`: 768px (tablet layout kicks in: homepage bento splits skills / objectives, blog reduced to 6-column cards).
- `lg`: 1024px (desktop layout: hero shrinks to 8 columns, repos in irregular 4 / 6 / 6 / 4 etc.).
- The site does not declare an explicit sub-640 layout; mobile-first rules govern. The Tailwind default `sm` (640px) is reserved, currently unused.

## Elevation & Depth

This is a **bordered-flat, lift-on-cue** system. Surfaces carry their structure from a 1px border and a token-based background fill. Elevation only appears as a response to interaction.

- **At rest:** every card, button, and link sits on a 1px `var(--border)` outline. No shadows. Quiet.
- **On interaction (hover / focus / active):** the affected surface translates up by 2-4 pixels and exposes a layered shadow + an opacity 0.05-0.10 gradient wash using primary → secondary.

### Shadow Vocabulary

Two shadows exist in the source; treat them as separate instruments:

- **Hover Lift** (`box-shadow: 0 20px 40px rgba(0, 0, 0, 0.10); translateY(-4px); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);`): Applied via `.bento-item:hover` and `.social-link:hover`. The dominant interactive lift.
- **Repo Hover Lift** (`box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); translateY(-4px);`): A more compact version for `.repo-card:hover`. Used inside the github-repos card; lower weight than the homepage hover.
- **Legacy Card Shadow** (`box-shadow: var(--box-shadow);` resolving to `0 2px 6px rgba(96, 115, 159, 25%), 0 8px 24px rgba(96, 115, 159, 33%), 0 16px 32px rgba(96, 115, 159, 33%);`): A three-layer blue-tinted shadow used only on `.hero-image img` inside the BlogPost layout. Keep — it makes hero images feel like artifacts, not banners.

### Named Rules

**The Lift-on-Cue Rule.** Surfaces are flat at rest. Borders carry structure. Translation (`translateY(-2px)` for buttons, `translateY(-4px)` for cards) and shadows appear only on hover, focus-visible, or active. Never assign a static `box-shadow` to a controlled surface — links, buttons, repo cards, and bento-items always default to flat.

**The Wash-on-Hover Rule.** The hover treatment on `.bento-item`, `.social-link`, and `.repo-card` includes a `::before` pseudo-element with `linear-gradient(135deg, primary → secondary)` and `opacity: 0; transition: opacity 0.4s ease;`. Hover lifts opacity to `0.03` (bento), `0.10` (social links), or `0.05` (repo cards). The gradient wash is _silent_ evidence of brand consistency — it should not be replaced with a flat color tint.

## Shapes

The system uses two radius scales — Starwind's `--radius` family (which the site extends mathematically around `--radius: 0.625rem`) and a small set of fixed values for hero-image, prose, and image elements.

- `radius-xs` (0.25rem): sharpest corner, reserved for chips and tiny accents.
- `radius-sm` (0.375rem): rarely used; small controls.
- `radius-md` (0.5rem): button default — the most-used corner in the system.
- `radius-lg` (0.625rem): nav buttons, repo cards.
- `radius-xl` (0.875rem): bento cards.
- `radius-2xl` / `radius-3xl`: available; not yet used.
- `radius-card` (0.75rem / 12px): hero image and prose container inside BlogPost. These are _fixed_ values, distinct from the `--radius` family, because they pre-date the Starwind integration.
- `radius-image` (0.5rem / 8px): global `img` and `pre`. The lightest touch.
- `radius-pill` (9999px): available for future pill/avatar shapes; not currently used.

The system is **corner-soft, never corner-sharp**. The flat-everywhere alternative would contradict the recruiter-fast + editorial posture.

## Components

Each component leads with a one-line character note, then shape, color assignment, and states.

### Buttons (Starwind `button`)

- **Shape:** `rounded-md` (0.5rem); h-9 (sm) / h-11 (md) / h-12 (lg) / size-11 (icon) / size-9 (icon-sm) / size-12 (icon-lg). All sizes preserve the corner radius.
- **Primary:** `bg-primary` (Trust-Green in light / Authorize-Blue in dark) + `text-primary-foreground`. Hover darkens to `bg-primary/90`. Focus-visible: `ring-3` at `ring-primary/50`.
- **Secondary:** Same logic; binds the secondary token family.
- **Outline:** `bg-background` + 1px `border` (using `--input` in dark, zinc-200 in light) + a light `shadow-xs`. Hover shifts to `bg-muted`.
- **Ghost (default nav):** Transparent at rest; `hover:bg-muted` + `hover:text-foreground`. Focus-visible: ring at `outline/50`. This is the variant the header navigation uses (`<Button variant="ghost" size="icon">Home / Blog / About</Button>`).
- **Status variants** (info / success / warning / error): present in Starwind but unused in current surfaces. Keep them as the system's status-communication surface.

### Chips (featured-post badge)

- **Style:** `bg-primary` + `text-primary-foreground`, `rounded-lg`, padding `0.5rem 1rem`, font-size `0.875rem`, font-weight 600. Includes a `Book-Open` icon. Sits absolutely positioned (`top: 1rem; left: 1rem;`) over the featured-post image. The box-shadow `0 4px 12px rgba(0, 0, 0, 0.15)` is the only decoration; the chip is meant to feel slightly raised above the image plane, not on it.
- **State:** Non-interactive. One instance per featured-post card; not repeated on regular cards.

### Bento Cards (homepage)

- **Corner Style:** `var(--radius-xl)` (0.875rem). The largest radius in the system.
- **Background:** `var(--card)` (white in light / `zinc-900` in dark). Default is settled; variant cards use overrides (objectives → primary gradient; motivation → secondary gradient; hero → muted gradient).
- **Shadow Strategy:** None at rest. Hover: `translateY(-4px)` + `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.10)` + `border-color: var(--primary-accent)` + gradient wash fade-in to opacity 0.03.
- **Border:** 1px `var(--border)` at rest. Hero card uses a 2px border (`2px solid var(--border)`) for visual primacy.
- **Internal Padding:** `2rem` (desktop/tablet), `1.5rem` (mobile).

### Repo Cards

- **Corner Style:** `var(--radius-lg)` (0.625rem).
- **Background:** `var(--card)`.
- **Shadow Strategy:** Hover: `translateY(-4px)` + `box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15)` + `border-color: var(--primary-accent)` + gradient wash at opacity 0.05.
- **Border:** 1px `var(--border)` at rest; changes color on hover.
- **Internal Padding:** `1.25rem`.
- **Language dot:** 12px circle, `background: var(--primary)`. Communicates the repo's primary language signal using the recruiter-safe color.
- **External-link icon:** Opacity 0.5 default, opacity 1.0 on hover. Subtle cue that the card is a link without using a button visual.

### Posts (blog index cards)

- **Corner Style:** Same `bento` radius scale (`xl` for the card container).
- **Background:** `var(--card)`.
- **Image wrapper:** Height 200px (desktop: 240px, with size 280px for the wider 6-column variants). Image fills via `object-fit: cover` and scales 1.05 on hover.
- **Title color:** `var(--foreground)` at rest, `var(--primary-accent)` on hover. The color shift is the only affordance — no border change on these cards.
- **Date:** `var(--muted-foreground)` (`zinc-600` light / `zinc-400` dark), `font-size: 0.875rem`, font-weight 500.

### Hero Image (in blog post layout)

- **Corner Style:** `0.75rem` (card radius), an explicit fixed value distinct from the `--radius` scale.
- **Background:** Image fill, `object-fit: contain`.
- **Shadow Strategy:** Static `box-shadow: var(--box-shadow)` resolving to a three-layer blue-tinted drop shadow. This shadow is _permanent_ on hero images — it makes the image feel like an artifact sitting above the page, not a banner glued to it.
- **Width:** 70% of the post container (mobile: 100%).

### Header

- **Style:** Sticky `top-0`, full-width, padding `1rem`, `bg-background` (fully opaque — no blur). Underline: 1px `border-bottom: var(--border)`.
- **Identity cluster:** Avatar (GitHub avatar src, 75px circle fallback) + name (`SITE_TITLE`).
- **Navigation:** Three `Button variant="ghost" size="icon"` items: Home / Blog / About. Active route gets `.active` class with `border-bottom: 4px solid var(--primary-accent)` from global.css.
- **Theme toggle:** Mounted as the fourth item — a `Dropdown` with Sun/Moon icons rotating.

### Footer

- **Style:** Centered text, padding `2em 1em 6em 1em`, `bg-background`, 1px `border-top: var(--border)`.
- **Contents:** Copyright (auto-generated year) + GitHub icon link (32px) + Buy Me a Coffee yellow button image (32px tall).
- **Visual role:** Minimal. The footer is a closing mark, not a destination. Use this restraint — avoid growing it.

### Theme Toggle

- **Style:** `Dropdown` Starwind component with custom `DropdownItem` entries for Light / Dark. Switches `<html class="dark">`.
- **Iconography:** Lucide `Sun` and `Moon` (24px), absolutely positioned within the ghost-trigger button. Sun at `scale-100 rotate-0` in light, `scale-0 -rotate-90` in dark; Moon inverts.
- **Accessible label:** `sr-only` "Toggle theme" inside the button.

## Do's and Don'ts

### Do

- **Do** anchor every new surface on `var(--primary)`, `var(--secondary)`, `var(--border)`, `var(--muted-foreground)`, `var(--radius-*)`, and the typography scale. If a new surface feels ready to introduce a token that isn't in the frontmatter, that is a signal to pause.
- **Do** default to flat surfaces. Borders carry structure. Reach for shadow only when a state requires elevation.
- **Do** use `translateY(-4px)` + a layered box-shadow + the primary→secondary 135° gradient wash as the canonical hover lift on bento cards. Don't invent a new hover recipe.
- **Do** use `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)` on the hero h1 via `background-clip: text`. That's the brand voice in one move.
- **Do** keep the `.prose` reading measure at `width: 720px; max-width: calc(100% - 2em); margin: auto;` on blog posts. This is part of the typography contract.
- **Do** use `rounded-md` for buttons, `rounded-lg` for nav and repo cards, `rounded-xl` for bento cards, `0.75rem` for hero images. These four values are the radii vocabulary.
- **Do** test light _and_ dark. The dark pivot (green → blue, blue → fuchsia) is a real duality. A surface that reads in light but fails in dark is not finished.

### Don't

- **Don't** introduce a third accent color. The system is two-tone (primary + secondary); the dark pivot authorizes a different two-tone, not a third color.
- **Don't** use uppercase as a styling device. Labels, buttons, and chips are sentence case throughout. `.uppercase` or `text-transform: uppercase` violates the state voice.
- **Don't** add additional portrait imagery. PRODUCT.md binds a single approved portrait at `src/assets/images/about/mauro-snow.jpg`.
- **Don't** add box shadows on rest-state cards, buttons, or inputs. Static shadows contradict the lift-on-cue posture.
- **Don't** paint the footer with extra social icons, links, or legalese. The footer is a closing mark.
- **Don't** use a serif or mono UI font. Karla is the entire system.
- **Don't** surface personal-life content (guitar, fishing, music, partner) outside the About page without first re-deciding the binding in PRODUCT.md.
- **Don't** wire the `Donate` component into the header or sidebar until PRODUCT.md binds Donate as a real surface or removes it.
- **Don't** rename or restructure the headline sizes. Display, headline, title, body, label are the five; never collapse two of them.
- **Don't** use Tailwind utility names (`primary`, `foreground`, `rounded-md`) as a substitute for reading the token values from this file. Tools that don't have the full token set inherit Astro's starwind.css; surfaces that depend on this file's tokens inherit them through CSS variables.
