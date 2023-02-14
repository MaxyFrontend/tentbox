<template>
    <section class="section some-new">
        <div class="container some-new__container">
            <h2 class="section--title some-new__title"> {{ sectionTitle }} </h2>
            <p class="section--sub-title some-new__sub-title">
                {{ sectionSubTitle }}
            </p>
            <div class="some-new__wrapper">
                <swiper
                    :modules="modules"
                    @after-init="SwiperMouseControl"
                    :speed="450"
                    :slides-per-view="'auto'"
                    :space-between="30"
                    :allow-touch-move="true"
                    :mousewheel="true"
                    :pagination="{
                        el: '.some-new__slider-pagination',
                        type: 'progressbar',
                    }">
                    <swiper-slide class="some-new__card some-new__cleaning-card">
                        <nuxt-link to="/" class="some-new__card_image-inner tent-card--image-inner">
                            <img src="@/assets/img/tents/tent-1-full.png" alt="tent-white" class="some-new__card_image tent-card--image tent-card--image-full">
                            <client-only>
                                <IconPlus Color="$grey-color" Class="some-new__card_image-inner_icon card--icon" :Animate="true" />
                            </client-only>
                            <div class="some-new__card_image-inner_caption">ТВОШ</div>
                        </nuxt-link>
                        <h4 class="some-new__card_title card--title tent--card-title">Чистка тентов</h4>
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
                        <button class="blue-border-btn some-new__card_btn" @click="requestFormPopupStore.open()">Заказать чистку</button>
                    </swiper-slide>
                    <swiper-slide class="some-new__card some-new__light-card">
                        <nuxt-link to="/" class="some-new__card_image-inner tent-card--image-inner">
                            <img src="@/assets/img/tents/tent-black-light.png" alt="tent-white" class="some-new__card_image tent-card--image">
                            <client-only>
                                <IconArrowRight Color="#fff" Class="some-new__card_image-inner_icon card--icon" :Animate="true" />
                            </client-only>
                            <div class="some-new__card_image-inner_caption">СВЕТ</div>
                        </nuxt-link>
                        <h4 class="some-new__card_title card--title tent--card-title">Модульное освещение</h4>
                        <p class="some-new__card_sub-title card--sub-title">
                            Легкие светодиодные модули, чтоб работать даже вечером.<br>
                            Для всех типоразмеров шатров
                        </p>
                        <nuxt-link to="/" class="blue-border-btn some-new__card_btn">Подробнее</nuxt-link>
                    </swiper-slide>
                    <div class="swiper-pagination some-new__slider-pagination tents-slider--progressbar"></div>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, A11y } from 'swiper'
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
const requestFormPopupStore = useRequestFormPopupStore()
const modules = [Pagination, Mousewheel, A11y]
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
    touch-action: pan-x !important;
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
}
.some-new__card_image.tent-card--image-full {
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
    margin-bottom: 12px;
}
.some-new__card_steps-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
.some-new__card_btn {
    margin-top: 30px;
}
.swiper-pagination.some-new__slider-pagination {
    display: none;
}
@media (max-width:1500px) {
    .some-new__card_step {
        &::after {
            margin: 0 25px;
        }
    }
    .some-new__card_image-inner_caption {
        font-size: 140px;
    }
    .some-new__cleaning-card {
        width: 90%;
        max-width: 700px;
    }
    .some-new__light-card {
        width: 100%;
        max-width: 600px;
    }
    .some-new__card_title {
        margin-top: 46px;
    }
    .some-new__card_step {
        &::after {
            margin: 0 20px;
        }
    }
    .some-new__card_image.tent-card--image-ful {
        margin-right: 0;
    }
}
@media (min-width:1500px) {
    .some-new__card_image-inner {
        max-height: 276px;
        height: 18vw;
    }
}
@media (max-width:1300px) {
  
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
</style>