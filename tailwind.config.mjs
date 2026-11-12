/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        dark: {
          950: '#07090e',
          900: '#0c0f17',
          850: '#111520',
          800: '#171c2b',
          750: '#1e2436',
          700: '#272f45',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          950: '#083344',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.25)',
        'glow-sky': '0 0 30px -5px rgba(56, 189, 248, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(129, 140, 248, 0.25)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
