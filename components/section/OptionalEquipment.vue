<template>
    <section class="section optional-equipment" id="optional-equipment">
        <div class="container optional-equipment__container">
            <h2 class="section--title optional-equipment__title overflow--hidden">
                <span v-motion="{
                    initial: {
                        y: '100%',
                        opacity:0,
                        display:'block',
                    },
                    visibleOnce: {
                        y: 0,
                        opacity:1,
                        transition: {
                            delay: 0,
                            duration: 600,
                        }
                    }
                }">
                {{ title }}
                </span>
            </h2>
            <p class="section--sub-title optional-equipment__sub-title">{{ subTitle }}</p>
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
                }">
                <swiper-slide :class="['optional-equipment__card', item.additionalClass]" :id="item.id" v-for="(item, idx) of optionalEquipmentArr" :key="idx">
                    <nuxt-link :to="item.pathTo" class="optional-equipment__card_image-inner image-inner--hover">
                        <img :src="item.image" alt="mobile-flags" class="optional-equipment__card_image">
                        <client-only>
                            <IconArrowRight Class="optional-equipment__card_image-inner_icon card--icon" Color="#fff" :Animate="true" />
                        </client-only>
                    </nuxt-link>
                    <nuxt-link :to="item.pathTo" class="optional-equipment__card_title card--title">{{ item.title }}</nuxt-link>
                    <p class="optional-equipment__card_sub-title card--sub-title">{{ item.subTitle }}</p>
                    <ul class="optional-equipment__card_types-inner" @mousemove="changeBtnsStyle($event)" v-if="item.types">
                        <li class="optional-equipment__card_type" v-for="(type, index) in item.types"
                            :class="['optional-equipment__item_size btn--hover', { 'blue-border-btn current--btn-active': index === 0, 'no-border-btn': index !== 0 }]"
                            :key="type">
                            <nuxt-link :to="item.pathTo">{{ type }}</nuxt-link>
                        </li>
                    </ul>
                    <div class="optional-equipment__card_btns-inner" v-else>
                        <nuxt-link :to="item.pathTo" class="optional-equipment__card_link blue-border-btn">Подробнее</nuxt-link>
                    </div>
                </swiper-slide>
                <div class="optional-equipment__slider-pagination swiper-pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
import mobileFlagsImage from '@/assets/img/mobile-flags.jpg'
import promoAccessoriesImage from '@/assets/img/promo-accessories.jpg'
import pagodasImage from '@/assets/img/pagodas.jpg'
import mobileUmbrellaImage from '@/assets/img/mobile-umbrella.jpg'
const modules = [Pagination, A11y]
const optionalEquipmentArr = ref([
    {
        title: 'Мобильные флаги',
        subTitle: 'Быстросборные виндеры в четырех формах',
        types: [
            'Крыло',
            'Перо',
            'Бриз',
            'Капля'
        ],
        additionalClass: 'optional-equipment__mobile-flag-item',
        id:'mobile-flags',
        image:mobileFlagsImage,
        pathTo:'/'
    },
    {
        title: 'Промо-аксессуары',
        subTitle: 'Сумки, зонты, дождевики и дизайн',
        additionalClass: 'optional-equipment__promo-accessories-item',
        id:'promo-accessories',
        image:promoAccessoriesImage,
        pathTo:'/accessories'
    },
    {
        title: 'Прочие шатры',
        subTitle: 'Если не увидели подходящий шатер или требуется индивидуальное решение',
        types: [
            'Пагоды',
            'Павильоны',
            'Другие',
        ],
        additionalClass: 'optional-equipment__other-tents-item',
        id:'other-tents',
        image:pagodasImage,
        pathTo:'/'
    },
    {
        title: 'Мобильные зонты',
        subTitle: 'Если шатер слишком крупный',
        types: [
            '2,0',
            '2,5',
            '3,0',
        ],
        additionalClass: 'optional-equipment__mobile-umbrellas-item',
        id:'mobile-umbrellas',
        image:mobileUmbrellaImage,
        pathTo:'/mobile-flags'
    },
])
defineProps({
    title: {
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
defineExpose({
    optionalEquipmentArr
})
</script>

<style lang="scss">
.optional-equipment__wrapper {
    margin-top: 60px;
}
.optional-equipment__card {
    width: 31%;
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
    & .optional-equipment__card_sub-title {
        max-width: 230px;
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
.optional-equipment__other-tents-item {
    align-self: flex-end;
    & .optional-equipment__card_image-inner {
        min-height: 220px;
    }
}
.optional-equipment__mobile-umbrellas-item {
    width: 16%;
    max-width: 250px;
    min-width: 230px;
    & .optional-equipment__card_image {
        object-position: left center;
    }
    & .optional-equipment__card_sub-title {
        max-width: 180px;
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
    max-width: 340px;
}
.optional-equipment__mobile-tents-item .optional-equipment__card_sub-title {
    max-width: 370px;
}
.optional-equipment__card_types-inner {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap:20px 0;
    &.mouse-entered {
        & .blue-border-btn {
         border-color: transparent;
         color: $dark-grey-color;
        }
     }
}
.optional-equipment__card_btns-inner {
    display: flex;
    flex-wrap: wrap;
    gap:20px;
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
        width: 29%;
    }
    .optional-equipment__mobile-flag-item {
        & .optional-equipment__card_image-inner {
            min-height: 450px;
        }
    }
    .optional-equipment__mobile-flag-item,
    .optional-equipment__other-tents-item {
        max-width: 450px;
        width: 29%;
    }
    .optional-equipment__promo-accessories-item {
        width: 18%;
        max-width: 220px;
    }
    .optional-equipment__mobile-umbrellas-item {
        width: 20%;
        max-width: 230px;
    }
    .optional-equipment__card_image-inner {
        max-height: 450px;
    }
    .optional-equipment__other-tents-item {
        & .optional-equipment__card_image-inner {
            min-height: 200px;
        }
    }
    .optional-equipment__mobile-tents-item {
        & .optional-equipment__card_image-inner {
            height: 90vw;
        }
    }
    .optional-equipment__card_type {
        margin-right: 15px;
    }
}
@media (max-width:1400px) {
    .optional-equipment__card {
        margin-right: 15px;
    }
    .optional-equipment__card_type {
        margin-right: 10px;
    }
    .optional-equipment__card_type:nth-child(n + 4) {
        display: none;
    }
}
@media (max-width:1300px) {
    .optional-equipment__card_type {
        margin-right: 10px;
    }
    .optional-equipment__other-tents-item {
        & .optional-equipment__card_image-inner {
            min-height: 180px;
        }
    }
}
@media (max-width:1200px) {
    .optional-equipment__card {
        width: 100%;
    }
    .optional-equipment__mobile-tents-item {
        max-width: 400px;
    }
    .optional-equipment__other-tents-item {
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
    .optional-equipment__other-tents-item {
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
    .optional-equipment__wrapper {
        margin-top: 36px;
    }
    .optional-equipment__card {
        max-width: none;
        align-self: flex-start;
    }
    .optional-equipment__mobile-flag-item {
        & .optional-equipment__card_image-inner {
            min-height: 340px;
        }
    }
    .optional-equipment__other-tents-item {
        & .optional-equipment__card_image-inner {
            min-height: 340px;
        }
    }
   .optional-equipment__card .optional-equipment__card_image-inner {
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
    .optional-equipment__card_type,
    .optional-equipment__card_link {
        font-size: 13px;
    }
}
</style>