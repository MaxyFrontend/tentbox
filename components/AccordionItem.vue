<template>
    <li class="accordion__item">
        <div
            class="accordion__trigger accordeon__header"
            :class="{ 'accordion__trigger_active': visible }"
            @click="open">
            <slot name="accordion-trigger"></slot>
        </div>

        <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
            <div class="accordion__content" v-show="visible">
                <div class="accordion__content-wrapper">
                    <slot name="accordion-content"></slot>
                </div>
            </div>
        </transition>
    </li>
</template>

<script setup>
import { ref } from 'vue'
const Accordion = inject('Accordion')
const index = ref(null)
const visible = ref(computed(() => index.value === Accordion.active))
const open = () => {
    if (visible.value) {
        Accordion.active = null;
    } else {
        Accordion.active = index.value;
    }
}
const start = (el) => {
    el.style.height = el.scrollHeight + "px";
}
const end = (el) => {
    el.style.height = "";
}
index.value = Accordion.count++;
</script>

<style lang="scss">
.accordion__item {
    cursor: pointer;
    margin-bottom: 33px;
    position: relative;
    transition: 0.3s ease;
}
.accordeon__header {
    display: flex;
    align-items: center;
}
.accordion__trigger {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    transition: 0.4s ease;
    &.accordion__trigger_active {
        margin-bottom: 30px;
    }
}
.accordion__content {
    overflow: hidden;
    &.accordion-enter-active,
    &.accordion-leave-active {
        opacity: 1;
        transition: height, opacity, 0.4s ease;
    }
    &.accordion-enter-from,
    &.accordion-leave-to {
        opacity: 0;
        height: 0 !important;
        transition: height, opacity, 0.4s ease;
    }
}
.accordion-enter-active,
.accordion-leave-active {
    will-change: height, opacity;
    overflow: hidden;
    transition: 0.3s ease;
}
</style>