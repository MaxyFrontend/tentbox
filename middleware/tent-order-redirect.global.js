export default defineNuxtRouteMiddleware((to, from) => {
    if(to.name == 'tent-order') {
        return navigateTo('/tent-order/3х3')
    }
  })