<template>
    <section class="section optional-equipment" id="optional-equipment">
        <div class="container optional-equipment__container">
            <h2 class="section--title optional-equipment__title"
            v-motion="{
                initial: {
                    y: 100,
                    opacity: 0
                },
                visibleOnce: {
                    y: 0,
                    opacity: 1,
                }
            }"
            >{{ Title }}</h2>
            <p class="section--sub-title optional-equipment__sub-title"
            v-motion="{
                initial: {
                    x: 100,
                    opacity: 0
                },
                visibleOnce: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        duration: 300,
                        delay:300
                    }
                }
            }"
            >{{ subTitle }}</p>
            <swiper class="optional-equipment__wrapper"
                :modules="modules"
                :speed="500"
                :slidesPerView="'auto'"
                :allow-touch-move="true"
                :pagination="{
                    el: '.optional-equipment__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        allowTouchMove: false
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
                            delay:300
                        }
                    }
                }"
                >
                <swiper-slide class="optional-equipment__card optional-equipment__mobile-flag-item" id="mobile-flags">
                    <nuxt-link to="/" class="optional-equipment__card_image-inner image-inner--hover">
                        <img src="@/assets/img/mobile-flags.jpg" alt="mobile-flags" class="optional-equipment__card_image">
                        <client-only>
                            <IconArrowRight Class="optional-equipment__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                    </nuxt-link>
                    <nuxt-link to="/" class="optional-equipment__card_title card--title">{{ notMobileTents.mobileFlags.title }}</nuxt-link>
                    <p class="optional-equipment__card_sub-title card--sub-title">{{ notMobileTents.mobileFlags.subTitle }}</p>
                    <ul class="optional-equipment__card_types-inner" @mousemove="changeBtnsStyle($event)">
                        <li class="optional-equipment__card_type" v-for="(type, index) in notMobileTents.mobileFlags.types"
                            :class="['quick-choose__item_size', { 'blue-border-btn': index === 0, 'no-border-btn': index !== 0 }]"
                            :key="type">
                            <nuxt-link to="/">{{ type }}</nuxt-link>
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="optional-equipment__card optional-equipment__promo-accessories-item" id="promo-accessories">
                    <nuxt-link to="/accessories" class="optional-equipment__card_image-inner image-inner--hover">
                        <img src="@/assets/img/promo-accessories.jpg" alt="mobile-flags" class="optional-equipment__card_image">
                        <client-only>
                            <IconArrowRight Class="optional-equipment__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                    </nuxt-link>
                    <nuxt-link to="/accessories" class="optional-equipment__card_title card--title">{{ notMobileTents.promoAccessories.title }}</nuxt-link>
                    <p class="optional-equipment__card_sub-title card--sub-title">{{ notMobileTents.promoAccessories.subTitle }}</p>
                    <nuxt-link to="/accessories" class="optional-equipment__card_more-link blue-border-btn">Подробнее</nuxt-link>
                </swiper-slide>
                <swiper-slide class="optional-equipment__card optional-equipment__pagodas-item" id="pagodas">
                    <nuxt-link to="/" class="optional-equipment__card_image-inner image-inner--hover">
                        <img src="@/assets/img/pagodas.jpg" alt="mobile-flags" class="optional-equipment__card_image">
                        <client-only>
                            <IconArrowRight Class="optional-equipment__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                    </nuxt-link>
                    <nuxt-link to="/" class="optional-equipment__card_title card--title">{{ notMobileTents.pagodas.title }}</nuxt-link>
                    <p class="optional-equipment__card_sub-title card--sub-title">{{ notMobileTents.pagodas.subTitle }}</p>
                    <ul class="optional-equipment__card_types-inner" @mousemove="changeBtnsStyle($event)">
                        <li class="optional-equipment__card_type" v-for="(type, index) in notMobileTents.pagodas.types"
                            :class="['quick-choose__item_size', { 'blue-border-btn': index === 0, 'no-border-btn': index !== 0 }]"
                            :key="type">
                            <nuxt-link to="/">{{ type }}</nuxt-link>
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="optional-equipment__card optional-equipment__mobile-umbrellas-item" id="mobile-umbrellas">
                    <nuxt-link to="/" class="optional-equipment__card_image-inner image-inner--hover">
                        <img src="@/assets/img/mobile-ambrella.jpg" alt="mobile-flags" class="optional-equipment__card_image">
                        <client-only>
                            <IconArrowRight Class="optional-equipment__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                    </nuxt-link>
                    <nuxt-link to="/" class="optional-equipment__card_title card--title">{{ notMobileTents.mobileUmbrellas.title }}</nuxt-link>
                    <p class="optional-equipment__card_sub-title card--sub-title">{{ notMobileTents.mobileUmbrellas.subTitle }}</p>
                    <ul class="optional-equipment__card_types-inner" @mousemove="changeBtnsStyle($event)">
                        <li class="optional-equipment__card_type" v-for="(type, index) in notMobileTents.mobileUmbrellas.types"
                            :class="['quick-choose__item_size', { 'blue-border-btn': index === 0, 'no-border-btn': index !== 0 }]"
                            :key="type">
                            <nuxt-link to="/">{{ type }}</nuxt-link>
                        </li>
                    </ul>
                </swiper-slide>
                <div class="optional-equipment__slider-pagination swiper-pagination"></div>
            </swiper>
        </div>
</section>
</template>

<script setup>
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
const modules = [Pagination, A11y]
const notMobileTents = reactive({
    mobileFlags: {
        title: 'Мобильные флаги',
        subTitle: 'Быстросборные виндеры в четырех формах',
        types: [
            'Крыло',
            'Перо',
            'Бриз',
            'Капля'
        ]
    },
    pagodas: {
        title: 'Пагоды',
        subTitle: 'Если для мероприятия нужны конструкции покрепче',
        types: [
            '3,0х3,0',
            '4,0х4,0',
            '5,0х5,0',
            '6,0х6,0'
        ]
    },
    mobileUmbrellas: {
        title: 'Мобильные зонты',
        subTitle: 'Если шатер слишком крупный',
        types: [
            '2,0',
            '2,5',
            '3,0',
        ]
    },
    promoAccessories: {
        title: 'Промо-аксессуары',
        subTitle: 'Сумки, зонты, дождевики и дизайн',
    },
})
defineProps({
    Title: {
        type: String,
        required: false,
        default: 'Не мобильные шатры'
    },
    subTitle: {
        type: String,
        required: false,
        default: 'Дополнительное оборудование'
    },
})
</script>

<style lang="scss">
.optional-equipment__wrapper {
    margin-top: 60px;
}
.optional-equipment__card {
    width: 30%;
    flex-grow: 1;
    max-width: 530px;
    margin-right: 30px;
    &:last-child {
        margin-right: 0;
    }
}
.optional-equipment__mobile-flag-item {
    & .optional-equipment__card_image-inner {
        min-height: 470px;
    }
}
.optional-equipment__promo-accessories-item {
    width: 16%;
    max-width: 250px;
    align-self: flex-start;
    & .optional-equipment__card_image-inner {
        min-height: 250px;
    }
    & .optional-equipment__card_image-inner_icon {
        top: auto;
        bottom: 25px;
    }
}
.optional-equipment__card_title {
    display: block;
}
.optional-equipment__pagodas-item {
    align-self: flex-end;
    & .optional-equipment__card_sub-title {
        max-width: 300px;
    }
    & .optional-equipment__card_image-inner {
        min-height: 220px;
    }
}
.optional-equipment__mobile-umbrellas-item {
    width: 16%;
    max-width: 250px;
    & .optional-equipment__card_image {
        object-position: left center;
    }
}
.optional-equipment__card_image-inner {
    width: 100%;
    display: flex;
    touch-action: pan-x !important;
    &:hover .optional-equipment__card_image {
        transform: scale(1.025);
    }
}
.optional-equipment__card_image {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center center;
    transition: 0.5s ease;
}
.optional-equipment__card_sub-title {
    max-width: 225px;
}
.optional-equipment__card_types-inner {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.optional-equipment__card_type {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.optional-equipment__card_more-link {
    margin-top: 24px;
}
.swiper-pagination.optional-equipment__slider-pagination {
    display: none;
    margin-top: 15px;
}
@media (max-width:1900px) {
    .optional-equipment__card_image-inner {
        max-height: 470px;
    }
}
@media (max-width:1600px) {
    .optional-equipment__card {
        margin-right: 20px;
    }
    .optional-equipment__mobile-flag-item,
    .optional-equipment__pagodas-item {
        max-width: 450px;
        width: 29%;
    }
    .optional-equipment__pagodas-item  {
        width: 31%;
    }
    .optional-equipment__promo-accessories-item {
        width: 18%;
        max-width: 220px;
    }
    .optional-equipment__mobile-umbrellas-item {
        width: 20%;
        max-width: 230px;
    }
    .optional-equipment__pagodas-item {
        & .optional-equipment__card_image-inner {
            min-height: 200px;
        }
    }
}
@media (max-width:1350px) {
    .optional-equipment__card {
        margin-right: 15px;
    }
    .optional-equipment__card_type:nth-child(n + 4) {
        display: none;
    }
}
@media (max-width:1200px) {
    .optional-equipment__card {
        width: 100%;
    }
    .optional-equipment__pagodas-item {
        & .optional-equipment__card_image-inner {
            min-height: 170px;
        }
    }
    .optional-equipment__promo-accessories-item {
        & .optional-equipment__card_image-inner {
            min-height: 170px;
        }
    }
    .optional-equipment__mobile-flag-item,
    .optional-equipment__pagodas-item {
        max-width: 400px;
    }
    .optional-equipment__card_type:nth-child(n+4) {
        display: block;
    }
    .swiper-pagination.optional-equipment__slider-pagination {
        display: block;
    }
}
@media (max-width:700px) {
    .optional-equipment__card {
        max-width: none;
        align-self: flex-start;
    }
    .optional-equipment__mobile-flag-item {
        &  .optional-equipment__card_image-inner {
            min-height: auto;
        }
    }
    .optional-equipment__pagodas-item {
        & .optional-equipment__card_image-inner {
            min-height: auto;
        }
    }
    .optional-equipment__card_image-inner {
        height: 100vw;
        max-height: 340px;
        min-height: 340px;
        & .optional-equipment__card_image {
            height: 100%;
        }
    }
    .optional-equipment__card_title {
        margin-top: 45px;
    }
    .swiper-pagination.optional-equipment__slider-pagination {
        position: absolute;
        top: 360px;
        margin-top: 0;
        display: block;
    }
}
@media (max-width:410px) {
    .optional-equipment__card_type:not(.optional-equipment__mobile-flag-item .optional-equipment__card_type) {
        &:nth-child(n + 4) {
            display: none;
        }
    }
}
@media (max-width:370px) {
    .optional-equipment__mobile-flag-item {
        & .optional-equipment__card_type:nth-child(n + 4) {
            display: none;
        }
    }
}
</style>