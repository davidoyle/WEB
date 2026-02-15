/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './context/**/*.{js,jsx,ts,tsx,mdx}',
    './data/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',
        foreground: '#0f172a',
        primary: '#3b82f6',
        'primary-dark': '#2563eb',
        accent: '#10b981',
        muted: '#64748b',
        border: '#e2e8f0',
        card: '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;
