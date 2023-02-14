<template>
  <svg :class="[Class, { 'plus--animate': Animate }]" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" width="2" height="18" :fill="Color" />
    <rect y="10" width="2" height="18" transform="rotate(-90 0 10)" :fill="Color" />
  </svg>
</template>

<script setup>
defineProps({
  Color: {
    type: String,
    required: false,
    default: '$grey-color'
  },
  Class: {
    type: String,
    required: false
  },
  Animate: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss">

</style>