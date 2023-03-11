<template>
    <section class="section our-clients">
        <div class="container our-clients__container">
            <h2 :class="['our-clients__title section--title overflow--hidden', { 'our-clients__main-title': sectionShortTitle }]">
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
            <h2 class="our-clients__title our-clients__short-title section--title overflow--hidden" v-if="sectionShortTitle">
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
                    {{ sectionShortTitle }}
                </span>
            </h2>
            <p class="our-clients__sub-title section--sub-title">
                {{ sectionSubTitle }}
            </p>
            <swiper :class="['our-clients__wrapper', { 'slider-touchmove': sliderTouchStart }]"
                @swiper="getSwiperInstance"
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
                    1200: {
                        slidesPerView: 3
                    },
                    1000: {
                        slidesPerView: 2.5
                    },
                    700: {
                        slidesPerView: 2
                    }
                }"
                @TouchStart="TouchStartHandle()"
                @touchMoveOpposite="touchMoveOppositeHandle()">
                <swiper-slide class="our-clients__item" v-for="(client, idx) in clients" :key="idx">
                    <div class="our-clients__item_image-inner">
                        <img :src="client.img" alt="rosa" class="our-clients__item_image">
                    </div>
                    <h4 class="our-clients__item_title"> {{ client.title }} </h4>
                    <p class="our-clients__item_text">
                        {{ client.text }}
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
import rosaImage from '@/assets/img/clients/rosa.jpg'
import sportImage from '@/assets/img/clients/sport.jpg'
import tuningFactoryImage from '@/assets/img/clients/tunning-factory.jpg'
const modules = [Pagination, Grid, Mousewheel, A11y]
const getSwiperInstance = (swiper) => {
    let count = 1;
    for (let slide of swiper.slidesEl.children) {
        let slideNum = document.createElement('span')
        slideNum.classList.add('slider__card_num')
        slideNum.classList.add('our-clients__card_num')
        slideNum.textContent = `${count}/${swiper.slidesEl.children.length}`
        slide.querySelector('.our-clients__item_image-inner').appendChild(slideNum)
        count++
    }
}
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
    sectionShortTitle: {
        type: String,
        required: false,
    },
    sectionSubTitle: {
        type: String,
        required: false,
        default: 'И в любых городах страны'
    },
    clients: {
        type: Array,
        required: false,
        default: [
            {
                title: 'Промо-акции и мероприятия',
                text: 'Промо-акция марафона. Сочи.',
                img: rosaImage
            },
            {
                title: 'Автоспорт, дрифт, мотоспорт',
                text: 'Чемпионат RDS. МО.',
                img: tuningFactoryImage
            },
            {
                title: 'Спортивные мероприятия, марафоны',
                text: 'Московский марафон. Москва.',
                img: sportImage
            },
            {
                title: 'Промо-акции и мероприятия',
                text: 'Промо-акция марафона. Сочи.',
                img: rosaImage
            },
            {
                title: 'Автоспорт, дрифт, мотоспорт',
                text: 'Чемпионат RDS. МО.',
                img: tuningFactoryImage
            },
            {
                title: 'Спортивные мероприятия, марафоны',
                text: 'Московский марафон. Москва.',
                img: sportImage
            },
        ]
    }
})
</script>

<style lang="scss">
.our-clients__wrapper {
    margin-top: 40px;
    overflow: hidden;
}
.our-clients__short-title {
    display: none;
}
.our-clients__item_image-inner {
    height: 18vw;
    max-height: 350px;
    margin-bottom: 20px;
    overflow: hidden;
}
.our-clients__card_num {
    color: #FDFDFD;
    font-weight: 400;
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
@media (max-width:1600px) {
    .our-clients__item_title {
        font-size: 20px;
        line-height: 25px;
    }
}
@media (max-width:1300px) {
    .our-clients__item_image-inner {
        height: 20vw;
    }
    .swiper-pagination.our-clients__slider-pagination {
        margin-top: 32px;
    }
}
@media (max-width:1000px) {
    .our-clients__item_image-inner {
        height: 30vw;
        max-height: 220px;
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
    .swiper-pagination.our-clients__slider-pagination {
        margin-top: 24px;
    }
    .our-clients__main-title {
        display: none;
    }
    .our-clients__short-title {
        display: block;
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