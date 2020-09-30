const { NODE_ENV = "production" } = process.env;

const isDev = NODE_ENV === "development";

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
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
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    postcss:
    {
      // disable postcss plugins in development
      plugins: isDev
        ? {} : {
          "@fullhuman/postcss-purgecss": {
            content: [
              'components/**/*.vue',
              'layouts/**/*.vue',
              'pages/**/*.vue',
              'plugins/**/*.js',
              'node_modules/vuetify/src/**/*.ts',
            ],
            styleExtensions: ['.css'],
            safelist: {
              standard: [
                "body",
                "html",
                "nuxt-progress",
                /col-*/ // enable if using v-col for layout
              ],
              deep: [
                /page-enter/,
                /page-leave/,
                /dialog-transition/,
                /tab-transition/,
                /tab-reversetransition/
              ]
            }

          },
          "css-byebye": {
            rulesToRemove: [
              /.*\.v-application--is-rtl.*/,
              /.*\.theme--dark.*/
            ]
          }
        }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
