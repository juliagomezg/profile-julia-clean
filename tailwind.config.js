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
        bg: 'var(--bg)',
        'bg-blur': 'var(--bg-blur)',
        bg2: 'var(--bg2)',
        line: 'var(--line)',
        line2: 'var(--line2)',
        ink: 'var(--ink)',
        body: 'var(--body)',
        soft: 'var(--soft)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        num: 'var(--num)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
      },
      spacing: {
        gutter: 'clamp(20px, 3.5vw, 44px)',
      },
    },
  },
  plugins: [],
}
