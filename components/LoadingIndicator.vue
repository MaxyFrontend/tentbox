<template>
    <teleport to="body">
        <div :class="['loading-indocator', { 'loading': loading }]"></div>
    </teleport>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:mounted", () => {
    loading.value = false;
});
nuxtApp.hook("page:start", () => {
    loading.value = true;
});
nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
        loading.value = false;
    }, 400)
});
</script>

<style lang="scss">
.loading-indocator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 1;
    z-index: 10000;
    overflow: hidden;
    &::before {
        content:"";
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(to right, #ffffff 0%, #224E96 100%);
    }
    &.loading::before {
        animation: roll 1s infinite;
    }
}
@keyframes roll {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>