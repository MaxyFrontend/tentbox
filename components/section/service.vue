<template>
    <section class="section service">
        <div class="container service__container">
            <h2 class="section--title service__title overflow--hidden">
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
                {{ sectionTitle }}
                </span>
            </h2>
            <p class="section--sub-title service__sub-title">
                {{ sectionSubTitle }}
            </p>
            <div class="service__wrapper">
                <swiper
                    :modules="modules"
                    @after-init="SwiperMouseControl"
                    :speed="450"
                    :slides-per-view="1"
                    :space-between="30"
                    :allow-touch-move="true"
                    :mousewheel="true"
                    :pagination="{
                        el: '.service__slider-pagination',
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
                    <swiper-slide class="service__card service__cleaning-card">
                        <nuxt-link to="/" class="service__card_image-inner card--image-inner">
                            <img src="@/assets/img/tents/tent-1-full.png" alt="tent-white" class="service__card_image card--image card--image-full">
                            <client-only>
                                <IconPlus Color="$grey-color" Class="service__card_image-inner_icon card--icon" :Animate="true" />
                            </client-only>
                            <div class="service__card_image-inner_caption">ТВОШ</div>
                        </nuxt-link>
                        <h4 class="service__card_title card--title slider--card-title">Чистка тентов</h4>
                        <p class="service__card_sub-title card--sub-title">
                            TentWashing или ТВОШ - наше новое направление по чистке крыш и стен из полиэстера. Сделаем всё сами в пять шагов:
                        </p>
                        <ul class="service__card_steps-list">
                            <li class="service__card_step">Заберем</li>
                            <li class="service__card_step">Очистим</li>
                            <li class="service__card_step">Просушим</li>
                            <li class="service__card_step">Сложим</li>
                            <li class="service__card_step">Вернем</li>
                        </ul>
                        <button class="blue-border-btn service__card_btn" @click="requestFormPopupStore.open()">Заказать чистку</button>
                    </swiper-slide>
                    <swiper-slide class="service__card service__light-card">
                        <nuxt-link to="/" class="service__card_image-inner card--image-inner">
                            <img src="@/assets/img/tents/spare-parts.png" alt="spare-parts" class="service__card_image card--image">
                            <client-only>
                                <IconPlus Color="#fff" Class="service__card_image-inner_icon card--icon" :Animate="true" />
                            </client-only>
                            <div class="service__card_image-inner_caption">ДОП</div>
                        </nuxt-link>
                        <h4 class="service__card_title card--title slider--card-title">Запасные элементы</h4>
                        <p class="service__card_sub-title card--sub-title">
                            Любые элементы шатра можно докупить, поменять <br>
                            и доукомплектовать
                        </p>
                        <nuxt-link to="/" class="blue-border-btn service__card_btn">Заказать элемент</nuxt-link>
                    </swiper-slide>
                    <div class="swiper-pagination service__slider-pagination tents-slider--progressbar"></div>
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
        default: 'Обслуживание'
    },
    sectionSubTitle: {
        type: String,
        required: false,
        default: 'После приобретения'
    },
})
</script>

<style lang="scss">
.service__wrapper {
    margin-top: 50px;
}
.service__card {
    width: 100%;
    height: auto;
    &:last-child {
        margin-right: 0;
    }
}
.service__cleaning-card {
    max-width: 950px;
    width: 57.5%;
}
.service__light-card {
    width: 40%;
    max-width: 650px;
}
.service__card_image-inner {
    padding-top: 40px;
    display: flex;
    justify-content: flex-end;
    touch-action: pan-x !important;
    background: #F2F2F2;
    z-index: 10;
}
.service__light-card {
    & .service__card_image-inner {
        background: #363636;
    }
    & .service__card_image-inner_caption {
        background: linear-gradient(90deg, #3E3E3E 37.99%, #525252 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}
.service__card_image.card--image-full {
    margin-right: 30px;
}
.service__card_image-inner_caption {
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
.service__card_sub-title {
    max-width: 625px;
    margin-bottom: 12px;
}
.service__card_steps-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px 0;
}
.service__card_step {
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
.service__card_btn {
    margin-top: 30px;
}
.swiper-pagination.service__slider-pagination {
    display: none;
}
@media (max-width:1600px) {
    .service__card_step {
        &::after {
            margin: 0 25px;
        }
    }
    .service__card_image-inner_caption {
        font-size: 140px;
    }
    .service__card_step {
        &::after {
            margin: 0 20px;
        }
    }
    .service__card_image.card--image-ful {
        margin-right: 0;
    }
}
@media (min-width:1500px) {
    .service__card_image-inner {
        max-height: 276px;
        height: 18vw;
    }
}
@media (max-width:1200px) {
    .service__card {
        width: auto;
    }
    .service__card_step {
        font-size: 16px;
        &::after {
            margin: 0 15px;
        }
    }
}
@media (max-width:1000px) {
    .service__card_step {
        font-size: 15px;
    }
}
@media (max-width:700px) {
    .service__wrapper {
        margin-top: 32px;
    }
    .service__card {
        width: 100%;
        max-width: none;
    }
    .service__card_image {
        max-width: 360px;
    }
    .service__card_steps-list {
        display: none;
    }
    .service__card_image-inner_caption {
        font-size: 95px;
        left: 10px;
    }
}
</style>