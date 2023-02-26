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
          routes: ['/tent-order/','/tent-order/3х3', '/tentrder/3х4', '/tentrder/3х6', '/tentrder/4х4', '/tentrder/4х6', '/tentrder/4х8'],
          ignore:['/tent-order/3%D1%853','/tent-order/3%D1%854','/tent-order/3%D1%856','/tent-order/4%D1%854','/tent-order/4%D1%856','/tent-order/4%D1%858', '/tent-order/mobile-flags', '/tent-order/tent-rent']
        }
      },
})
