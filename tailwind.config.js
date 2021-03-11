module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vacblue': '#045184',
        'vacpurple': '#242857',
        'vacgrey': '#a8acad'
      },
      transitionDuration: {
        '25': '25ms',
        '50': '50ms'
    },
    screens: {
      'nav2': '750px',
      'burger': '1450px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}