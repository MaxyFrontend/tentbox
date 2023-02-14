<template>
  <AppHeader />
  <main class="main">
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
