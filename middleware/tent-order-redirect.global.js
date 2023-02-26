export default defineNuxtRouteMiddleware((to, from) => {
    if(to.name == 'tent-order') {
        return navigateTo('/tent-order/3x3/')
    }
    if(to.name == 'tent-rent') {
        return navigateTo('/tent-rent/3x3/')
    }
  })