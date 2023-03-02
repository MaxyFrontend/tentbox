<template>
    <nav class="nav primary__nav" @mousemove="changeBtnsStyle($event)">
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
                850: {
                    mousewheel: false,
                    slidesOffsetAfter: 0
                }
            }"
            >
            <swiper-slide class="primary__nav_list-item btn--hover current--btn-active">
                <nuxt-link to="/">Главная</nuxt-link>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item btn--hover">
                <a href="#mobile-tents">Шатры</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item btn--hover">
                <a href="#mobile-flags">Флаги</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item btn--hover">
                <a href="#pagodas">Пагоды</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item btn--hover">
                <a href="#mobile-umbrellas">Зонты</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item btn--hover">
                <a href="#promo-accessories">Аксессуары</a>
            </swiper-slide>
            <swiper-slide class="primary__nav_list-item primary__nav_list-item_highlited btn--hover">
                <nuxt-link to="/new">Новинки</nuxt-link>
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
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
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
    &.mouse-entered {
        & .current--btn-active a {
            background: transparent;
        }
        & .primary__nav_list-item {
            &:hover {
                //background: $blue-color;
            }
        }
    }
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
        border: 1px solid transparent;
        transition: 0.2s ease;
    }
    & .router-link-active,
    &:hover a{
        background: #F2F2F2;
        border-color: transparent;
    }
}
.primary__nav_list-item_highlited {
    & a {
        border: 1px dashed #BDBDBD;
    }
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
@media (max-width:1600px) {
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