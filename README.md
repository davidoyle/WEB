# Worker's Toolkit Web

Worker's Toolkit Web is a Next.js application that helps injured workers in British Columbia navigate WorkSafeBC claims, documentation, and appeal workflows.

## Tech stack

- Next.js (App Router + Pages Router)
- React
- Tailwind CSS
- Supabase
- Resend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` and provide:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`
   - `NOTIFY_EMAIL`
3. Start development server:
   ```bash
   npm run dev
   ```

## Quality commands

- Lint:
  ```bash
  npm run lint
  ```
- Format:
  ```bash
  npm run format
  ```
- Production build:
  ```bash
  npm run build
  ```

## Deployment

- Recommended platform: Vercel
- Build command: `npm run build`
- Start command: `npm run start`
- Ensure all required environment variables are configured in the deployment provider.

## Architecture overview

- `app/`: App Router routes and server handlers.
- `src/pages/`: Pages Router routes, including API endpoints.
- `src/components/`, `src/sections/`, `src/flows/`: UI and feature composition.
- `src/data/content.js`: central structured content used by key UI flows.
- `src/lib/` and `utils/`: Supabase and support utilities.
