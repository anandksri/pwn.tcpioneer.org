# PWN.TCPIONEER

PWN.TCPIONEER is a cybersecurity learning platform built around structured learning paths, practical challenges, and community-led growth.

## Features

- Cybersecurity learning modules and lessons
- Hands-on practice challenges
- GitHub and Google authentication
- Email verification and password reset flows
- User dashboards, profiles, notifications, and settings
- Community posts, comments, events, and moderation
- PostgreSQL integration with Prisma
- Responsive GitHub-style dark interface

## Tech Stack

- Next.js 16 with the App Router
- React and TypeScript
- Tailwind CSS
- shadcn/ui with Base UI
- Prisma and PostgreSQL
- Better Auth and custom authentication flows

## Development

Clone the repository:

```bash
git clone https://github.com/anandksri/pwn.tcpioneer.org.git
cd pwn.tcpioneer.org
npm install
```

Create a local environment file and configure the required application, database, OAuth, and email variables. Do not commit credentials or secrets.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm test
npm run build
```

## Project Structure

```text
src/
├── app/              # App Router pages, layouts, and API routes
├── components/       # Navigation, authentication, dashboard, and UI components
├── sections/         # Page-level composed sections
├── data/             # Static content and navigation data
├── context/          # Client-side application state
├── hooks/            # Reusable React hooks
├── lib/              # Application helpers and integrations
└── utils/            # Focused utility functions

prisma/
├── schema.prisma
├── migrations/
└── seed.ts
```

## Database

The project uses Prisma with PostgreSQL. The Prisma schema and migrations are in `prisma/`. Configure `DATABASE_URL` and run the required Prisma setup before using database-backed features.

## Security

This project handles authentication, user accounts, OAuth integrations, and password workflows. Report security issues responsibly rather than publicly disclosing vulnerabilities before they are investigated.

Do not commit secrets or production credentials.

## Author

Anand Keshari
