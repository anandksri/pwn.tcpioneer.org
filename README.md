# PWN.TCPIONEER

PWN.TCPIONEER is a cybersecurity learning platform built around structured
learning paths, practical challenges, and community-led growth.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui with the Base UI and Lyra preset
- Prisma
- Better Auth

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Validation commands:

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
├── app/              # App Router pages, layouts, and API routes
├── components/
│   ├── ui/           # shadcn/Base UI primitives
│   ├── pwn/          # shared PWN domain components
│   ├── navbar/       # public navigation components
│   ├── dashboard/    # dashboard-specific components
│   └── auth/         # authentication UI
├── sections/         # page-level composed sections
│   └── home/         # homepage sections
├── data/             # static content and navigation data
├── context/          # client-side application state
├── hooks/            # reusable React hooks
├── lib/              # application helpers and integrations
└── utils/            # focused utility functions
```

Authentication, Prisma, API routes, and existing application behavior should
remain isolated from visual UI work.
