<template>
    <section class="mobile-tents-sizes section" id="tent-sizes">
        <div class="container mobile-tents-sizes__container">
            <h2 class="mobile-tents-sizes__title section--title overflow--hidden">
                <span v-motion="{
                    initial: {
                        y: '100%',
                        display: 'block',
                    },
                    visibleOnce: {
                        y: 0,
                        transition: {
                            delay: 100,
                            duration: 600,
                        }
                    }
                }">
                Шесть типоразмеров
                </span>
            </h2>
            <p class="mobile-tents-sizes__sub-title section--sub-title">
                И множество опций
            </p>
            <swiper :class="['mobile-tents-sizes__wrapper', { 'slider-touchmove': sliderTouchStart }]"
                :modules="modules"
                @after-init="SwiperMouseControl"
                :speed="450"
                :slidesPerView="1"
                :mousewheel="true"
                :allow-touch-move="true"
                :space-between="40"
                :grid="{
                    rows: 1
                }"
                :pagination="{
                    el: '.mobile-tents-sizes__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        grid: {
                            rows: 2,
                        },
                        spaceBetween: 0,
                        slidesPerView: 3,
                        allowTouchMove: false
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 2,
                    }
                }"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()">
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-four.png" alt="four-x-four" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        <strong class="mobile-tents-sizes__item_title-value">3,0x3,0м</strong> <span class="mobile-tents-sizes__item_price">от 70 000 <span class="ruble">₽</span></span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order/3x3" class="mobile-tents-sizes__item_btn blue-border-btn current--btn-active">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-six.png" alt="four-x-six" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        <strong class="mobile-tents-sizes__item_title-value">3,0x4,5м</strong> <span class="mobile-tents-sizes__item_price">от 85 000 <span class="ruble">₽</span></span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order/3x4" class="mobile-tents-sizes__item_btn blue-border-btn current--btn-active">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-eight.png" alt="four-x-eight" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        <strong class="mobile-tents-sizes__item_title-value">3,0x6,0м</strong> <span class="mobile-tents-sizes__item_price">от 115 000 <span class="ruble">₽</span></span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order/3x6" class="mobile-tents-sizes__item_btn blue-border-btn current--btn-active">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-four.png" alt="four-x-four" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        <strong class="mobile-tents-sizes__item_title-value">4,0x4,0м</strong> <span class="mobile-tents-sizes__item_price">от 85 000 <span class="ruble">₽</span></span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order/4x4" class="mobile-tents-sizes__item_btn blue-border-btn current--btn-active">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-six.png" alt="four-x-six" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        <strong class="mobile-tents-sizes__item_title-value">4,0x6,0м</strong> <span class="mobile-tents-sizes__item_price">от 120 000 <span class="ruble">₽</span></span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order/4x6" class="mobile-tents-sizes__item_btn blue-border-btn current--btn-active">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-eight.png" alt="four-x-eight" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        <strong class="mobile-tents-sizes__item_title-value">4,0x8,0м</strong> <span class="mobile-tents-sizes__item_price">от 135 000 <span class="ruble">₽</span></span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order/4x8" class="mobile-tents-sizes__item_btn blue-border-btn current--btn-active">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <div class="mobile-tents-sizes__slider-pagination swiper-pagination"></div>
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
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
const modules = [Pagination, Grid, Mousewheel, A11y]
const sliderTouchStart = ref(false)
const TouchStartHandle = () => {
    sliderTouchStart.value = true
}
const touchMoveOppositeHandle = () => {
    sliderTouchStart.value = false
}
const requestFormPopupStore = useRequestFormPopupStore()
</script>

<style lang="scss">
.mobile-tents-sizes__wrapper {
    margin-top: 120px;
    &.slider-touchmove .mobile-tents-sizes__item {
        touch-action: pan-x !important;
    }
}
.mobile-tents-sizes__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
}
.mobile-tents-sizes__item_image-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 58px;
}
.mobile-tents-sizes__item_image {
    height: 16vw;
    max-height: 250px;
    object-fit: fill;
    object-position: center center;
    touch-action: pan-x !important;
}
.mobile-tents-sizes__item_title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: $dark-grey-color;
    margin-bottom: 24px;
    margin-top: auto;
}
.mobile-tents-sizes__item_title-value {
    position: relative;
    font-weight: 500;
    &::after {
        content: "—";
        margin: 0 5px;
        font-weight: 300;
    }
}
.mobile-tents-sizes__item_price {
    font-weight: 400;
}
.mobile-tents-sizes__item_btns-inner {
    display: flex;
    align-items: center;
    &.mouse-entered {
        & .blue-border-btn {
         border-color: transparent;
         color: $dark-grey-color;
        }
     }
}
.swiper-pagination.mobile-tents-sizes__slider-pagination {
    margin-top: 40px;
}
@media (max-width:1600px) {
    .mobile-tents-sizes__wrapper {
        margin-top: 100px;
    }
    .mobile-tents-sizes__item_title {
        font-size: 20px;
        line-height: 25px;
    }
}
@media (min-width:1200px) {
    .mobile-tents-sizes__wrapper {
        margin-top: 80px;
    }
    .swiper-grid-column>.swiper-wrapper {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        gap: 100px 30px;
    }
    .mobile-tents-sizes__item {
        flex: 1 1 30%;
    }
    .swiper-pagination.mobile-tents-sizes__slider-pagination {
        display: none;
    }
}
@media (max-width:1200px) {
    .mobile-tents-sizes__wrapper {
        padding-bottom: 40px;
    }
    .mobile-tents-sizes__item {
        max-width: 100%;
    }
    .mobile-tents-sizes__item_image {
        height: 25vw;
    }
}
@media (max-width:900px) {

}
@media (max-width:700px) {
    .mobile-tents-sizes__wrapper {
        margin-top: 50px;
    }
    .mobile-tents-sizes__item_image {
        height: 50vw;
    }
}
@media (max-width:370px) {
    .mobile-tents-sizes__item_btn {
        font-size: 12px;
        line-height: 16px;
    }
}
</style>