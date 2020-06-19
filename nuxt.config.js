module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: 'components/main/pre-loader.vue',
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '@/assets/style/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/globals',
    '@/plugins/axios',
    '@/plugins/vuelidate',
    '@/plugins/gsap',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  styleResources: {
    scss: ['@/assets/style/lib.scss']
  },
  /*
  
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['gsap'],
    extend(config, ctx) {}
  }
}