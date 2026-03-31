/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2d2d2d',
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'accent': '#5a91ef',
        'accent-secondary': '#ffe271',
        'accent-coral': '#f77a7a',
        'red-disruptive': '#dd1928',
        'pure-white': '#ffffff',
        'bg-light': '#fafcff',
        'border': '#e8f0ff',
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 