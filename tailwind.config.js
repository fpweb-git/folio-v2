module.exports = {
  purge : {
    mode : 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  },
  darkMode : false, // or 'media' or 'class' or false
  theme : {
    fontFamily:{
      'open' : ['Open Sans', 'sans-serif'],
      'mono' : ['PT Mono', 'monospace']
    },
    extend : {
      colors : {
        lime : '#D0F224',
        blue : '#2F2E8B',
        orange : '#F3C66E',
        coral : '#FF6B60',
        lightgray : '#FAFAFF',
        dark : '#313243',
        deepdark : '#15141B'
      },
    },
  },
  variants : {
    extend : {},
  },
  plugins : [require('@tailwindcss/forms')],
}
