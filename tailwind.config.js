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
      'burger': '1450px',
      'med':'848px'
    },
    objectPosition: {
      'index': '0 -15rem'
    },
    linearGradientColors: theme => theme('colors'),
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gradients')
  ],
}
}