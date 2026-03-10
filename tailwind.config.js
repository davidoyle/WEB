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
        'text-dark': 'var(--text-dark)',
        'text-dark-secondary': 'var(--text-dark-secondary)',
        primary: 'var(--bg-primary)',
        'primary-dark': '#072b30',
        border: 'rgba(243, 239, 230, 0.2)',
        card: 'rgba(243, 239, 230, 0.06)',
      },
      boxShadow: {
        card: '0 12px 30px rgba(3, 17, 19, 0.25)',
      },
    },
  },
  plugins: [],
};
