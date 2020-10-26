const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  telemetry: false,
  // mode: 'universal',
  // говорит Nuxt создать 2 бандла, один из которых использует ES6 Modules синтаксис поддерживаемый последними браузерами,
  // а второй Legacy транспилированный через Babel. В html будет по 2 тега на каждый js скрипт
  ...(!isDev && {
    modern: 'client'
  }),

  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icon-192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icon-192.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        href: '/icon-16x16.icon'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/icon-32x32.icon'
      }
    ],

    script: [{}]
  },
  rootDir: __dirname, // Явно прописываем что считать корнем проекта при использовании абсолютных путей импорта.

  // router: {
  //   // Отключаем дефолтный механизм Nuxt, который улучшает восприятие UI в некоторых случаях. Этот механизм подгружает страницу как только ссылка на неё попадает в область видимости окна браузера.
  //   prefetchLinks: false
  // },
  /*
   ** Customize the progress-bar color
   */
  // loading: 'components/main/pre-loader.vue',
  loading: {
    color: 'rgb(54, 131, 247)',
    height: '2px'
  },
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
    '@/plugins/papper',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    '@/plugins/mask',
    { src: '@/plugins/modernizr-plugin', mode: 'client' },
    { src: '@/plugins/google-analytics.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    // hostname: 'https://example.com',
    gzip: true,
    exclude: ['/admin', '/admin/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  axios: {
    // baseURL: process.env.BASE_URL || 'http://localhost:3000'
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:3000' || process.env.BASE_URL
    },
    '/api2/': {
      target: 'https://api.telegram.org'
    }
  },

  webfontloader: {
    events: false,
    google: {
      families: ['Montserrat:400,500,600:cyrillic&display=swap']
    },
    timeout: 5000
  },

  styleResources: {
    scss: ['@/assets/style/lib.scss']
  },
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false
    // etag: false,
    // static: {
    //  etag: false
    // }
  },

  // Build configuration
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: false,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    // Разбиваем на независимые чанки всё приложение
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    // Отключаем минификацию js для development.
    optimization: {
      minimize: !isDev
    },
    // В development inline styles, а в production в отдельные (для кэша)
    // ...(!isDev && {
    //   extractCSS: {
    //     ignoreOrder: true
    //   }
    // }),
    ...(!isDev && {
      extractCSS: true
    }),

    transpile: ['vue-lazy-hydration', 'intersection-observer', 'gsap'],

    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: [
              'advanced',
              {
                autoprefixer: false,
                cssDeclarationSorter: false,
                zindex: false,
                discardComments: {
                  removeAll: true
                }
              }
            ]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    },

    // перехват стандартных функций nuxt
    extend(config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '85-100',
          speed: 4,
          strip: true
        },
        jpegtran: {
          progressive: true
        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 75,
            progressive: true
          })
        ]
      })
      // Добавляем плагин для сжатия только в production
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev
                  ? '[path][name].[ext]'
                  : 'img/[contenthash:7].[ext]'
              }
            }
          ]
        }
      })
      //  Create the custom SVG rule
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader'
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader'
          },
          {
            loader: 'file-loader' // By default, always use file-loader
          }
        ]
      }

      config.module.rules.push(svgRule) // Actually add the rule
    }
  }
}
