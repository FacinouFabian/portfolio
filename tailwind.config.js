const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{jsx,tsx}', './core/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  },
  theme: {
    extend: {
      backgroundColors: {
        'primary-purple': 'linear-gradient(-45deg, #8E2DE2, #4A00E0, #4A00E0, #8E2DE2)',
      },
    },
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    plugin(function ({ addUtilities, variants }) {
      const newUtilities = {}

      addUtilities(newUtilities, variants('customPlugin'))
    }),
  ],
}
