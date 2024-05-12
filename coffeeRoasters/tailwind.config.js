/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '1xl': { max: '1400px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1300px' },
      // => @media (max-width: 1279px) { ... }

      wbm: { max: '1118px' },

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '800px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      ssm: { max: '500px' },

      xsm: { max: '400px' },
      // => @media (max-width: 639px) { ... }

      lsm: { max: '300px' },
      // => @media (max-width: 639px) { ... }

      esm: { max: '200px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
