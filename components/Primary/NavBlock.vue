<template>
    <nav class="nav primary__nav">
        <swiper @swiper="getRef" class="primary__nav_list"
            :modules="modules"
            @after-init="SwiperMouseControl"
            :speed="400"
            :slides-per-view="'auto'"
            :space-between="20"
            :mousewheel="true"
            :slides-offset-after="40"
            :long-swipes="true"
            :pagination="{
                el: '.primary__nav_slider-pagination',
                type: 'progressbar',
            }"
            :breakpoints="{
                850:{
                    mousewheel:false,
                    slidesOffsetAfter:0
                }
            }">
            <swiper-slide class="primary__nav_list-item">
                <nuxt-link to="/">Главная</nuxt-link>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item">
                <nuxt-link to="mobile-tents">Шатры</nuxt-link>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item">
                <a href="#mobile-flags">Флаги</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item">
                <a href="#pagodas">Пагоды</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item">
                <a href="#mobile-ambrellas">Зонты</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item">
                <a href="#promo-accessories">Аксессуары</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item primary__nav_list-item_highlited">
                <nuxt-link to="/">Новинки</nuxt-link>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination primary__nav_slider-pagination"></div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, A11y, } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
const modules = [Pagination, Mousewheel, A11y,]
const Slider = ref(null)
const getRef = (swiperInstance) => {
    Slider.value = swiperInstance
}
</script>
<style lang="scss">
.primary__nav {
    position: relative;
    margin-top: 76px;
    touch-action: pan-x !important;
}
.primary__nav_list-item {
    width: auto;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #232323;
    background: transparent;
    border-radius: 2px;
    transition: $base-transition;
    touch-action: pan-x !important;
    & a {
        width: 100%;
        display: block;
        text-align: center;
        padding: 8px 18px;
    }
    & .current-link,
    &:hover {
        background: #F2F2F2;
    }
}
.primary__nav_list-item_highlited {
    border: 1px dashed #BDBDBD;
}
.primary__nav_slider-pagination {
    display: none;
    margin-top: 15px;
}
@media (max-width:1900px) {
    .primary__nav {
        margin-top: 50px;
    }
}
@media (max-width:1500px) {
    .primary__nav_list-item {
        font-size: 16px;
        line-height: 20px;
    }
    .primary__nav {
        margin-top: 40px;
    }
}
@media (max-width:1200px) {
    .primary__nav {
        max-width: 970px;
        margin-top: 37px;
        padding-bottom: 20px;
    }
}
@media (max-width:850px) {
    .swiper-pagination.primary__nav_slider-pagination {
        display: block;
    }
}
@media (max-width:700px) {
    .primary__nav_list-item a {
        padding: 8px 16px;
    }
}
@media (max-width:370px) {
    .primary__nav_list-item {
        font-size: 14px;
        line-height: 18px;
        & a {
            padding: 8px 14px;
        }
    }
}
</style>