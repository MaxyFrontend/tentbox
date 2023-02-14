<template>
    <section class="our-clients">
        <div class="container our-clients__container">
            <h2 class="our-clients__title section--title"> {{ sectionTitle }}</h2>
            <p class="our-clients__sub-title section--sub-title"> {{ sectionSubTitle }}</p>
            <swiper :class="['our-clients__wrapper', { 'slider-touchmove': sliderTouchStart }]"
                @after-init="SwiperMouseControl"
                :modules="modules"
                :speed="450"
                :slides-per-view="1"
                :space-between="30"
                :mousewheel="true"
                :pagination="{
                    el: '.our-clients__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200:{
                      slidesPerView:3  
                    },
                    1000:{
                      slidesPerView:2.5  
                    },
                    700:{
                        slidesPerView:2  
                    }
                }"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()"
                >
                <swiper-slide class="our-clients__item">
                    <div class="our-clients__item_image-inner">
                        <img src="@/assets/img/clients/rosa.jpg" alt="rosa" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title">Промо-акции и мероприятия</h4>
                    <p class="our-clients__item_text">
                        Промо-акция марафона. Сочи.
                    </p>
                </swiper-slide>
                <swiper-slide class="our-clients__item">
                    <div class="our-clients__item_image-inner">
                        <img src="@/assets/img/clients/tunning-factory.jpg" alt="tunning-factory" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title">Автоспорт, дрифт, мотоспорт</h4>
                    <p class="our-clients__item_text">
                        Чемпионат RDS. МО.
                    </p>
                </swiper-slide>
                <swiper-slide class="our-clients__item">
                    <div class="our-clients__item_image-inner">
                        <img src="@/assets/img/clients/sport.jpg" alt="sport" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title">Спортивные мероприятия, марафоны</h4>
                    <p class="our-clients__item_text">
                        Московский марафон. Москва.
                    </p>
                </swiper-slide>
                <swiper-slide class="our-clients__item">
                    <div class="our-clients__item_image-inner">
                        <img src="@/assets/img/clients/rosa.jpg" alt="rosa" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title">Промо-акции и мероприятия</h4>
                    <p class="our-clients__item_text">
                        Промо-акция марафона. Сочи.
                    </p>
                </swiper-slide>
                <swiper-slide class="our-clients__item">
                    <div class="our-clients__item_image-inner">
                        <img src="@/assets/img/clients/tunning-factory.jpg" alt="tunning-factory" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title">Автоспорт, дрифт, мотоспорт</h4>
                    <p class="our-clients__item_text">
                        Чемпионат RDS. МО.
                    </p>
                </swiper-slide>
                <swiper-slide class="our-clients__item">
                    <div class="our-clients__item_image-inner">
                        <img src="@/assets/img/clients/sport.jpg" alt="sport" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title">Спортивные мероприятия, марафоны</h4>
                    <p class="our-clients__item_text">
                        Московский марафон. Москва.
                    </p>
                </swiper-slide>
                <div class="swiper-pagination our-clients__slider-pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/a11y';
import { Pagination, Grid, Mousewheel, A11y } from 'swiper'
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
const modules = [Pagination, Grid, Mousewheel, A11y]
const sliderTouchStart = ref(false)
const TouchStartHandle = () => {
    sliderTouchStart.value = true
}
const touchMoveOppositeHandle = (event) => {
    sliderTouchStart.value = false
}
defineProps({
    sectionTitle: {
        type: String,
        required: false,
        default: 'Для различных мероприятий'
    },
    sectionSubTitle: {
        type: String,
        required: false,
        default: 'И в любых городах страны'
    },
})
</script>

<style lang="scss">
.our-clients__wrapper {
    margin-top: 40px;
    &.slider-touchmove .our-clients__item {
        touch-action: pan-x !important;
    }
}
.our-clients__item {}
.our-clients__item_image-inner {
    height: 18vw;
    max-height: 350px;
    margin-bottom: 20px;
    overflow: hidden;
}
.our-clients__item_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.our-clients__item_title {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.005em;
    color: $dark-grey-color;
    margin-bottom: 7px;
}
.our-clients__item_text {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: $grey-color;
}
.swiper-pagination.our-clients__slider-pagination {
    margin-top: 60px;
}
@media (max-width:1300px) {
    .our-clients__item_image-inner {
        height: 20vw;
    }
}
@media (max-width:1000px) {
    .our-clients__item_image-inner {
        height: 30vw;
    }
}
@media (max-width:700px) {
    .our-clients__item_image-inner {
        height: 90vw;
        max-height: 330px;
    }
    .our-clients__item_text {
        font-size: 16px;
        line-height: 20px;
    }
}
@media (max-width:370px) {
    .our-clients__item_title {
        font-size: 18px;
        line-height: 23px;
    }
    .our-clients__item_text {
        font-size: 14px;
        line-height: 18px;
    }
}
</style>