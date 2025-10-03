User/Admin gaming app scaffold with Next.js 15, Prisma, NextAuth, Tailwind.

## Getting Started

1) Copy environment file and set Google OAuth:
```bash
cp .env.example .env
```
Fill `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

2) Generate DB and Prisma client:
```bash
npm run prisma:push
```

3) Start dev server:
```bash
npm run dev
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features included
- Google login (NextAuth)
- SQLite via Prisma
- Basic pages: Home, Store, Games, Create Tournament, Notifications, Profile
- API routes: `/api/tournaments` (create/list), `/api/upload` (file uploads)
- Middleware protection for app routes
