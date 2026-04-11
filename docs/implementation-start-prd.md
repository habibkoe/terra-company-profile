# Terra Incognita Technology – Company Profile Implementation Plan

Membangun website one-page company profile "Terra Incognita Technology" (TIT) yang elegan dan bernuansa teknologi di atas SvelteKit 5 + TypeScript + Tailwind CSS v3, sesuai PRD.md dan standar architect.md.

---

## Status Proyek Saat Ini

| Item | Status |
|---|---|
| SvelteKit 5 + Svelte Runes | ✅ Configured |
| Tailwind CSS v3 | ✅ Installed |
| Storybook | ✅ Installed |
| adapter-static | ❌ Masih `adapter-auto` – perlu diganti |
| `src/lib/types/` | ❌ Belum ada |
| `src/lib/constants/` | ❌ Belum ada |
| `src/lib/components/` | ❌ Belum ada |
| `src/routes/+layout.ts` (prerender) | ❌ Belum ada |
| Halaman utama | ❌ Masih placeholder |

---

## Proposed Changes

### 1. Adapter & Config

#### [MODIFY] [svelte.config.js](file:///c:/laragon/www/terraincognitatechnology/company-profile/svelte.config.js)
- Ganti `adapter-auto` → `adapter-static`

#### [NEW] [+layout.ts](file:///c:/laragon/www/terraincognitatechnology/company-profile/src/routes/+layout.ts)
- Tambah `export const prerender = true`

---

### 2. Tailwind Config – Custom Design Tokens

#### [MODIFY] [tailwind.config.js](file:///c:/laragon/www/terraincognitatechnology/company-profile/tailwind.config.js)
- Extend theme dengan custom colors (deep navy, cyan accent, neon green)
- Custom font family (Inter dari Google Fonts)
- Custom animations

---

### 3. Types – `src/lib/types/index.ts`

#### [NEW] [index.ts](file:///c:/laragon/www/terraincognitatechnology/company-profile/src/lib/types/index.ts)

```typescript
export interface NavItem { label: string; href: string; }
export interface Project {
  id: number; title: string; description: string;
  category: 'Farming' | 'Hotel' | 'Education' | 'Financial' | 'Other';
  imageUrl: string; tags: string[];
}
export interface Service { title: string; description: string; iconName: string; }
export interface TeamMember { name: string; role: string; avatarUrl: string; }
export interface Stat { value: string; label: string; }
```

---

### 4. Constants – `src/lib/constants/index.ts`

#### [NEW] [index.ts](file:///c:/laragon/www/terraincognitatechnology/company-profile/src/lib/constants/index.ts)
Data: `NAV_ITEMS`, `PROJECTS_DATA` (Farming, Hotel, Education, Financial), `SERVICES_DATA`, `STATS_DATA`, `TEAM_DATA`

---

### 5. UI Components – `src/lib/components/ui/`

#### [NEW] Button.svelte
Reusable button dengan variant (primary / outline / ghost), ukuran, dan slot/children snippet

#### [NEW] Card.svelte
Generic card container dengan glassmorphism dark style

#### [NEW] Badge.svelte
Tag kecil untuk category / teknologi

---

### 6. Shared Components – `src/lib/components/shared/`

#### [NEW] Navbar.svelte
- Sticky glassmorphism navbar
- Smooth scroll menu links
- Mobile hamburger menu (Svelte state)
- Logo TIT + nama brand

#### [NEW] Hero.svelte
- Full-viewport hero section
- Animated gradient background (CSS keyframes)
- Headline "Terra Incognita Technology"
- Tagline + 2 CTA button
- Animated floating tech blobs/particles (CSS only)

#### [NEW] About.svelte
- Profil perusahaan singkat
- Stats row (proyek selesai, client, tahun berdiri, dll)

#### [NEW] Services.svelte
- Grid kartu layanan menggunakan `lucide-svelte` icons
- Web Development, IoT, Smart Farming, ERP, dll

#### [NEW] PortfolioGrid.svelte
- Filter tabs per category (Farming | Hotel | Education | Financial | All)
- Card grid animasi dengan Svelte transitions

#### [NEW] Contact.svelte
- Form kontak sederhana
- Info kontak (email, phone, location)

#### [NEW] Footer.svelte
- Copyright, social media links

---

### 7. Barrel Export

#### [NEW] [index.ts](file:///c:/laragon/www/terraincognitatechnology/company-profile/src/lib/components/index.ts)
Export semua komponen:
```typescript
export { default as Button } from './ui/Button.svelte';
export { default as Card } from './ui/Card.svelte';
export { default as Badge } from './ui/Badge.svelte';
export { default as Navbar } from './shared/Navbar.svelte';
export { default as Hero } from './shared/Hero.svelte';
export { default as About } from './shared/About.svelte';
export { default as Services } from './shared/Services.svelte';
export { default as PortfolioGrid } from './shared/PortfolioGrid.svelte';
export { default as Contact } from './shared/Contact.svelte';
export { default as Footer } from './shared/Footer.svelte';
```

---

### 8. Halaman Utama

#### [MODIFY] [+page.svelte](file:///c:/laragon/www/terraincognitatechnology/company-profile/src/routes/+page.svelte)
Rakit semua section menjadi one-page website elegan

---

### 9. Storybook Stories

#### [NEW] Button.stories.svelte
#### [NEW] Card.stories.svelte

---

### 10. Install `lucide-svelte`

```bash
npm install lucide-svelte
```

---

## Design System

| Token | Value |
|---|---|
| Background | `#050B18` (deep space navy) |
| Surface | `#0D1B2A` |
| Accent Cyan | `#00D4FF` |
| Accent Green | `#39FF14` |
| Text Primary | `#F0F4F8` |
| Text Muted | `#8B9CB6` |
| Font | Inter (Google Fonts) |

**Efek visual**: glassmorphism cards, animated gradient blobs, CSS particle grid, smooth scroll, hover glow effects

---

## Verification Plan

### Automated
```bash
npm run check   # TypeScript check
npm run lint    # Prettier check
npm run build   # Pastikan adapter-static build sukses
```

### Manual / Browser
- Buka `http://localhost:5173` → cek semua section tampil
- Test mobile responsiveness
- Test portfolio filter tabs
- Test Storybook `npm run storybook`
