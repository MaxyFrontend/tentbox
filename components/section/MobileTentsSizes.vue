<template>
    <section class="mobile-tents-sizes section">
        <div class="container mobile-tents-sizes__container">
            <h2 class="mobile-tents-sizes__title section--title"
                v-motion="{
                    initial: {
                        y: 100,
                        opacity: 0
                    },
                    visibleOnce: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 200
                        }
                    }
                }">
                Шесть типоразмеров
            </h2>
            <p class="mobile-tents-sizes__sub-title section--sub-title"
                v-motion="{
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    visibleOnce: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 400
                        }
                    }
                }">И множество опций
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
                @touchMoveOpposite="touchMoveOppositeHandle()"
                v-motion="{
                    initial: {
                        opacity: 0
                    },
                    visibleOnce: {
                        opacity: 1,
                        transition: {
                            delay: 200
                        }
                    }
                }">
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-four.png" alt="four-x-four" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        3,0х3,0м — <span class="mobile-tents-sizes__item_price">от 70 000 ₽</span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order" class="mobile-tents-sizes__item_btn blue-border-btn">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-six.png" alt="four-x-six" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        3,0х4,5м — <span class="mobile-tents-sizes__item_price">от 85 000 ₽</span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order" class="mobile-tents-sizes__item_btn blue-border-btn">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-eight.png" alt="four-x-eight" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        3,0х6,0м — <span class="mobile-tents-sizes__item_price">от 115 000 ₽</span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order" class="mobile-tents-sizes__item_btn blue-border-btn">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-four.png" alt="four-x-four" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        4,0х4,0м — <span class="mobile-tents-sizes__item_price">от 85 000 ₽</span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order" class="mobile-tents-sizes__item_btn blue-border-btn">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-six.png" alt="four-x-six" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        4,0х6,0м — <span class="mobile-tents-sizes__item_price">от 120 000 ₽</span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order" class="mobile-tents-sizes__item_btn blue-border-btn">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn">Быстрый заказ</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="mobile-tents-sizes__item">
                    <div class="mobile-tents-sizes__item_image-inner">
                        <img src="@/assets/img/tents-sizes/four-x-eight.png" alt="four-x-eight" class="mobile-tents-sizes__item_image">
                    </div>
                    <h4 class="mobile-tents-sizes__item_title">
                        4,0х8,0м — <span class="mobile-tents-sizes__item_price">от 135 000 ₽</span>
                    </h4>
                    <div class="mobile-tents-sizes__item_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <router-link to="/tent-order" class="mobile-tents-sizes__item_btn blue-border-btn">Подробный расчет</router-link>
                        <button type="button" class="mobile-tents-sizes__item_btn no-border-btn">Быстрый заказ</button>
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
const modules = [Pagination, Grid, Mousewheel, A11y]
const sliderTouchStart = ref(false)
const TouchStartHandle = () => {
    sliderTouchStart.value = true
}
const touchMoveOppositeHandle = () => {
    sliderTouchStart.value = false
}
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
    padding: 0px 40px;
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
.mobile-tents-sizes__item_price {}
.mobile-tents-sizes__item_btns-inner {
    display: flex;
    align-items: center;
}
.swiper-pagination.mobile-tents-sizes__slider-pagination {
    margin-top: 40px;
}
@media (max-width:1600px) {
    .mobile-tents-sizes__wrapper {
        margin-top: 100px;
    }
    .mobile-tents-sizes__item_image-inner {
        padding: 0 30px;
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
    .mobile-tents-sizes__item_image-inner {
        padding: 0 7%;
    }
    .mobile-tents-sizes__item_image {
        height: 25vw;
    }
}
@media (max-width:900px) {
    .mobile-tents-sizes__item_image-inner {
        padding: 0 5%;
    }
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