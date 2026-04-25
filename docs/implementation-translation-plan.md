# Implement Translation (i18n) for Company Profile

This plan details the process for adding multi-language support (English and Indonesian) to the Terra Incognita Technology company profile using a native Svelte 5 Runes approach.

## User Review Required

> [!IMPORTANT]
> Since the project uses Svelte 5 (Runes mode), I propose using a native `$state` based global store for internationalization (i18n) rather than installing an external library like `svelte-i18n` or `inlang`.
>
> This approach is:
>
> 1. Extremely fast and lightweight (no extra dependencies).
> 2. Fully reactive and idiomatic to Svelte 5.
> 3. TypeScript friendly (we get auto-complete for all translation keys).
>
> Please confirm if this approach is acceptable, or if you strictly prefer an external package.

## Open Questions

> [!WARNING]
> The `PROJECTS_DATA` in `src/lib/constants/index.ts` contains database-like content (project title, description, client).
> Should we translate the project titles and descriptions as well, or do we only translate the static UI elements (Navbar, Hero, About, Services, etc.)? My plan currently assumes we will translate everything, including project descriptions.

## Proposed Changes

### 1. Translation System & Dictionaries

We will create a reactive store using Svelte 5 Runes to manage the current language state and fetch the correct dictionary.

#### [NEW] `src/lib/stores/i18n.svelte.ts`

- Create an `I18nStore` class utilizing `$state` to track the current `locale` (`'id'` or `'en'`).
- Provide a reactive `t` getter that returns the dictionary based on the active locale.
- Provide a `toggleLanguage()` method.

#### [NEW] `src/lib/i18n/id.ts`

- Extract all current Indonesian hardcoded text into structured objects (e.g., `nav`, `hero`, `about`, `services`, `portfolio`, `contact`, `footer`).

#### [NEW] `src/lib/i18n/en.ts`

- Create the English equivalent dictionary with identical structure to `id.ts`.

---

### 2. Updating Constants

#### [MODIFY] `src/lib/constants/index.ts`

- Convert static strings to translation keys (e.g., `'hero.title'`) or move text that requires translation out of the constants entirely. For things like `PROJECTS_DATA`, we will add English variants (`description_en`, `category_en`) to allow the `PortfolioGrid` component to render the correct text based on the active language.

---

### 3. Updating UI Components

We will update the following components to import the `i18n` store and replace hardcoded text with `i18n.t.key`.

#### [MODIFY] `src/lib/components/shared/Navbar.svelte`

- Add a language switcher button (`ID | EN` or flag icons) next to the "Hubungi Kami" CTA.
- Use `i18n.t.nav` for the navigation labels.

#### [MODIFY] `src/lib/components/shared/Hero.svelte`

- Replace hardcoded text like "Inovasi Digital", the headline, tagline, and CTA button text with variables from the translation store.

#### [MODIFY] `src/lib/components/shared/About.svelte`

- Extract and translate the title, description, statistics labels, and "why choose us" points.

#### [MODIFY] `src/lib/components/shared/Services.svelte`

- Extract and translate service section titles and individual service descriptions.

#### [MODIFY] `src/lib/components/shared/PortfolioGrid.svelte`

- Translate section titles, filter labels (categories), and render the correct project description based on the active language.

#### [MODIFY] `src/lib/components/shared/Contact.svelte`

- Translate form labels, placeholders, titles, and contact information text.

#### [MODIFY] `src/lib/components/shared/Footer.svelte`

- Translate footer descriptions and links.

#### [MODIFY] `src/routes/+page.svelte`

- Dynamically update the `<title>` and `<meta>` description based on the selected language using the i18n store.

## Verification Plan

### Automated Tests

- Run `npm run check` and `npm run lint` as specified in `AGENTS.md` to ensure Svelte 5 syntax is valid and type-safe.

### Manual Verification

1. Run `npm run dev`.
2. Verify the initial load is in Indonesian.
3. Click the language switcher in the Navbar.
4. Verify all text on the page smoothly transitions to English without needing a page reload.
5. Verify that mobile menu also contains the language switcher and functions correctly.
6. Check that SEO metadata in the `<head>` updates reactively.
