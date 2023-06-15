/** @type {import('tailwindcss').Config} */
const svgToDataUri = require('mini-svg-data-uri')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      screens: {
        sm: { min: '475px', max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px' },
      },
      colors: {
        'eerie-black': {
          100: '#DFDCF4',
          200: '#C1BCE9',
          300: '#8D87BF',
          400: '#55507F',
          500: '#18162B',
          600: '#111024',
          700: '#0C0B1E',
          800: '#080718',
          900: '#050414',
        },
        'cornflower-blue': {
          100: '#E0E1FE',
          200: '#C1C3FD',
          300: '#A2A4FA',
          400: '#898CF6',
          500: '#6366F1',
          600: '#484ACF',
          700: '#3133AD',
          800: '#1F218B',
          900: '#131473',
        },
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    },
  ],
}
