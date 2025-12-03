# Worker's Toolkit Web

This repository hosts the Worker's Toolkit site as a Next.js application with Tailwind CSS styling. The current structure replaces the original static/Vite layout, so you won't see files like `index.html` or `vite.config.js` at the project root. Next.js manages the HTML shell and build configuration internally, while `vercel.json` documents the deploy commands Vercel should run.

## Development
- Configure the git remote (if missing): `git remote add origin https://github.com/davidoyle/WEB.git`
This repository hosts the Worker's Toolkit site as a Next.js application with Tailwind CSS styling. The current structure replaces the original static/Vite layout, so you won't see files like `index.html`, `vite.config.js`, or `vercel.json` at the project root. Next.js manages the HTML shell and build configuration internally.

## Development
- Install dependencies: `npm install`
- Start a dev server: `npm run dev`
- Build for production: `npm run build`
- Run linting: `npm run lint`

> Note: If dependency installs are blocked by a network proxy, configure npm to use an accessible registry before running the commands above.

## Environment variables
Create a `.env.local` file (or use the provided `.env.example`) with:

- `SUPABASE_URL` – your Supabase project URL.
- `SUPABASE_SERVICE_KEY` – the **service role key** for secure inserts from the API route.
- `RESEND_API_KEY` – API key for sending notification emails.
- `NOTIFY_EMAIL` – recipient for new story notifications (default: `dxddoyle@gmail.com`).

## Deployment
Vercel automatically detects the Next.js framework when `next` is listed in `dependencies`. Ensure deployments point to this repository root (where `package.json` lives) so the build step runs `next build`.
