# PWN TCPioneer

PWN TCPioneer is a cybersecurity learning platform built as part of The Cyber Pioneer project. It is designed to bring practical security learning, user accounts, and security-focused content into one application.

## About

This repository contains the current PWN TCPioneer web application.

The application includes:

- Cybersecurity learning content
- User registration and authentication
- Email verification and password reset flows
- GitHub and Google authentication
- Role-based users, moderators, and administrators
- PostgreSQL database integration with Prisma
- A dedicated PWN-focused interface and branding

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Better Auth and custom authentication flows
- GitHub and Google OAuth

## Getting Started

Clone the repository:

```bash
git clone https://github.com/anandksri/pwn.tcpioneer.org.git
cd pwn.tcpioneer.org
```

Install dependencies:

```bash
npm install
```

Create a local environment file and configure the required application and database variables. Do not commit real credentials, OAuth secrets, database credentials, or other sensitive values.

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Database

The project uses Prisma with PostgreSQL. The Prisma schema and migrations are available in the `prisma/` directory.

Before using database-backed features locally, configure `DATABASE_URL` and run the required Prisma setup for your environment.

## Project Structure

```text
src/app/        Next.js application routes and pages
src/app/api/    API and authentication endpoints
prisma/         Database schema and migrations
public/         Static assets and project images
```

## Security

This project handles authentication, user accounts, OAuth integrations, and password-related workflows. Security issues should be reported responsibly rather than publicly disclosed before they can be investigated.

Do not commit secrets or production credentials to the repository.

## Project

PWN TCPioneer is part of The Cyber Pioneer, my broader work in cybersecurity education, security research, and software development.

## Contributing

Suggestions, improvements, bug reports, and pull requests are welcome. For larger changes, open an issue first so the proposed change can be discussed before implementation.

## Author

Anand Keshari
