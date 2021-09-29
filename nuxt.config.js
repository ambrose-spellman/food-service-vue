import 'dotenv/config'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Shock Doner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shock Doner project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap'
      }

    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/style.scss',
  ],
  /*
  ** Modules
  */
  modules: [
    // axios is required by @nuxtjs/auth
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
  }
}
