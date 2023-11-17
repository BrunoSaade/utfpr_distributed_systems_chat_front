const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js,html}',
    './pages/**/*.{vue,js,html}',
    './partials/**/*.{vue,js}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    extend: {
      backgroundImage: {
        close: `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.22364 4.22364C4.36688 4.08044 4.56113 4 4.76367 4C4.96621 4 5.16046 4.08044 5.3037 4.22364L8.00461 6.92455L10.7055 4.22364C10.8496 4.0845 11.0425 4.00751 11.2428 4.00925C11.4431 4.01099 11.6347 4.09132 11.7763 4.23294C11.9179 4.37457 11.9982 4.56614 12 4.76642C12.0017 4.96669 11.9247 5.15964 11.7856 5.3037L9.08467 8.00461L11.7856 10.7055C11.9247 10.8496 12.0017 11.0425 12 11.2428C11.9982 11.4431 11.9179 11.6347 11.7763 11.7763C11.6347 11.9179 11.4431 11.9982 11.2428 12C11.0425 12.0017 10.8496 11.9247 10.7055 11.7856L8.00461 9.08467L5.3037 11.7856C5.15964 11.9247 4.96669 12.0017 4.76642 12C4.56614 11.9982 4.37457 11.9179 4.23294 11.7763C4.09132 11.6347 4.01099 11.4431 4.00925 11.2428C4.00751 11.0425 4.0845 10.8496 4.22364 10.7055L6.92455 8.00461L4.22364 5.3037C4.08044 5.16046 4 4.96621 4 4.76367C4 4.56113 4.08044 4.36688 4.22364 4.22364V4.22364Z' fill='white'/%3E%3C/svg%3E%0A");`,
        check: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
        radio: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
        background_1: `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8)),url("/images/background_1.png")`,
        background_2: `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8)),url("/images/background_2.png")`,
        background_hero: `url("/images/landingpage/h.png")`,
      },
      boxShadow: {
        button: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        card: '0px 0px 20px rgba(211, 211, 211, 0.5)',
        popup: '0px 0px 40px rgba(0, 0, 0, 0.3)',
      },

      fontSize: {
        s1: [`${12 / 16}rem`, `${16 / 16}rem`], // 12px 16px
        s2: [`${14 / 16}rem`, `${19.1 / 16}rem`], // 14px 19.1px
        s3: [`${16 / 16}rem`, `${20 / 16}rem`], // 16px 20px
        s4: [`${18 / 16}rem`, `${24 / 16}rem`], // 18px 24px
        s5: [`${20 / 16}rem`, `${28 / 16}rem`], // 20px 28px
        s6: [`${24 / 16}rem`, `${32 / 16}rem`], // 24px 32px
        s7: [`${28 / 16}rem`, `${40 / 16}rem`], // 28px 40px
        s8: [`${32 / 16}rem`, `${48 / 16}rem`], // 32px 48px
        s9: [`${40 / 16}rem`, `${54 / 16}rem`], // 40px 54px
      },

      colors: {
        primary: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
        secondary: {
          50: '#d0f0c0',
          100: '#a4e377',
          200: '#77cd2f',
          300: '#4ba608',
          400: '#288100',
          500: '#006e00',
          600: '#006700',
          700: '#005f00',
          800: '#005800',
          900: '#004c00',
        },

        tertiary: {
          50: '#f2d4f2',
          100: '#e599e5',
          200: '#d466d4',
          300: '#c433c4',
          400: '#b500b5',
          500: '#9d00ad',
          600: '#8b009e',
          700: '#78008e',
          800: '#66007f',
          900: '#4f006f',
        },

        success: {
          light: {
            50: '#f1fdf3',
            100: '#dbfbe0',
            200: '#c4f8cc',
            300: '#acf5b8',
            400: '#9af3a8',
            500: '#88f199',
            600: '#80ef91',
            700: '#75ed86',
            800: '#6beb7c',
            900: '#58e76b',
          },
          dark: {
            50: '#eaf7e5',
            100: '#c9ebbe',
            200: '#a6dd92',
            300: '#82cf66',
            400: '#67c546',
            500: '#4cbb25',
            600: '#45b521',
            700: '#3cac1b',
            800: '#33a416',
            900: '#24960d',
          },
        },

        error: {
          light: {
            50: '#ffeaea',
            100: '#ffcccc',
            200: '#ffaaaa',
            300: '#ff8787',
            400: '#ff6e6e',
            500: '#ff5454',
            600: '#ff4d4d',
            700: '#ff4343',
            800: '#ff3a3a',
            900: '#ff2929',
          },
          dark: {
            50: '#fde2e2',
            100: '#f9b6b6',
            200: '#f68686',
            300: '#f25555',
            400: '#ef3030',
            500: '#ec0c0c',
            600: '#ea0a0a',
            700: '#e70808',
            800: '#e40606',
            900: '#df0303',
          },
        },

        info: {
          50: '#f1f9fd',
          100: '#dbeffb',
          200: '#c4e5f8',
          300: '#acdbf5',
          400: '#9ad3f3',
          500: '#88cbf1',
          600: '#80c6ef',
          700: '#75beed',
          800: '#6bb8eb',
          900: '#58ace7',
        },
        warn: {
          50: '#fefaed',
          100: '#fcf3d2',
          200: '#faebb5',
          300: '#f7e397',
          400: '#f6dd80',
          500: '#f4d76a',
          600: '#f3d362',
          700: '#f1cd57',
          800: '#efc74d',
          900: '#ecbe3c',
        },
        neutral: {
          50: '#FEFEFE',
          100: '#F6F8FA',
          200: '#EDF2FA',
          300: '#E2E2E2',
          400: '#AFAFAF',
          500: '#939393',
          600: '#565656',
          900: '#1A1A1E',
        },
        extra: { 500: '#A83F18' },
      },
      borderWidth: [...new Array(9)].map((el, index) => `${index}px`),
    },
  },
  variants: {
    extend: {},
    scrollbar: ['rounded'],
  },
  plugins: [
    plugin(function ({ addVariant }) {
      const sizes = ['small', 'medium', 'large']
      const variants = [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'error',
        'info',
        'warn',
        'outline_primary',
        'outline_secondary',
        'outline_tertiary',
        'outline_success',
        'outline_error',
        'outline_info',
        'outline_warn',
      ]
      sizes.forEach((size) => {
        addVariant(size, [`&[data-size=${size}]`])
        addVariant(`group-${size}`, [`:merge(.group)[data-size=${size}] &`])
      })
      variants.forEach((variant) => {
        addVariant(variant, [`&[data-variant=${variant}]`])
        addVariant(`group-${variant}`, [
          `:merge(.group)[data-variant=${variant}] &`,
        ])
      })
      addVariant('is-focus', ['&[data-focus=true]'])
      addVariant('group-is-focus', [':merge(.group)[data-focus=true] &'])
      addVariant('error', [`&[data-error=true]`])
      addVariant('group-error', [':merge(.group)[data-error=true] &'])
      addVariant('is-active', ['&[data-active=true]'])
      addVariant('group-is-active', [':merge(.group)[data-active=true] &'])
      addVariant('is-checked', ['&[data-checked=true]'])
      addVariant('group-is-checked', [':merge(.group)[data-checked=true] &'])
      addVariant('is-disabled', ['&[data-disabled=true]'])
      addVariant('group-is-disabled', [':merge(.group)[data-disabled=true] &'])
    }),
    plugin(function ({ addUtilities, theme }) {
      const justifyContent = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        around: 'space-around',
        between: 'space-between',
        evenly: 'space-evenly',
        stretch: 'stretch',
      }
      const alignItems = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        stretch: 'stretch',
        baseline: 'baseline',
      }

      const inlineLayoutsUtilities = {}
      const stackLayoutsUtilities = {}

      for (const justify in justifyContent) {
        for (const items in alignItems) {
          inlineLayoutsUtilities[`.l-inline-${justify}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
          }
          inlineLayoutsUtilities[`.l-inline-${justify}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
          }
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
          stackLayoutsUtilities[`.l-stack-${justify}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
          }
          stackLayoutsUtilities[`.l-stack-${justify}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
          }
          stackLayoutsUtilities[`.l-stack-${justify}-${items}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
          stackLayoutsUtilities[`.l-stack-${justify}-${items}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
        }
      }
      const layoutUtilities = {
        '.l-center': {
          display: 'grid',
          placeContent: 'center',
        },

        '.l-inline': {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },

        '.l-stack': {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },
        '.wrap': {
          flexWrap: 'wrap',
        },
        '.nowrap': {
          flexWrap: 'nowrap',
        },
      }
      addUtilities(layoutUtilities, ['responsive'])
      addUtilities(inlineLayoutsUtilities, ['responsive'])
      addUtilities(stackLayoutsUtilities, ['responsive'])
    }),
  ],
}
