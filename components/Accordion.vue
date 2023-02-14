<template>
    <ul class="accordion">
        <slot></slot>
    </ul>
</template>

<script setup>
import { reactive } from 'vue'
const Accordion = reactive({
    count: 0,
    active: null
})
provide('Accordion', Accordion)
</script>

<style lang="scss">

</style>