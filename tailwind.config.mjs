/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        paper: {
          50: '#FFFFFF',
          100: '#F9FAFB',
          150: '#F7F7F5',
          200: '#F3F4F6',
          300: '#E5E7EB',
        },
        ink: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          500: '#6B7280',
          400: '#9CA3AF',
        },
        brand: {
          blue: '#1D4ED8',
          hover: '#1E40AF',
          light: '#EFF6FF',
        },
      },
    },
  },
  plugins: [],
};
