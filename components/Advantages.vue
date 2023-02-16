<template>
    <swiper class="advantages"
        :modules="modules"
        @after-init="SwiperMouseControl"
        :mousewheel="true"
        :slides-per-view="'auto'"
        :pagination="{
            el: '.advantages__slider-pagination',
            type: 'progressbar',
        }">
        <swiper-slide class="advantages__item" v-for="(advantage, idx) in advantages" :key="idx" v-if="advantages.length > 0">
            <strong class="advantages__item_name">{{ advantage.key }}</strong>
            <p class="advantages__item_value">
                {{ advantage.value }}
            </p>
        </swiper-slide>
        <div class="swiper-pagination advantages__slider-pagination"></div>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/a11y';
import { Pagination, Grid, Mousewheel, A11y } from 'swiper'
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
const modules = [Pagination, Grid, Mousewheel, A11y]
defineProps({
    advantages: {
        type: Array,
        required: false,
        default: []
    }
})
</script>

<style lang="scss">
.advantages {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 70px;
}
.advantages__item {
    width: 100%;
    max-width: 130px;
    &:last-child {
        max-width: 150px;
    }
    margin-right: 90px;
    touch-action: pan-x !important;
    &:last-child {
        margin-right: 0;
    }
}
.advantages__item_name {
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
    color: $dark-grey-color;
}
.advantages__item_value {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: $grey-color;
}
.swiper-pagination.advantages__slider-pagination {
    margin-top: 30px;
    & .swiper-pagination-progressbar-fill {
        background: $grey-color;
    }
}
@media (max-width:1900px) {
    .advantages__item {
        margin-right: 50px;
    }
}
@media (max-width:1600px) {
    .advantages__item {
        margin-right: 40px;
    }
    .advantages__item_name {
        font-size: 30px;
        line-height: 40px;
    }
}
@media (max-width:700px) {
    .advantages__item {
        width: auto;
    }
    .advantages__item_name {
        font-size: 26px;
    }
}
@media (max-width:370px) {
    .advantages__item {
        max-width: 130px;
        margin-right: 20px;
    }
    .advantages__item_name {
        font-size: 22px;
    }
    .advantages__item_value {
        font-size: 14px;
    }
}
</style>