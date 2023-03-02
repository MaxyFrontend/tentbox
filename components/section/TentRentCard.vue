<template>
    <section class="tent--card tent-rent-card section">
        <div class="container tent--card__container">
            <div class="tent--card__sizes" @mousemove="changeBtnsStyle($event)">
                <swiper class="tent--card__sizes-slider"
                    :modules="modules"
                    @after-init="SwiperMouseControl"
                    :speed="400"
                    :slides-per-view="'auto'"
                    :space-between="20"
                    :mousewheel="true"
                    :slides-offset-after="20"
                    :long-swipes="true"
                    :pagination="{
                        el: '.tent--card__size-slider-pagination',
                        type: 'progressbar',
                    }"
                    :breakpoints="{
                        750: {
                            mousewheel: false,
                            slidesOffsetAfter: 0
                        }
                    }">
                    <swiper-slide class="tent--card__sizes_caption">Размер, м</swiper-slide>
                    <swiper-slide class="tent--card__size" v-for="(size, idx) in rentSizes" :key="idx">
                        <nuxt-link :to="`/tent-rent/${size.path}`" :class="['tent--card__size_link', { 'blue-border-btn current--btn-active': currentSizeIdx === idx }, { 'grey-border-btn tent--card__additional_btn': currentSizeIdx !== idx }]">
                            {{ size.value }}
                        </nuxt-link>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination tent--card__size-slider-pagination"></div>
            </div>
            <div class="tent--card__main-info tent-rent-card__main-info">
                <div class="tent--card__main-info_column tent--card__main-info_left-column">
                    <h2 class="tent--card__name overflow--hidden">
                        <span
                            v-motion="{
                                initial: {
                                    y: '100%',
                                    display: 'block',
                                },
                                enter: {
                                    y: 0,
                                    transition: {
                                        delay: 100,
                                        duration: 600,
                                    }
                                }
                            }">
                            Аренда шатра {{ currentSize }} м
                        </span>
                    </h2>
                    <p class="tent--card__description">
                        Раздвижной каркас из анодированного алюминия по австрийской технологии.
                        Ткань крыши и стен из плотного Оксфорда. Все швы герметичны.
                    </p>
                    <img :src="images[currentSizeIdx]" alt="single-tent" class="tent--card__main-info_left-column_image tent--card__main-info_image"
                        v-motion="{
                            initial: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1,
                                transition: {
                                    delay: 200,
                                    duration: 600,
                                }
                            }
                        }">
                    <ul class="tent--card__params">
                        <li class="tent--card__params_item" v-for="(param, idx) in data.params" :key="idx">
                            <strong class="tent--card__params_item_key">{{ param.key }}</strong> <span class="tent--card__params_item_value">{{ param.value }}</span>
                        </li>
                    </ul>
                </div>
                <div class="tent--card__main-info_column tent--card__main-info_right-column">
                    <img :src="images[currentSizeIdx]" alt="single-tent" class="tent--card__main-info_right-column_image tent--card__main-info_image"
                        v-motion="{
                            initial: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1,
                                transition: {
                                    delay: 200,
                                    duration: 600,
                                }
                            }
                        }">
                </div>
            </div>
            <div class="tent--card__additional tent-rent-card__additional">
                <div class="tent--card__additional_item tent--card__color">
                    <p class="tent--card__additional_item_name">Цвет</p>
                    <div class="tent--card__additional_item_content tent--card__color_content">
                        <div class="tent--card__color_btns-inner">
                            <button :class="['tent--card__color_btn grey-border-btn tent--card__additional_btn',
                                { 'is-choosen': TentRentSizesStore.sizes[currentSizeIdx].additional.colors[idx].choosen }]"
                                v-for="(color, idx) in data.additional.colors" :key="idx" @click="chooseColorFunc(idx)">
                                <div class="tent--card__color_btn_name">{{ color.name }}</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="tent--card__additional_item tent--card__options">
                    <p class="tent--card__additional_item_name">Опции</p>
                    <div class="tent--card__additional_item_content tent--card__options_content">
                        <button :class="['tent--card__options_btn grey-border-btn tent--card__additional_btn', { 'is-choosen': TentRentSizesStore.sizes[currentSizeIdx].additional.options[idx].choosen }]" v-for="(option, idx) in data.additional.options" :key="idx" @click="chooseOptionFunc(idx)">
                            <div class="tent--card__options_btn_name">{{ option.name }}</div>
                            <div class="tent--card__options_btn_price">{{ option.priceText }}</div>
                        </button>
                    </div>
                </div>
                <div class="tent--card__additional_item tent--card__days">
                    <p class="tent--card__additional_item_name">Дни</p>
                    <div class="tent--card__additional_item_content tent--card__days_content">
                        <button :class="['tent--card__days_btn grey-border-btn tent--card__additional_btn', { 'is-choosen': TentRentSizesStore.sizes[currentSizeIdx].additional.days[idx].choosen }]" v-for="(day, idx) in data.additional.days" :key="idx" @click="chooseDayFunc(idx)">
                            <div class="tent--card__days_btn_name">{{ day.value }}</div>
                        </button>
                    </div>
                </div>
                <div class="tent--card__additional_item tent--card__total-price">
                    <p class="tent--card__additional_item_name">Цена</p>
                    <div class="tent--card__additional_item_content">
                        <p :class="['tent--card__total-price_value overflow--hidden', { 'price-animate': priceAnimate }]">
                            <span v-motion="{
                                initial: {
                                    y: '100%',
                                    display: 'block',
                                    visibility: 'hidden',
                                },
                                visibleOnce: {
                                    y: 0,
                                    visibility: 'visible',
                                    transition: {
                                        delay: 100,
                                        duration: 600,
                                    }
                                }
                            }">
                                {{ tentPrice }} <span class="ruble">₽</span>/сутки
                            </span>
                        </p>
                    </div>
                    <div class="tent--card__additional_item_content">
                        <p class="tent--card__total-price_description">
                            В комплект включены крыша, алюминиевый
                            каркас, плотный чехол, тросы и колья.
                        </p>
                    </div>
                </div>
            </div>
            <div class="tent--card__contact-info">
                <div class="tent--card__contact-info_btns-inner">
                    <div class="tent--card__contact-info_btn-wrapper overflow--hidden">
                        <div class="tent--card__contact-info_btn-inner"
                            v-motion="{
                                initial: {
                                    y: '200%',
                                    display: 'block',
                                    visibility: 'hidden'
                                },
                                visibleOnce: {
                                    y: 0,
                                    visibility: 'visible',
                                    transition: {
                                        delay: 100,
                                        duration: 500,
                                    }
                                }
                            }">
                            <button class="tent--card__contact-info_btn tent--card__contact-info_buy-btn black--btn"
                                @click="requestFormPopupStore.open()">
                                Арендовать
                            </button>
                        </div>
                    </div>
                    <div class="tent--card__contact-info_btn-wrapper overflow--hidden">
                        <div class="tent--card__contact-info_btn-inner"
                            v-motion="{
                                initial: {
                                    y: '200%',
                                    display: 'block',
                                    visibility: 'hidden',
                                },
                                visibleOnce: {
                                    y: 0,
                                    visibility: 'visible',
                                    transition: {
                                        delay: 100,
                                        duration: 500,
                                    }
                                }
                            }">
                            <nuxt-link to="/tent-order" class="tent--card__contact-info_btn tent--card__contact-info_order-link grey-border-btn tent--card__additional_btn">
                                Купить
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <p class="tent--card__contact-info_call">
                    или позвоните нам: <a href="tel:+74957406584">+7 495 740-65-84</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import changeBtnsStyle from '@/composables/ChangeBtnsStyle';
import { useTentRentSizesStore } from '@/store/TentRentSizesStore';
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, A11y, } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
import image3x3 from '@/assets/img/tents-models/3x3.png'
import image4x4 from '@/assets/img/tents-models/4x4.png'
import image4x8 from '@/assets/img/tents-models/4x8.png'
const images = [
    image3x3,
    image4x4,
    image4x8
]
const modules = [Pagination, Mousewheel, A11y]
const requestFormPopupStore = useRequestFormPopupStore()
const TentRentSizesStore = useTentRentSizesStore()
if (!TentRentSizesStore.dataFetched) {
    await TentRentSizesStore.fetchData()
    TentRentSizesStore.dataFetched = true
}
const { size } = useRoute().params
const { data: rentSizesData } = await useFetch('/api/tent-rent-sizes')
const rentSizes = rentSizesData.value.data
const currentSize = ref('')
const currentSizeIdx = ref(0)
const getCurrentSize = () => {
    for (let rentSize of rentSizes) {
        if (rentSize.path === size) {
            return currentSize.value = rentSize.value
        }
        currentSizeIdx.value++
    }
}
getCurrentSize()
const { data } = await useFetch(`/api/tent-rent-sizes-params/${currentSizeIdx.value}`)
const formatPrice = (int) => {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const chooseOptionFunc = (idx) => {
    TentRentSizesStore.sizes[currentSizeIdx.value].additional.options[idx].choosen = !TentRentSizesStore.sizes[currentSizeIdx.value].additional.options[idx].choosen
    TentRentSizesStore.calcOptionsPrice(currentSizeIdx.value)
    TentRentSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseDayFunc = (idx) => {
    for (const day of TentRentSizesStore.sizes[currentSizeIdx.value].additional.days) {
        day.choosen = false
    }
    TentRentSizesStore.sizes[currentSizeIdx.value].additional.days[idx].choosen = true
    TentRentSizesStore.calcDaysPrice(currentSizeIdx.value)
    TentRentSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseColorFunc = (idx) => {
    for (const color of TentRentSizesStore.sizes[currentSizeIdx.value].additional.colors) {
        color.choosen = false
    }
    TentRentSizesStore.sizes[currentSizeIdx.value].additional.colors[idx].choosen = true
    TentRentSizesStore.calcColorPrice(currentSizeIdx.value)
    TentRentSizesStore.calcPrice(currentSizeIdx.value)
}
const tentPrice = ref(formatPrice(TentRentSizesStore.sizes[currentSizeIdx.value].price))
const priceAnimate = ref(false)
TentRentSizesStore.$subscribe((mutation) => {
    priceAnimate.value = true
    setTimeout(() => {
        priceAnimate.value = false
    }, 300)
    setTimeout(() => {
        tentPrice.value = TentRentSizesStore.sizes[currentSizeIdx.value].price
        tentPrice.value = formatPrice(tentPrice.value)
    }, 200)
})
</script>

<style src="@/assets/scss/tent-card.scss" lang="scss"></style>
<style lang="scss">
.tent-rent-card__main-info {
    & .tent--card__main-info_right-column {
        width: 40%;
    }
}
.tent-rent-card__additional {
    margin-top: 40px;
}
</style>