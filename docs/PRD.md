# PRD: Terra Incognita Technology (TIT) - Professional Architecture

## 1. Project Architecture & Standards

- **Framework**: SvelteKit (Latest) dengan TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3
- **Component Management**: Storybook untuk isolasi dan dokumentasi komponen
- **Directory Structure**:
  - `src/lib/types/`: Definisi TypeScript (Interfaces & Types)
  - `src/lib/constants/`: Data statis dan konfigurasi
  - `src/lib/components/`: Folder komponen dengan sistem barrel export (index.ts)
  - `src/lib/assets/`: Gambar dan file media

---

## 2. Technical Execution Plan

### Step 1: Environment & Tooling Setup

**Inisialisasi SvelteKit dengan TypeScript:**

```bash
npm create svelte@latest
```

**Install Tailwind CSS v3 dan dependencies tambahan:**

```bash
npx svelte-add@latest tailwindcss
npm install -D @sveltejs/adapter-static lucide-svelte
```

**Inisialisasi Storybook:**

```bash
npx storybook@latest init
```

**Konfigurasi**:

- Konfigurasi `adapter-static` di `svelte.config.js`
- Buat `src/routes/+layout.ts` dengan `export const prerender = true`

---

### Step 2: Data Safety & Types (`src/lib/types/`)

Buat file `index.ts` di dalam `src/lib/types/` untuk mendefinisikan kontrak data:

```typescript
export interface NavItem {
	label: string;
	href: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	category: 'Farming' | 'Hotel' | 'Education' | 'Financial' | 'Other';
	imageUrl: string;
}

export interface Service {
	title: string;
	description: string;
	iconName: string; // Lucide icon identifier
}
```

---

### Step 3: Shared Components & Barrel Export

Setiap komponen di `src/lib/components/` harus mandiri.

**Struktur folder:**

```
src/lib/components/
├── ui/
│   ├── Button.svelte
│   └── Card.svelte
└── shared/
    ├── Navbar.svelte
    ├── Hero.svelte
    ├── Section.svelte
    └── PortfolioGrid.svelte
```

**Buat `src/lib/components/index.ts`:**

```typescript
// Export semua komponen agar bisa dipanggil via: import { Button, Navbar } from '$lib/components'
export { default as Button } from './ui/Button.svelte';
export { default as Card } from './ui/Card.svelte';
export { default as Navbar } from './shared/Navbar.svelte';
export { default as Hero } from './shared/Hero.svelte';
export { default as Section } from './shared/Section.svelte';
export { default as PortfolioGrid } from './shared/PortfolioGrid.svelte';
```

---

### Step 4: Storybook Implementation

Buat file `.stories.svelte` (atau `.stories.ts`) untuk setiap komponen UI dasar (Button, Card) guna memastikan tampilan konsisten di lingkungan terisolasi sebelum dipasang ke halaman utama.

---

### Step 5: Implementation Detail (Single Page)

Di `src/routes/+page.svelte`, gunakan data dari `src/lib/constants/` yang sudah di-type:

```svelte
<script lang="ts">
	import { Navbar, Hero, Section, PortfolioGrid } from '$lib/components';
	import { PROJECTS_DATA } from '$lib/constants';
	import type { Project } from '$lib/types';

	const projects: Project[] = PROJECTS_DATA;
</script>

<Navbar />
<Hero id="home" />
<Section id="profile" title="About Us">...</Section>
<Section id="portfolio" title="Our Work">
	<PortfolioGrid {projects} />
</Section>
```

---

## 3. Design & Quality Rules

- **Always use Svelte 5 syntax**: Runes ($state, $derived, $props, $effect), snippets, dan new control flow syntax
- **Strict Props**: Semua komponen Svelte harus mendefinisikan type untuk props-nya (misal: `export let projects: Project[]`)
- **Tailwind Consistency**: Gunakan class `transition-all duration-300` untuk semua elemen interaktif
- **Component Isolation**: Jangan biarkan komponen di `lib/components` mengakses global state jika memungkinkan; gunakan props untuk data-flow
- **Storybook Cleanliness**: Pastikan setiap shared component memiliki setidaknya satu story dasar
