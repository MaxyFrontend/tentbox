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
        }
      },
      nitro: {
        prerender: {
          routes: ['/tent-order/3x3', '/tent-order/3x4', '/tent-order/3x6', '/tent-order/4x4', '/tent-order/4x6', '/tent-order/4x8', '/tent-rent/3x3', '/tent-rent/4x4', '/tent-rent/4x8'],
          ignore:['/tent-order/mobile-flags', '/tent-order/tent-rent', '/tent-rent/mobile-flags', '/tent-rent/tent-rent']
        }
      },
/*       experimental: {
        payloadExtraction:false
      } */
})
