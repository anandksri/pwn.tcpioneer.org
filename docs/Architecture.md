# PWN.TCPIONEER Architecture

## Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL-compatible database
- Better Auth for authentication
- App Router architecture

## Directory structure
The project uses a small Next.js app structure centered around the `src` directory. The current repository includes:

- `src/app` — application routes and global styling
- `src/components` — reusable UI and page sections
- `src/context` — client-side state, including auth and sidebar state
- `src/data` — static data used for dashboard and content sections
- `src/lib` — app helpers and navigation data
- `prisma` — Prisma schema and migration files

## Authentication
Authentication is handled through the app's auth flows and API routes under `src/app/api/auth`. This preserves session flow and login behavior while the UI shell is redesigned.

## App Router
The application uses Next.js App Router conventions with route groups and page files inside `src/app`.

## Data layer
Prisma is configured as the application data layer. The database schema is defined in `prisma/schema.prisma` and migrations live under `prisma/migrations`.

## UI architecture
The UI is componentized into reusable blocks for:
- Navigation
- Dashboard cards
- Auth forms
- Learning sections
- Reusable button and card primitives

## Design system intent
The platform is intentionally moving toward a shadcn-inspired design language with a dark developer-focused aesthetic, square corners, minimal borders, compact spacing, and violet accents.

## Current architecture notes
- Authentication and session behavior must be preserved.
- Database and Prisma schema changes are not to be introduced without explicit instruction.
- New visual changes should be implemented through existing layout and component patterns rather than large rewrites.
