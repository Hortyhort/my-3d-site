# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 project with React Three Fiber for 3D graphics. The project uses:
- **Next.js 16.0.3** with App Router architecture
- **React 19.2.0** with the React Compiler enabled
- **React Three Fiber** (`@react-three/fiber`) and **Drei** (`@react-three/drei`) for 3D rendering
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling (using PostCSS plugin)

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture

### Next.js App Router Structure
- **`src/app/`** - App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration (Geist Sans, Geist Mono)
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind directives

### TypeScript Configuration
- Path alias configured: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled
- React JSX transform enabled

### React Three Fiber Integration
The project includes `@react-three/fiber` and `@react-three/drei` for declarative 3D graphics using Three.js. When working with 3D components:
- Three.js primitives are accessed via lowercase tags in JSX (e.g., `<mesh>`, `<boxGeometry>`)
- Drei provides useful abstractions and helpers
- 3D components should be wrapped in a `<Canvas>` component from `@react-three/fiber`

### React Compiler
The React Compiler is enabled in `next.config.ts`. This experimental feature automatically optimizes React components, so:
- Manual memoization (`useMemo`, `useCallback`) is often unnecessary
- The compiler handles optimization at build time
- Component re-renders are automatically minimized

### Styling with Tailwind CSS v4
- Uses the new PostCSS plugin approach (`@tailwindcss/postcss`)
- Dark mode support enabled (uses `dark:` prefix)
- Custom color scheme: zinc palette with dark mode inversion

## Key Patterns

### Font Loading
Fonts are loaded via `next/font/google` in the root layout and applied using CSS variables:
- `--font-geist-sans` for Geist Sans
- `--font-geist-mono` for Geist Mono

### Image Optimization
Use Next.js `<Image>` component from `next/image` for all images to leverage automatic optimization, lazy loading, and responsive sizing.

### Static Assets
Place static assets in the `public/` directory. They can be referenced from the root path (e.g., `/next.svg`).

## Code Style

### ESLint Configuration
The project uses Next.js ESLint configuration with:
- `eslint-config-next/core-web-vitals` for web vitals rules
- `eslint-config-next/typescript` for TypeScript-specific rules
- Global ignores for `.next/`, `out/`, `build/`, and `next-env.d.ts`

### TypeScript Patterns
- Use strict typing throughout
- Leverage TypeScript's type inference where possible
- Use `Readonly<>` for props that shouldn't be mutated
- Import types with `import type` syntax when importing only types

### Component Patterns
- Functional components with TypeScript
- Export default for page components
- Use React 19 features (e.g., improved hooks, server components)
- Leverage automatic memoization from React Compiler instead of manual optimization
