<template>
  <AppHeader />
  <main class="main">
    <LoadingIndicator />
    <NuxtPage />
    <SectionMakeOrder></SectionMakeOrder>
  </main>
  <RequestFormPopup />
  <MobileMenu />
  <AppFooter />
</template>
<script setup>
import '~/assets/scss/main.scss'
</script>
