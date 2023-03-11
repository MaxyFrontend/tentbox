<template>
    <section class="section some-new" id="some-new">
        <div class="container some-new__container">
            <h2 class="section--title some-new__title overflow--hidden">
                <span v-motion="{
                    initial: {
                        y: '100%',
                        opacity: 0,
                        display: 'block',
                    },
                    visibleOnce: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 100,
                            duration: 600,
                        }
                    }
                }">
                    {{ sectionTitle }}
                </span>
            </h2>
            <p class="section--sub-title some-new__sub-title">
                {{ sectionSubTitle }}
            </p>
            <swiper :class="['some-new__wrapper', { 'slider-touchmove': sliderTouchStart }]"
                :modules="modules"
                @swiper="getSwiperInstance"
                @after-init="SwiperMouseControl"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()"
                :speed="450"
                :slides-per-view="1"
                :space-between="30"
                :allow-touch-move="true"
                :mousewheel="true"
                :pagination="{
                    el: '.some-new__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        slidesPerView: 'auto'
                    },
                    1000: {
                        slidesPerView: 1.6
                    },
                    700: {
                        slidesPerView: 1.3
                    }
                }">
                <swiper-slide class="some-new__card some-new__cleaning-card">
                    <div class="some-new__card_image-inner card--image-inner" @click="requestFormPopupStore.open()">
                        <img src="@/assets/img/tents/tent-1-full.png" alt="tent-white" class="some-new__card_image card--image card--image-full">
                        <client-only>
                            <IconPlus Color="$grey-color" Class="some-new__card_image-inner_icon card--icon" :Animate="true" />
                        </client-only>
                        <div class="some-new__card_image-inner_caption">ТВОШ</div>
                    </div>
                    <h4 class="some-new__card_title card--title slider--card-title" @click="requestFormPopupStore.open()">Чистка тентов</h4>
                    <p class="some-new__card_sub-title card--sub-title">
                        TentWashing или ТВОШ - наше новое направление по чистке крыш и стен из полиэстера. Сделаем всё сами в пять шагов:
                    </p>
                    <ul class="some-new__card_steps-list">
                        <li class="some-new__card_step">Заберем</li>
                        <li class="some-new__card_step">Очистим</li>
                        <li class="some-new__card_step">Просушим</li>
                        <li class="some-new__card_step">Сложим</li>
                        <li class="some-new__card_step">Вернем</li>
                    </ul>
                    <div class="some-new__card_btns-inner">
                        <button class="blue-border-btn some-new__card_btn" @click="requestFormPopupStore.open()">Заказать чистку</button>
                    </div>
                </swiper-slide>
                <swiper-slide class="some-new__card some-new__light-card">
                    <div class="some-new__card_image-inner card--image-inner" @click="requestFormPopupStore.open()">
                        <img src="@/assets/img/tents/tent-black-light.png" alt="tent-white" class="some-new__card_image card--image">
                        <client-only>
                            <IconArrowRight Color="#fff" Class="some-new__card_image-inner_icon card--icon" :Animate="true" />
                        </client-only>
                        <div class="some-new__card_image-inner_caption">СВЕТ</div>
                    </div>
                    <h4 class="some-new__card_title card--title slider--card-title" @click="requestFormPopupStore.open()">Модульное освещение</h4>
                    <p class="some-new__card_sub-title card--sub-title">
                        Легкие светодиодные модули, чтоб работать даже вечером.<br>
                        Для всех типоразмеров шатров
                    </p>
                    <div class="some-new__card_btns-inner" @mousemove="changeBtnsStyle($event)">
                        <button type="button" class="blue-border-btn some-new__card_btn btn--hover current--btn-active" @click="addOption()">Добавить в заказ</button>
                        <button type="button" class="some-new__card_btn no-border-btn btn--hover" @click="requestFormPopupStore.open()">Заказать отдельно</button>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination some-new__slider-pagination tents-slider--progressbar"></div>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, A11y } from 'swiper'
import { useTentOrderSizesStore } from '@/store/TentOrderSizesStore';
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
const requestFormPopupStore = useRequestFormPopupStore()
const modules = [Pagination, Mousewheel, A11y]
const getSwiperInstance = (swiper) => {
    let count = 1;
    for (let slide of swiper.slidesEl.children) {
        let slideNum = document.createElement('span')
        slideNum.classList.add('slider__card_num')
        slideNum.classList.add('some-new__card_num')
        slideNum.textContent = `${count}/${swiper.slidesEl.children.length}`
        slide.querySelector('.card--image-inner').appendChild(slideNum)
        count++
    }
}
const sliderTouchStart = ref(false)
const TouchStartHandle = () => {
    sliderTouchStart.value = true
}
const touchMoveOppositeHandle = () => {
    sliderTouchStart.value = false
}
defineProps({
    sectionTitle: {
        type: String,
        required: false,
        default: 'Что-то новенькое'
    },
    sectionSubTitle: {
        type: String,
        required: false,
        default: 'Для мобильных шатров'
    },
})
const TentOrderSizesStore = useTentOrderSizesStore()
const addOption = () => {
    TentOrderSizesStore.sizes[0].additional.options[6].choosen = true
    TentOrderSizesStore.calcOptionsPrice(0)
    TentOrderSizesStore.calcPrice(0)
    navigateTo('/tent-order/3x3/')
}
if (!TentOrderSizesStore.dataFetched) {
    await TentOrderSizesStore.fetchData()
    TentOrderSizesStore.dataFetched = true
}
</script>

<style lang="scss">
.some-new__wrapper {
    margin-top: 50px;
}
.some-new__card {
    width: 100%;
    height: auto;
    &:last-child {
        margin-right: 0;
    }
}
.some-new__cleaning-card {
    max-width: 950px;
    width: 57.5%;
}
.some-new__light-card {
    width: 40%;
    max-width: 650px;
}
.some-new__card_image-inner {
    padding-top: 40px;
    display: flex;
    justify-content: flex-end;
    background: #F2F2F2;
    z-index: 10;
}
.some-new__light-card {
    & .some-new__card_image-inner {
        background: #363636;
    }
    & .some-new__card_image-inner_caption {
        background: linear-gradient(90deg, #3E3E3E 37.99%, #525252 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    & .some-new__card_num {
        color: #FDFDFD;
    }
}
.some-new__card_image.card--image-full {
    margin-right: 30px;
}
.some-new__card_image-inner_caption {
    font-family: 'Montserrat';
    position: absolute;
    bottom: 0;
    left: 15px;
    font-weight: 700;
    font-size: 189px;
    line-height: .8;
    color: #F8F8F8;
    z-index: -1;
}
.some-new__card_sub-title {
    max-width: 625px;
    margin-bottom: 0;
}
.some-new__card_steps-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px 0;
    margin-top: 12px;
}
.some-new__card_step {
    position: relative;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: $grey-color;
    &::after {
        content: url(@/assets/img/icons/arrow-right-bl.svg);
        margin: 0 40px;
    }
    &:last-child::after {
        display: none;
    }
}
.some-new__card_btns-inner {
    display: flex;
    margin-top: 30px;
    &.mouse-entered {
        & .blue-border-btn {
            border-color: transparent;
            color: $dark-grey-color;
        }
    }
}
.swiper-pagination.some-new__slider-pagination {
    display: none;
}
@media (max-width:1600px) {
    .some-new__card_step {
        &::after {
            margin: 0 25px;
        }
    }
    .some-new__card_image-inner_caption {
        font-size: 140px;
    }
    .some-new__card_step {
        &::after {
            margin: 0 20px;
        }
    }
    .some-new__card_image.card--image-ful {
        margin-right: 0;
    }
    .some-new__card_step {
        font-size: 16px;
    }
}
@media (min-width:1500px) {
    .some-new__card_image-inner {
        max-height: 276px;
        height: 18vw;
    }
}
@media (max-width:1200px) {
    .some-new__card {
        width: auto;
    }
    .some-new__card_step {
        &::after {
            margin: 0 15px;
        }
    }
}
@media (max-width:1000px) {
    .some-new__card_step {
        font-size: 15px;
    }
}
@media (max-width:700px) {
    .some-new__wrapper {
        margin-top: 32px;
    }
    .some-new__card {
        width: 100%;
        max-width: none;
    }
    .some-new__card_image {
        max-width: 360px;
    }
    .some-new__card_steps-list {
        display: none;
    }
    .some-new__card_image-inner_caption {
        font-size: 95px;
        left: 10px;
    }
}
@media (max-width:400px) {
    .some-new__card_btn {
        &:nth-child(n + 2) {
            display: none;
        }
    }
}
</style> 