export default {

  target: 'static',

  head: {
    title: 'François parrou | développeur web freelance Vue.js et Jamstack',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'apple-touch-icon', sizes:'180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon-16x16.png' }
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  axios: {},

  content: {
    markdown: {
      prism: {
        theme: '~/assets/css/prism-oceanic.css'
      }
    }
  },

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

  sitemap: {
    hostname: 'https://francois-parrou.com',
    trailingSlash: true,
    exclude: [
      '/success',
      '/404',
      '/admin-fp',
      '/mentions-legales',
    ],
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('blog').only(['permalink']).fetch()
      return files.map(file => '/blog/'+file.permalink+'/')
    }
  },
}
