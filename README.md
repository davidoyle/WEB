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
Deploy from the repository root (where `package.json` and `src/pages` live) so the hosting platform runs the Next.js toolchain instead of looking for a static `index.html`. A healthy deploy runs `npm run build` first and then starts the server with `npm run start`.

Required steps for hosts like Vercel/Render/Heroku:
- **Project root**: Set the working directory to the repo root.
- **Build**: Run `npm run build`.
- **Start**: Run `npm run start` so the Next.js server serves both pages and API routes.
- **Environment**: Provide `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`, and `NOTIFY_EMAIL`.

If a deployment log shows `npm run build` not executing, adjust the build command to call it explicitly. If API routes return 404s, confirm the host is using the Node runtime and that the project root is set correctly so `/src/pages/api` is included.
