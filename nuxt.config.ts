import viteImagemin from 'vite-plugin-imagemin'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
      '@vueuse/motion/nuxt'
  ],
    build: {
        transpile: ['swiper']
      },
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/scss/_variables.scss" as *;'
            }
          }
        },
        plugins: [
          viteImagemin({
            gifsicle: {
              optimizationLevel: 7,
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            mozjpeg: {
              quality: 80,
            },
            pngquant: {
              quality: [0.8, 0.9],
              speed: 4,
            },
            svgo: {
              plugins: [
                {
                  name: 'removeViewBox',
                },
                {
                  name: 'removeEmptyAttrs',
                  active: false,
                },
              ],
            },
          }),
        ]
      },
      nitro: {
        prerender: {
          routes: ['/tent-order/3x3', '/tent-order/3x4', '/tent-order/3x6', '/tent-order/4x4', '/tent-order/4x6', '/tent-order/4x8', '/tent-rent/3x3', '/tent-rent/4x4', '/tent-rent/4x8']
        }
      },
/*       experimental: {
        payloadExtraction:false
      } */
})
