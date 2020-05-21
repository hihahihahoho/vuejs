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
    '@/plugins/derective',
    '@/plugins/lazysizes'
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
    'bootstrap-vue/nuxt',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 70
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 80
    }
  },
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
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }

  },
  router: {
    base: '/web/test/vue/dist'
  },
  hooks: hooks(this)
}
