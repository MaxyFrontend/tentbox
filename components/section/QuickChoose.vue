<template>
    <section class="section quick-choose">
        <div class="container quick-choose__container">
            <h2 class="section--title quick-choose__title overflow--hidden">
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
            <p class="section--sub-title quick-shoow__sub-title"> {{ sectionSubTitle }} </p>
            <swiper :class="['quick-choose__wrapper', { 'slider-touchmove': sliderTouchStart }]"
                :modules="modules"
                @after-init="SwiperMouseControl"
                @swiper="getSwiperInstance"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()"
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
                }">
                <swiper-slide class="quick-choose__card quick-choose__card_order">
                    <nuxt-link to="/tent-order/3x3/" class="quick-choose__card_image-inner card--image-inner">
                        <picture>
                            <source srcset="@/assets/img/tents/tent-1.webp" type="image/webp">
                            <source srcset="@/assets/img/tents/tent-1.png" type="image/png">
                            <img src="@/assets/img/tents/tent-1.png" alt="tent-white" class="quick-choose__card_image card--image">
                        </picture>
                        <client-only>
                            <IconArrowRight Class="quick-choose__card_image-inner_icon card--icon" Color="#000" :Animate="true" />
                        </client-only>
                        <div class="quick-choose__card_image-inner_caption">1</div>
                    </nuxt-link>
                    <nuxt-link to="/tent-order/3x3/" class="quick-choose__card_title card--title slider--card-title">
                        {{ quickChooseItems.orderTent.title }}
                    </nuxt-link>
                    <p class="quick-choose__card_sub-title card--sub-title">
                        {{ quickChooseItems.orderTent.subTitle }}
                    </p>
                    <div class="quick-choose__card_sizes" @mousemove="changeBtnsStyle($event)">
                        <client-only>
                            <nuxt-link :to="quickChooseItems.orderTent.sizes[index].path" v-for="(size, index) in quickChooseItems.orderTent.sizes" :key="size"
                                :class="['quick-choose__card_size btn--hover', { 'blue-border-btn current--btn-active': index === 0, 'no-border-btn': index !== 0 }]">
                                {{ size.name }}
                            </nuxt-link>
                        </client-only>
                    </div>
                </swiper-slide>
                <swiper-slide class="quick-choose__card quick-choose__card_rent">
                    <nuxt-link to="/tent-rent/3x3/" class="quick-choose__card_image-inner card--image-inner">
                        <picture>
                            <source srcset="@/assets/img/tents/tent-2.webp" type="image/webp">
                            <source srcset="@/assets/img/tents/tent-2.png" type="image/png">
                            <img src="@/assets/img/tents/tent-2.png" alt="tent-white" class="quick-choose__card_image card--image">
                        </picture>
                        <client-only>
                            <IconArrowRight Class="quick-choose__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                        <div class="quick-choose__card_image-inner_caption">2</div>
                    </nuxt-link>
                    <nuxt-link to="/tent-rent/3x3/" class="quick-choose__card_title card--title slider--card-title">
                        {{ quickChooseItems.rentTent.title }}
                    </nuxt-link>
                    <p class="quick-choose__card_sub-title card--sub-title">
                        {{ quickChooseItems.rentTent.subTitle }}
                    </p>
                    <div class="quick-choose__card_sizes" @mousemove="changeBtnsStyle($event)">
                        <client-only>
                            <nuxt-link :to="quickChooseItems.rentTent.sizes[index].path" v-for="(size, index) in quickChooseItems.rentTent.sizes" :key="size"
                                :class="['quick-choose__card_size btn--hover', { 'blue-border-btn current--btn-active': index === 0, 'no-border-btn': index !== 0 }]">
                                {{ size.name }}
                            </nuxt-link>
                        </client-only>
                    </div>
                </swiper-slide>
                <swiper-slide class="quick-choose__card quick-choose__card_branding">
                    <nuxt-link :to="{ path: '/tent-order/3x3', hash: '#branding' }" class="quick-choose__card_image-inner card--image-inner">
                        <picture>
                            <source srcset="@/assets/img/tents/tent-comics.webp" type="image/webp">
                            <source srcset="@/assets/img/tents/tent-comics.png" type="image/png">
                            <img src="@/assets/img/tents/tent-comics.png" alt="tent-white" class="quick-choose__card_image card--image">
                        </picture>
                        <client-only>
                            <IconArrowRight Class="quick-choose__card_image-inner_icon card--icon" Color="#000" :Animate="true" />
                        </client-only>
                        <div class="quick-choose__card_image-inner_caption">+</div>
                    </nuxt-link>
                    <nuxt-link :to="{ path: '/tent-order/3x3', hash: '#branding' }" class="quick-choose__card_title card--title slider--card-title">
                        {{ quickChooseItems.branding.title }}
                    </nuxt-link>
                    <p class="quick-choose__card_sub-title card--sub-title">
                        {{ quickChooseItems.branding.subTitle }}
                    </p>
                    <div class="quick-choose__card_links-inner" @mousemove="changeBtnsStyle($event)">
                        <nuxt-link :to="{ path: '/tent-order/3x3', hash: '#branding' }" class="quick-choose__card_link blue-border-btn current--btn-active">
                            Подробнее
                        </nuxt-link>
                        <nuxt-link :to="{ path: '/tent-order/3x3', hash: '#branding' }" class="quick-shoose__item_link dashed-border-btn btn--hover">
                            Скачать шаблон
                        </nuxt-link>
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
const getSwiperInstance = (swiper) => {
    let count = 1;
    for (let slide of swiper.slidesEl.children) {
        let slideNum = document.createElement('span')
        slideNum.classList.add('slider__card_num')
        slideNum.classList.add('quick-choose__card_num')
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
let quickChooseItems = reactive({
    orderTent: {
        title: 'Покупка шатра',
        subTitle: 'Шесть типоразмеров, крыши, стены, брендинг и прочие опции',
        sizes: [
            {
                name: '3,0x3,0',
                path: '/tent-order/3x3/'
            },
            {
                name: '3,0x4,5',
                path: '/tent-order/3x4/'
            },
            {
                name: '3,0x6,0',
                path: '/tent-order/3x6/'
            },
            {
                name: '4,0x4,0',
                path: '/tent-order/4x4/'
            },
        ]
    },
    rentTent: {
        title: 'Аренда шатра',
        subTitle: 'Три типоразмера в аренду, белые и даже черные',
        sizes: [
            {
                name: '3,0x3,0',
                path: '/tent-rent/3x3/'
            },
            {
                name: '4,0x4,0',
                path: '/tent-rent/4x4/'
            },
            {
                name: '4,0x8,0',
                path: '/tent-rent/4x8/'
            },
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
    padding-top: 60px;
    overflow: hidden;
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
    & .quick-choose__card_num {
        color: #FDFDFD;
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
    &.mouse-entered {
        & .blue-border-btn {
            border-color: transparent;
            color: $dark-grey-color;
        }
    }
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
    .quick-choose__card_size {
        margin-right: 15px;
    }
}
@media (max-width:1400px) {
    .quick-choose__card_size {
        margin-right: 10px;
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