// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontSize, minHeight, maxHeight, minWidth, maxWidth } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  purge: {
    content: [
      './src/pages/**/*.tsx',
      './src/components/**/*.tsx',
      './src/hooks/**/*.@(ts|tsx)',
      './src/styles/**/*.@(ts|tsx)'
    ],
    options: {
      safelist: ['dark']
    }
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors
    },
    extend: {
      minHeight: {
        ...minHeight
      },
      maxHeight: {
        ...maxHeight
      },
      minWidth: {
        ...minWidth
      },
      maxWidth: {
        ...maxWidth
      }
    },
    fontFamily: {
      sans: ['Lato', 'Arial', 'sans-serif']
    },
    fontSize: {
      ...fontSize
    }
  },
  variants: {
    variantOrder: [
      'first',
      'last',
      'odd',
      'even',
      'visited',
      'checked',
      'group-hover',
      'group-focus',
      'focus-within',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'disabled'
    ]
  }
};
