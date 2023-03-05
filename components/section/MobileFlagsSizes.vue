<template>
    <section class="section mobile-flags-sizes">
        <div class="container mobile-flags-sizes__container">
            <h2 class="section--title mobile-flags-sizes__title">
                Четыре форм-фактора
            </h2>
            <p class="section--sub-title mobile-flags-sizes__sub-title">
                И четыре вида оснований
            </p>
            <swiper :class="['mobile-flags-sizes__wrapper mobile-flags-sizes__main', { 'slider-touchmove': sliderTouchStart }]"
                :modules="modules"
                @after-init="SwiperMouseControl"
                :speed="450"
                :slidesPerView="1"
                :mousewheel="true"
                :allow-touch-move="true"
                :space-between="40"
                :pagination="{
                    el: '.mobile-flags-sizes__main-slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        spaceBetween: 0,
                        slidesPerView: 4,
                        allowTouchMove: false,
                        mousewheel: false
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 2,
                    }
                }"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()">
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/wings.png" alt="wings" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Крыло —</strong> от 8 500 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/feather.png" alt="feather" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Перо —</strong> от 9 000 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/breeze.png" alt="breeze" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Бриз —</strong> от 9 500 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/blob.png" alt="blob" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Капля —</strong> от 7 500 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <div class="swiper-pagination mobile-flags-sizes__slider-pagination mobile-flags-sizes__main-slider-pagination"></div>
            </swiper>
            <swiper :class="['mobile-flags-sizes__wrapper mobile-flags-sizes__additional', { 'slider-touchmove': sliderTouchStart }]"
                :modules="modules"
                @after-init="SwiperMouseControl"
                :speed="450"
                :slidesPerView="1"
                :mousewheel="true"
                :allow-touch-move="true"
                :space-between="40"
                :pagination="{
                    el: '.mobile-flags-sizes__additional-slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        spaceBetween: 0,
                        slidesPerView: 4,
                        allowTouchMove: false,
                        mousewheel: false
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 2,
                    }
                }"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()">
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/plate.png" alt="plate" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Пластина —</strong> от 4 500 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/cross.png" alt="cross" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Крестовина —</strong> от 5 500 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/tank.png" alt="tank" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Бак —</strong> от 4 000 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="mobile-flags-sizes__item">
                    <img src="@/assets/img/flags-sizes/bayonet.png" alt="bayonet" class="mobile-flags-sizes__item_image">
                    <h3 class="mobile-flags-sizes__item_title card--title"><strong>Штык —</strong> от 4 500 <span class="ruble">₽</span></h3>
                    <button class="mobile-flags-sizes__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <div class="swiper-pagination mobile-flags-sizes__slider-pagination mobile-flags-sizes__additional-slider-pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { Pagination, Mousewheel, A11y } from 'swiper'
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
const modules = [Pagination, Mousewheel, A11y]
const requestFormPopupStore = useRequestFormPopupStore()
const sliderTouchStart = ref(false)
const TouchStartHandle = () => {
    sliderTouchStart.value = true
}
const touchMoveOppositeHandle = () => {
    sliderTouchStart.value = false
}
</script>

<style lang="scss">
.mobile-flags-sizes__wrapper {
    margin-top: 120px;
    &.slider-touchmove .swiper-slide {
        touch-action: pan-x !important;
    }
}
.mobile-flags-sizes__additional {
    margin-top: 100px;
}
.mobile-flags-sizes__slider-pagination {
    margin-top: 35px;
}
.mobile-flags-sizes__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
}
.mobile-flags-sizes__item_image {
    margin-bottom: 15px;
}
.mobile-flags-sizes__item_title {
    font-weight: 400;
    margin-top: auto;
    margin-bottom: 24px;
    &::before {
        display: none;
    }
    & strong {
        font-weight: 500;
    }
}
.mobile-flags-sizes__item_btn {}
.blue-border-btn {}
@media (min-width:1200px) {
    .mobile-flags-sizes__wrapper {
        & .swiper-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 100px 60px;
        }
    }
}
@media (min-width:1350px) {
    .mobile-flags-sizes__wrapper {
        & .swiper-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }
}
@media (min-width:1600px) {
    .mobile-flags-sizes__wrapper {
        & .swiper-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }
}
@media (max-width:1200px) {
    .mobile-flags-sizes__main {
        margin-top: 35px;
    }
    .mobile-flags-sizes__additional {
        margin-top: 65px;
    }
    .mobile-flags-sizes__item_image {
        max-height: 380px;
        max-width: 60%;
    }
}
@media (max-width:700px) {
    .mobile-flags-sizes__item_image {
        max-width: 50%;
    }
}
@media (max-width:370px) {
    .mobile-flags-sizes__item_image {
        max-height: 320px;
    }
}
</style>