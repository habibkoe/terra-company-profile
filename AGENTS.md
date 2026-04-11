# AGENTS.md

## Commands

```bash
npm run dev          # Start dev server
npm run build       # Production build
npm run preview    # Preview production build
npm run check      # Typecheck (svelte-check)
npm run lint      # Prettier check
npm run format   # Prettier write
npm run storybook # Storybook on port 6006
```

## Key Facts

- **Svelte 5**: Project uses runes mode (enabled in svelte.config.js) - Always use Svelte 5 syntax ($state, $derived, $props, snippets)
- **Adapter**: Currently `adapter-auto` - change to `adapter-static` for static deployment (see PRD.md)
- **Styling**: Tailwind CSS v3
- **Component structure**: Barrel exports via `src/lib/components/index.ts`

## Verification Order

Run before committing: `npm run check && npm run lint`
