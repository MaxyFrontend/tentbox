// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
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
})
