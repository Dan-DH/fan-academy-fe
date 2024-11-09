import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms'; // Import the plugin here

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: { '13': 'repeat(13, minmax(0, 1fr))' },
      colors: {
        'fa-yellow': '#ebdd00',
        'fa-orange': '#e58700'
      }
    },
    keyframes: { shimmer: { '100%': { transform: 'translateX(100%)' } } }
  },
  plugins: [forms]
};
export default config;
