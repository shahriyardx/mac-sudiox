module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        angry: 'angry .3s linear infinite'
      },
      keyframes: {
        angry: {
          '0%': {top: '3px'},
          '20%': {top: '2px', left: '3px'},
          '40%': {top: '-3px', left: '-2px'},
          '60%': {top: '3px', left: '3px'},
          '80%': {top: '-2px', left: '2px'},
          '180%': {top: '1px', left: '-2px'}
        }
      }
    },
  },
  plugins: [],
}
