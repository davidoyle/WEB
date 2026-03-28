module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        accent: 'var(--accent)',
        muted: 'var(--text-secondary)',
        paper: 'var(--bg-secondary)',
        primary: 'var(--accent)',
        border: 'var(--border-default)',
        card: 'var(--bg-secondary)',
      },
    },
  },
  plugins: [],
};
