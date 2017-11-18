const webpack = require('webpack')

module.exports = {
  // css: [
  //   'assets/main.css',
  //   // 'assets/main.scss',
  //   // 'node_modules/foundation-sites/dist/css/foundation.min.css',
  //   'assets/app.css'
  // ]
  css: [
    // { src: 'foundation-sites/scss/foundation.scss', lang: 'scss' },
    // { src: '@/assets/scss/main.scss', lang: 'scss' },
    // { src: '@/assets/css/main.css', lang: 'css' },
    { src: '@/assets/scss/_variables.scss', lang: 'scss' },
    'bootstrap/dist/css/bootstrap.css',
    { src: '@/assets/css/app.css', lang: 'css' }
    // { src: '@/assets/css/app.css', lang: 'css' }
    // 'assets/css/bootstrap_dark.css'
  ],
  loaders: [
    {
      test: /\.md$/,
      loaders: ['html-loader', 'markdown-with-front-matter-loader']
    }
  ],
  plugins: [
    '~plugins/bootstrap.js',
    {src: '~plugins/slider.js', ssr: false},
    { src: '~plugins/ga.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/font-awesome'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sancar Lab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/ramsey.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fjalla+One' }
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css', integrity: 'sha256-itWEYdFWzZPBG78bJOOiQIn06QCgN/F0wMDcC4nOhxY=', crossorigin: 'anonymous' }
    ],
    script: [
    //   { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.min.js' },
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/what-input/5.0.1/what-input.min.js' },
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js' }
      // { src: 'https://embedr.flickr.com/assets/client-code.js', charset:'utf-8' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const babelLoader = config.module.rules.find((rule) => rule.loader === 'babel-loader')
      babelLoader.exclude = /node_modules\/(?!(vue2-google-maps))/

    },
    // vendor: ['axios', 'jquery', 'bootstrap', 'vue-lightbox', 'vue-tweet-embed', 'markdown-it', 'vue-content-loader'],
    vendor: ['axios', 'jquery', 'bootstrap', 'vue-lightbox', 'vue-tweet-embed', 'vue-slider-component', 'mini-toastr', 'vue-notifications', 'vue-no-ssr', 'markdown-it'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
