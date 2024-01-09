import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      backgroundColors: {
        'primary-purple': 'linear-gradient(-45deg, #8E2DE2, #4A00E0, #4A00E0, #8E2DE2)',
      },
    },
  },
  plugins: [],
}
export default config
