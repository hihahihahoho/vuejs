import hooks from './hooks'
export default {
  mode: 'universal',
  /*
     ** Headers of the page
     */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
     ** Customize the progress-bar color
     */
  loading: { color: '#fff' },
  /*
     ** Global CSS
     */
  // css: [
  //   'vuesax/dist/vuesax.css'
  // ],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/bootstrap',
    '@/plugins/derective'
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
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'FormCheckboxPlugin',
      'ToastPlugin',
      'ModalPlugin'
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin']
  },
  /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
  axios: {
  },
  /*
     ** Build configuration
     */
  build: {
    /*
        ** You can extend webpack config here
        */
    postcss: {
      // plugins: {
      //   'postcss-css-variables': {}
      // },
      preset: {
        // Change the postcss-preset-env settings
        browsers: '> .5% or last 2 versions'
      }

    },
    extend (config, ctx) {

    }

  },
  router: {
    base: '/web/test/vue/dist'
  },
  hooks: hooks(this)
}
