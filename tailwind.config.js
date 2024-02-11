/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        myPrimaryBrandColor: '#000000',
        myPrimaryLinkColor: '#16a34a',
        // gray colors
        myPrimaryLightGrayColor: '#eff2f6',
        // for myPrimaryTag
        myPrimaryLightMediumGrayColor: '#dee6f0',

        // just a dark gray color
        myPrimaryMediumGrayColor: '#9ca3af',

        // use as black color
        myPrimaryDarkGrayColor: '#111827',

        myPrimaryErrorColor: '#d60000',
        myPrimarySuccesColor: '#16a34a',
      },
      fontFamily: {
        sans: ['Jost', 'Raleway', "'Cormorant'", 'sans-serif'],
      },
    },
  },

  plugins: [],
};
