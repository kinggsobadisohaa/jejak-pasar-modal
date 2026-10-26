# AGENTS.md

## Project
"Jejak Pasar Modal": a single-page, client-rendered Next.js 15 (App Router) site that teaches Indonesian beginners about the stock market. No backend, database, auth, or API routes; the inquiry form is UI-only.

## Commands (repo root)
- `npm install` — the checkout has neither a lockfile nor `node_modules`; install before anything else.
- `npm run dev` — Next dev server.
- `npm run lint` — ESLint 9 flat config from `eslint.config.mjs`. The root `.eslintrc.json` is stale/unused; do not "resolve" the duplication by editing it.
- `npx tsc --noEmit` — the only typecheck. There is no `typecheck` script and no test suite/runner.
- `npm run build` — ESLint errors are ignored during builds (`next.config.ts`), TypeScript errors are not. Run lint and tsc explicitly instead of relying on the build.

## Architecture
- `app/page.tsx` is the whole site: a `'use client'` component that swaps views on an `activeTab` string. No router; the URL never changes and the active tab resets on reload.
- Tab ids are the routing contract: `beranda`, `materi-1`, `materi-2`, `latihan`, `glosarium`, `tentang`. They are hardcoded in `app/page.tsx`, `components/Navbar.tsx`, `HeroSection.tsx`, `LearningPathSection.tsx`, `WhatsIncludedSection.tsx`, and `Footer.tsx`. Adding/renaming a view requires updating all of these plus the breadcrumb labels in `page.tsx`.
- All curriculum content (modules, quizzes, glossary, trend exercises) lives in `lib/course-data.ts`. Edit content there, not inside JSX; components import its arrays and types (`SubTopic`, `QuizQuestion`, `GlossaryItem`, `TrendExercise`).
- `metadata` and `<html lang="id">` live in `app/layout.tsx`; keep metadata there because `page.tsx` is a client component.

## Styling
- Tailwind v4: `app/globals.css` is only `@import "tailwindcss";`, processed by `@tailwindcss/postcss`. There is no `tailwind.config.*`; put theme customization in CSS, not a JS config.
- Established look: dark surfaces (`#0c0f14`, `#0a0d12`), amber-500 accent, slate text, `lucide-react` icons, all copy in Indonesian. The PRD asks for a light theme, but the shipped implementation is dark; match existing components.
- `lib/utils.ts` (`cn`) and `hooks/use-mobile.ts` exist but are currently unused; there is no `components/ui/` shadcn setup.

## Content and product constraints
- Product source of truth: `public/assets/aistudio/PRD_Jejak_Pasar_Modal_Revisi_cc2617ba.md` (served publicly at that path).
- The mandatory educational disclaimer banner in `components/Footer.tsx` must remain visible on every view.
- Stay in educational scope: no buy/sell signals, price predictions, advanced trading strategies, or real-time market data (explicitly outside MVP scope).

## Gotchas
- `next.config.ts` sets `output: 'standalone'` and disables file watching when `DISABLE_HMR=true`; keep both (AI Studio depends on them).
- `README.md`/`.env.example` mention `GEMINI_API_KEY` and `metadata.json` declares a Gemini capability, but no code calls Gemini; `@google/genai`, `firebase-tools`, `@hookform/resolvers`, `motion`, and class-variance-authority are installed but unreferenced. No env vars are needed to run the app — do not wire up AI/Firebase unless asked.
