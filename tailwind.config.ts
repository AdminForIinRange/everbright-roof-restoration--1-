import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'everbright-blue': '#003249',
        'everbright-red': '#e60000',
        'brand-sky': '#38bdf8',
        'brand-dark': '#0f172a',
        'dark-navy': '#0D2533',
        'banner-dark': '#0B1D27',
        'navy-dark': '#0B1E2B',
        'navy-custom': '#002B5B',
        gold: '#D4AF37',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
        roboto: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        'offer-fade': {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'offer-fade': 'offer-fade 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
