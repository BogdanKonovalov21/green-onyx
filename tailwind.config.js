/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '320',
      xs: '375px',
      sm: '640px',
      md: '860px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1336px',
    },
    colors: {
      lightOrange: '#ffd66d',
      white: '#ffffff',
      black: '#070707',
      block: '#eee6dd',
    },
  },
  plugins: [],
};
