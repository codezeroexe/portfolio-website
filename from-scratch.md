# Portfolio From Scratch

## Tech Stack
- Next.js 16 + TypeScript + Tailwind v4
- Shadcn UI (base-ui, not Radix)
- Framer Motion (animations)
- Remix Icons (social icons)
- next-themes (dark/light toggle)

## Components & Locations

| Component | Location | Source | Used In |
|---|---|---|---|
| `Button` | `src/components/ui/button.tsx` | Shadcn CLI | page.tsx, project-card.tsx, social-buttons.tsx, theme-toggle.tsx |
| `Card` | `src/components/ui/card.tsx` | Shadcn CLI | project-card.tsx |
| `Badge` | `src/components/ui/badge.tsx` | Shadcn CLI | page.tsx, project-card.tsx |
| `Avatar` | `src/components/ui/avatar.tsx` | Shadcn CLI | page.tsx |
| `Separator` | `src/components/ui/separator.tsx` | Shadcn CLI | page.tsx |
| `ThemeProvider` | `src/app/theme-provider.tsx` | Custom | layout.tsx |
| `ThemeToggle` | `src/components/theme-toggle.tsx` | Custom | page.tsx |
| `SocialButtons` | `src/components/social-buttons.tsx` | Custom (Remix Icons) | page.tsx |
| `ProjectCard` | `src/components/project-card.tsx` | Custom (Remix Icons) | page.tsx |

## Page Sections (`src/app/page.tsx`)

1. **Hero** — Avatar, name, title, View My Work/Get In Touch buttons, ThemeToggle
2. **About** — Bio text + tech stack badges
3. **Projects** — 3x ProjectCard components (no images, tags, GitHub/Live Demo buttons)
4. **Contact** — Email Me button + SocialButtons (GitHub, LinkedIn, Instagram, X)
5. **Footer** — Copyright

## Config Files
- `src/app/layout.tsx` — Inter + JetBrains Mono fonts, ThemeProvider
- `src/app/globals.css` — Tailwind v4 + OKLCH colors + dark mode
- `components.json` — Shadcn config
- `.gitignore` — excludes node_modules

## Repo
https://github.com/codezeroexe/portfolio-website (main branch)

## Key Rules
- No `asChild` prop on Button (base-ui doesn't support it) → use `onClick`
- Lucide-react doesn't have social icons → use Remix Icons (`@remixicon/react`)
- Project cards: no images, just title, description, tags, GitHub/Live Demo buttons
