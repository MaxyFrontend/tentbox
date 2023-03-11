<template>
    <section class="section promo-bags">
        <div class="container promo-bags__container">
            <h2 class="section--title promo-bags__title">Четыре типа промо-сумок</h2>
            <p class="section--sub-title promo-bags__sub-title">Из четырех видов ткани</p>
            <swiper :class="['promo-bags__wrapper', { 'slider-touchmove': sliderTouchStart }]"
                :modules="modules"
                @after-init="SwiperMouseControl"
                :speed="450"
                :slidesPerView="1"
                :mousewheel="true"
                :allow-touch-move="true"
                :space-between="40"
                :pagination="{
                    el: '.promo-bags__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1350: {
                        spaceBetween: 0,
                        slidesPerView: 4,
                        allowTouchMove: false,
                        mousewheel: false
                    },
                    1050: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    750: {
                        slidesPerView: 2,
                    }
                }"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()"
                >
                <swiper-slide class="promo-bags__item">
                    <picture>
                        <source srcset="@/assets/img/promo-bags/canvas-bag.webp" type="image/webp">
                        <source srcset="@/assets/img/promo-bags/canvas-bag.png" type="image/png">
                        <img src="@/assets/img/promo-bags/canvas-bag.png" alt="canvas-bag" class="promo-bags__item_image">
                    </picture>
                    <h4 class="promo-bags__item_title card--title">
                        <strong>Холщовые —</strong> от 2 500 <span class="ruble">₽</span>/шт
                    </h4>
                    <button class="promo-bags__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="promo-bags__item">
                    <picture>
                        <source srcset="@/assets/img/promo-bags/polyester-bag.webp" type="image/webp">
                        <source srcset="@/assets/img/promo-bags/polyester-bag.png" type="image/png">
                        <img src="@/assets/img/promo-bags/polyester-bag.png" alt="polyester-bag" class="promo-bags__item_image">
                    </picture>
                    <h4 class="promo-bags__item_title card--title">
                        <strong>Полиэстеровые —</strong> от 2 000 <span class="ruble">₽</span>/шт
                    </h4>
                    <button class="promo-bags__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="promo-bags__item">
                    <picture>
                        <source srcset="@/assets/img/promo-bags/calico-bag.webp" type="image/webp">
                        <source srcset="@/assets/img/promo-bags/calico-bag.png" type="image/png">
                        <img src="@/assets/img/promo-bags/calico-bag.png" alt="calico-bag" class="promo-bags__item_image">
                    </picture>
                    <h4 class="promo-bags__item_title card--title">
                        <strong>Бязевые —</strong> от 2 000 <span class="ruble">₽</span>/шт
                    </h4>
                    <button class="promo-bags__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <swiper-slide class="promo-bags__item">
                    <picture>
                        <source srcset="@/assets/img/promo-bags/jeans-bag.webp" type="image/webp">
                        <source srcset="@/assets/img/promo-bags/jeans-bag.png" type="image/png">
                        <img src="@/assets/img/promo-bags/jeans-bag.png" alt="jeans-bag" class="promo-bags__item_image">
                    </picture>
                    <h4 class="promo-bags__item_title card--title">
                        <strong>Джинсовые —</strong> от 4 500 <span class="ruble">₽</span>/шт
                    </h4>
                    <button class="promo-bags__item_btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
                </swiper-slide>
                <div class="swiper-pagination promo-bags__slider-pagination"></div>
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
.promo-bags__wrapper {
    margin-top: 100px;
    &.slider-touchmove .swiper-slide {
        touch-action: pan-x !important;
    }
}
.promo-bags__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
}
.promo-bags__item_image {
    margin-bottom: 10px;
}
.promo-bags__item_title {
    font-weight: 400;
    margin-top: auto;
    margin-bottom: 24px;
    & strong {
        font-weight: 500;
    }
    &::before {
        display: none;
    }
}
.promo-bags__slider-pagination {
    margin-top: 35px;
}
@media (max-width:1350px) {
    .promo-bags__item_title {
        font-size: 18px;
        line-height: 22px;
    }
}
</style>    