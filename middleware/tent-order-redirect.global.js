export default defineNuxtRouteMiddleware((to, from) => {
    if(to.name == 'tent-order') {
        return navigateTo('/tent-order/3х3')
    }
    else if (to.name == 'tent-rent') {
        return navigateTo('/tent-rent/3x3')
    }
  })