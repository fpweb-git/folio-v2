export default {

  target: 'static',

  head: {
    title: 'folio-V2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  axios: {},

  content: {},

  build: {
  },

  gsap: {
    extraPlugins: {
      cssRule: false,
      draggable: false,
      easel: false,
      motionPath: false,
      pixi: false,
      text: false,
      scrollTo: false,
      scrollTrigger: true
    },
  },
}
