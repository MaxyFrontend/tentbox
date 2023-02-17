<template>
    <section class="section quick-choose">
        <div class="container quick-choose__container">
            <h2 class="section--title quick-choose__title"
                v-motion="{
                    initial: {
                        y: 100,
                        opacity: 0
                    },
                    visibleOnce: {
                        y: 0,
                        opacity: 1,
                    }
                }">{{ sectionTitle }}</h2>
            <p class="section--sub-title quick-shoow__sub-title"
                v-motion="{
                    initial: {
                        x: -100,
                        opacity: 0
                    },
                    visibleOnce: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 300,
                            delay: 300
                        }
                    }
                }"> {{ sectionSubTitle }} </p>
            <swiper class="quick-choose__wrapper"
                :modules="modules"
                @after-init="SwiperMouseControl"
                :speed="500"
                :slidesPerView="1"
                :spaceBetween="30"
                :mousewheel="true"
                :short-swipes="true"
                :pagination="{
                    el: '.quick-choose__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        slidesPerView: 3,
                    },
                    1000: {
                        slidesPerView: 2.5,
                    },
                    1000: {
                        slidesPerView: 2,
                    },
                    700: {
                        slidesPerView: 1.5,
                    }
                }"
                v-motion="{
                    initial: {
                        opacity: 0
                    },
                    visibleOnce: {
                        opacity: 1,
                        transition: {
                            duration: 400,
                            type: 'keyframes',
                            ease: 'ease',
                            delay: 300
                        }
                    }
                }">
                <swiper-slide class="quick-choose__card quick-choose__card_order">
                    <nuxt-link to="/tent-order" class="quick-choose__card_image-inner card--image-inner">
                        <img src="@/assets/img/tents/tent-1.png" alt="tent-white" class="quick-choose__card_image card--image">
                        <client-only>
                            <IconArrowRight Class="quick-choose__card_image-inner_icon card--icon" Color="#000" :Animate="true" />
                        </client-only>
                        <div class="quick-choose__card_image-inner_caption">1</div>
                    </nuxt-link>
                    <nuxt-link to="/tent-order" class="quick-choose__card_title card--title slider--card-title">
                        {{ quickChooseItems.orderTent.title }}
                    </nuxt-link>
                    <p class="quick-choose__card_sub-title card--sub-title">
                        {{ quickChooseItems.orderTent.subTitle }}
                    </p>
                    <div class="quick-choose__card_sizes" @mousemove="changeBtnsStyle($event)">
                        <client-only>
                            <nuxt-link to="/tent-order" v-for="(size, index) in quickChooseItems.orderTent.sizes" :key="size"
                                :class="['quick-choose__card_size', { 'blue-border-btn': index === 0, 'no-border-btn': index !== 0 }]">
                                {{ size }}
                            </nuxt-link>
                        </client-only>
                    </div>
                </swiper-slide>
                <swiper-slide class="quick-choose__card quick-choose__card_rent">
                    <nuxt-link to="/tent-rent" class="quick-choose__card_image-inner card--image-inner">
                        <img src="@/assets/img/tents/tent-2.png" alt="tent-black" class="quick-choose__card_image card--image">
                        <client-only>
                            <IconArrowRight Class="quick-choose__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                        <div class="quick-choose__card_image-inner_caption">2</div>
                    </nuxt-link>
                    <nuxt-link to="/tent-rent" class="quick-choose__card_title card--title slider--card-title">
                        {{ quickChooseItems.rentTent.title }}
                    </nuxt-link>
                    <p class="quick-choose__card_sub-title card--sub-title">
                        {{ quickChooseItems.rentTent.subTitle }}
                    </p>
                    <div class="quick-choose__card_sizes" @mousemove="changeBtnsStyle($event)">
                        <client-only>
                            <nuxt-link to="/tent-rent" v-for="(size, index) in quickChooseItems.rentTent.sizes" :key="size"
                                :class="['quick-choose__card_size', { 'blue-border-btn': index === 0, 'no-border-btn': index !== 0 }]">
                                {{ size }}
                            </nuxt-link>
                        </client-only>
                    </div>
                </swiper-slide>
                <swiper-slide class="quick-choose__card quick-choose__card_branding">
                    <nuxt-link :to="{ path: '/tent-rent', hash: '#branding' }" class="quick-choose__card_image-inner card--image-inner">
                        <img src="@/assets/img/tents/tent-comics.png" alt="tent-comics" class="quick-choose__card_image card--image">
                        <client-only>
                            <IconArrowRight Class="quick-choose__card_image-inner_icon card--icon" Color="#000" :Animate="true" />
                        </client-only>
                        <div class="quick-choose__card_image-inner_caption">+</div>
                    </nuxt-link>
                    <nuxt-link :to="{ path: '/tent-rent', hash: '#branding' }" class="quick-choose__card_title card--title slider--card-title">
                        {{ quickChooseItems.branding.title }}
                    </nuxt-link>
                    <p class="quick-choose__card_sub-title card--sub-title">
                        {{ quickChooseItems.branding.subTitle }}
                    </p>
                    <div class="quick-choose__card_links-inner" @mousemove="changeBtnsStyle($event)">
                        <nuxt-link :to="{ path: '/tent-rent', hash: '#branding' }" class="quick-choose__card_link blue-border-btn">
                            Подробнее
                        </nuxt-link>
                        <a href="#" class="quick-shoose__item_link dashed-border-btn">
                            Скачать шаблон
                        </a>
                    </div>
                </swiper-slide>
                <div class="quick-choose__slider-pagination tents-slider--progressbar swiper-pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Mousewheel, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
const modules = [Pagination, Mousewheel, A11y]
let quickChooseItems = reactive({
    orderTent: {
        title: 'Покупка шатра',
        subTitle: 'Шесть типоразмеров, крыши, стены, брендинг и прочие опции',
        sizes: [
            '3,0х3,0',
            '3,0х4,5',
            '3,0х6,0',
            '4,0х4,0',
        ]
    },
    rentTent: {
        title: 'Аренда шатра',
        subTitle: 'Три типоразмера в аренду, белые и даже черные',
        sizes: [
            '4,0х8,0',
            '4,0х4,0',
            '3,0х3,0',
        ]
    },
    branding: {
        title: 'Брендинг',
        subTitle: 'Разработка уникального дизайна и качественная печать',
    }
})
defineProps({
    sectionTitle: {
        type: String,
        required: false,
        default: 'Быстрый выбор'
    },
    sectionSubTitle: {
        type: String,
        required: false,
        default: 'Что вам необходимо'
    }
})
</script>

<style lang="scss">
.quick-choose {
    &.section {
        padding-top: 35px;
    }
}
.quick-choose__wrapper {
    margin-top: 56px;
}
.quick-choose__card {
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 200px;
}
.quick-choose__card_image-inner {
    position: relative;
    display: block;
    display: flex;
    border-radius: 4px 4px 0 0;
    padding-top: 60px;
    overflow: hidden;
    touch-action: pan-x !important;
    z-index: 10;
    .quick-choose__card_order & {
        background: #F2F2F2;
    }
    .quick-choose__card_rent & {
        background: #363636;
    }
    .quick-choose__card_branding & {
        background: linear-gradient(0deg, #E3E3E3, #E3E3E3);
    }
}
.quick-choose__card_image-inner_caption {
    font-family: 'Montserrat';
    position: absolute;
    bottom: 0;
    left: 25px;
    font-weight: 700;
    font-size: 234px;
    line-height: .7;
    z-index: -1;
}
.quick-choose__card_order {
    & .quick-choose__card_image-inner_caption {
        color: #F8F8F8;
    }
}
.quick-choose__card_rent {
    & .quick-choose__card_image-inner_caption {
        color: #3E3E3E;
    }
}
.quick-choose__card_branding {
    & .quick-choose__card_image-inner_caption {
        color: #DBDBDB;
        font-weight: 500;
        font-size: 382px;
        line-height: 0.45;
        left: 0;
    }
}
.quick-choose__card_sub-title {
    max-width: 310px;
    margin-bottom: 30px;
}
.quick-choose__card_sizes,
.quick-choose__card_links-inner {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 12px 0;
    margin-top: auto;
    justify-self: flex-end;
}
@media (max-width:1600px) {
    .quick-choose__card_image-inner {
        height: 15vw;
        min-height: 200px;
    }
    .quick-choose__card_image-inner_caption {
        font-size: 187px;
    }
    .quick-choose__card_branding {
        & .quick-choose__card_image-inner_caption {
            font-size: 300px;
        }
    }
}
@media (max-width:1300px) {
    .quick-choose__card_size:nth-child(n + 4) {
        display: none;
    }
}
@media (max-width:1200px) {
    .quick-choose__card_image-inner {
        height: 70vw;
    }
}
@media (max-width:700px) {
    .quick-choose__wrapper {
        margin-top: 32px;
    }
    .quick-choose__card_title {
        margin-top: 46px;
    }
    .quick-choose__slider-pagination {
        &.swiper-pagination {
            display: block;
        }
    }
    .quick-choose__card_size {
        &:nth-child(n + 4) {
            display: none;
        }
    }
}
@media (max-width:370px) {
    .quick-choose__card_image-inner::before {
        font-size: 150px;
    }
    .quick-choose__card_image-inner_caption {
        font-size: 150px;
    }
    .quick-choose__card_branding {
        & .quick-choose__card_image-inner_caption {
            font-size: 270px;
        }
    }
}
</style>    