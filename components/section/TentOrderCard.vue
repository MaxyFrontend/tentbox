<template>
    <section :class="['tent--card section', {'is-touch': isMobileOrTablet}]">
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
                    <swiper-slide class="tent--card__size" v-for="(size, idx) in orderSizes" :key="idx">
                        <nuxt-link :to="`/tent-order/${size.path}`" :class="['tent--card__size_link', { 'blue-border-btn': currentSizeIdx === idx }, { 'grey-border-btn tent--card__additional_btn': currentSizeIdx !== idx }]">
                            {{ size.value }}
                        </nuxt-link>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination tent--card__size-slider-pagination"></div>
            </div>
            <div class="tent--card__main-info">
                <div class="tent--card__main-info_column tent--card__main-info_left-column">
                    <h2 class="tent--card__name overflow--hidden">
                        <span
                            v-motion="{
                                initial: {
                                    y: '100%',
                                    opacity:0,
                                    display: 'block',
                                },
                                enter: {
                                    y: 0,
                                    opacity:1,
                                    transition: {
                                        delay: 100,
                                        duration: 600,
                                    }
                                }
                            }">
                            Шатер {{ currentSize }} м
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
            <div class="tent--card__additional">
                <div class="tent--card__additional_item tent--card__frame">
                    <p class="tent--card__additional_item_name">Каркас</p>
                    <div class="tent--card__additional_item_content">
                        <div class="tent--card__frame_btns-inner">
                            <button
                                v-for="(frame, idx) in data.additional.frames" :key="idx"
                                :class="['tent--card__frame_btn grey-border-btn tent--card__additional_btn',
                                    { 'is-choosen': TentOrderSizesStore.sizes[currentSizeIdx].additional.frames[idx].choosen }]"
                                @click="chooseFrameFunc(idx)">
                                {{ frame.width }}
                            </button>
                        </div>
                        <p class="tent--card__additional_item_description" v-for="(frame, idx) in data.additional.frames" :key="idx" v-show="TentOrderSizesStore.sizes[currentSizeIdx].additional.frames[idx].choosen">
                            {{ frame.description }}
                        </p>
                    </div>
                </div>
                <div class="tent--card__additional_item tent--card__tent-type">
                    <p class="tent--card__additional_item_name">Тент</p>
                    <div class="tent--card__additional_item_content">
                        <div class="tent--card__tent-type_btns-inner">
                            <button v-for="(type, idx) in data.additional.types" :key="idx"
                                :class="['tent--card__tent-type_btn grey-border-btn tent--card__additional_btn',
                                    { 'is-choosen': TentOrderSizesStore.sizes[currentSizeIdx].additional.types[idx].choosen }]"
                                @click="chooseTypeFunc(idx)">
                                {{ type.name }}
                                <div class="tent--card__tent-type_btn_additional-price"> {{ type.priceText }} <span class="ruble">₽</span> </div>
                            </button>
                        </div>
                        <swiper class="tent--card__tent-type_colors"
                            :modules="modules"
                            :speed="450"
                            :mousewheel="true"
                            :allow-touch-move="true"
                            :space-between="18"
                            :slides-per-view="'auto'"
                            :grid="{
                                rows: 1,
                            }"
                            :pagination="{
                                el: '.tent--card__colors-slider-pagination',
                                type: 'progressbar',
                            }"
                            :breakpoints="{
                                1000: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 0,
                                    allowTouchMove: false,
                                    mousewheel: false,
                                    grid: {
                                        rows: 2
                                    }
                                }
                            }">
                            <swiper-slide
                                v-for="(color, idx) in data.additional.colors" :key="idx" :style="`background-color:${color.hex}`"
                                :class="['tent--card__tent-type_color', { 'is-choosen': TentOrderSizesStore.sizes[currentSizeIdx].additional.colors[idx].choosen }]"
                                @click="chooseColorFunc(idx)">
                            </swiper-slide>
                        </swiper>
                        <div class="tent--card__colors-slider-pagination swiper-pagination"></div>
                    </div>
                </div>
                <div class="tent--card__additional_item tent--card__options">
                    <p class="tent--card__additional_item_name">Опции</p>
                    <div class="tent--card__additional_item_content tent--card__options_content">
                        <button :class="['tent--card__options_btn grey-border-btn tent--card__additional_btn', { 'is-choosen': TentOrderSizesStore.sizes[currentSizeIdx].additional.options[idx].choosen }]" v-for="(option, idx) in data.additional.options" :key="idx" @click="chooseOptionFunc(idx)">
                            <div class="tent--card__options_btn_name">{{ option.name }}</div>
                            <div class="tent--card__options_btn_price">{{ option.priceText }} <span class="ruble">₽</span></div>
                        </button>
                    </div>
                </div>
                <div class="tent--card__additional_item tent--card__total-price">
                    <p class="tent--card__additional_item_name">Цена</p>
                    <div class="tent--card__additional_item_content">
                        <p :class="['tent--card__total-price_value overflow--hidden', { 'price-slide-up': priceSlideUp }, {'price-slide-up-from-down': priceSlideUpFromDown}]">
                            <span class="tent--card__total-price_current" v-motion="{
                                initial: {
                                    y: '100%',
                                    opacity:0,
                                    display: 'block',
                                    visibility: 'hidden',
                                },
                                visibleOnce: {
                                    y: 0,
                                    opacity:1,
                                    visibility: 'visible',
                                    transition: {
                                        delay: 100,
                                        duration: 600,
                                    }
                                }
                            }">
                                {{ tentPrice }} <span class="ruble">₽</span>
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
                                    opacity:0,
                                    display: 'block',
                                    visibility: 'hidden'
                                },
                                visibleOnce: {
                                    y: 0,
                                    opacity:1,
                                    visibility: 'visible',
                                    transition: {
                                        delay: 100,
                                        duration: 500,
                                    }
                                }
                            }">
                            <button class="tent--card__contact-info_btn tent--card__contact-info_buy-btn black--btn"
                                @click="requestFormPopupStore.open()">
                                Купить
                            </button>
                        </div>
                    </div>
                    <div class="tent--card__contact-info_btn-wrapper overflow--hidden">
                        <div class="tent--card__contact-info_btn-inner"
                            v-motion="{
                                initial: {
                                    y: '200%',
                                    opacity:0,
                                    display: 'block',
                                    visibility: 'hidden',
                                },
                                visibleOnce: {
                                    y: 0,
                                    opacity:1,
                                    visibility: 'visible',
                                    transition: {
                                        delay: 100,
                                        duration: 500,
                                    }
                                }
                            }">
                            <nuxt-link :to="rentSizeLink" class="tent--card__contact-info_btn tent--card__contact-info_order-link grey-border-btn tent--card__additional_btn">
                                Взять в аренду
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
import { useTentOrderSizesStore } from '@/store/TentOrderSizesStore';
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, A11y, } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
import image3x3 from '@/assets/img/tents-models/3x3.png'
import image3x45 from '@/assets/img/tents-models/3x45.png'
import image3x6 from '@/assets/img/tents-models/3x6.png'
import image4x4 from '@/assets/img/tents-models/4x4.png'
import image4x6 from '@/assets/img/tents-models/4x6.png'
import image4x8 from '@/assets/img/tents-models/4x8.png'
const images = [
    image3x3,
    image3x45,
    image3x6,
    image4x4,
    image4x6,
    image4x8
]
const modules = [Pagination, Mousewheel, A11y]
const requestFormPopupStore = useRequestFormPopupStore()
const TentOrderSizesStore = useTentOrderSizesStore()
if (!TentOrderSizesStore.dataFetched) {
    await TentOrderSizesStore.fetchData()
    TentOrderSizesStore.dataFetched = true
}
const { size } = useRoute().params
const { data: orderSizesData } = await useFetch('/api/tent-order-sizes')
const orderSizes = orderSizesData.value.data
const currentSize = ref('')
const currentSizeIdx = ref(0)
const getCurrentSize = () => {
    for (let orderSize of orderSizes) {
        if (orderSize.path === size) {
            return currentSize.value = orderSize.value
        }
        currentSizeIdx.value++
    }
}
getCurrentSize()
const { data: rentTentData } = await useFetch('/api/tent-rent-sizes')
const rentSizes = rentTentData.value.data
const rentSizeLink = ref('')
const getLinkToTentRent = () => {
    let count = 0
    let bool = false
    for(let rentSize of rentSizes) {
        count++
        if(rentSize.path === size) {
            bool = true
            return rentSizeLink.value = `/tent-rent/${size}/`
        }
        if(count === rentSizes.length && !bool) {
            return rentSizeLink.value = '/tent-rent/3x3/'
        }
    }
}
getLinkToTentRent()
const { data } = await useFetch(`/api/tent-order-sizes-params/${currentSizeIdx.value}`)
const formatPrice = (int) => {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const chooseOptionFunc = (idx) => {
    TentOrderSizesStore.sizes[currentSizeIdx.value].additional.options[idx].choosen = !TentOrderSizesStore.sizes[currentSizeIdx.value].additional.options[idx].choosen
    TentOrderSizesStore.calcOptionsPrice(currentSizeIdx.value)
    TentOrderSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseTypeFunc = (idx) => {
    for (const type of TentOrderSizesStore.sizes[currentSizeIdx.value].additional.types) {
        type.choosen = false
    }
    TentOrderSizesStore.sizes[currentSizeIdx.value].additional.types[idx].choosen = true
    TentOrderSizesStore.calcTypePrice(currentSizeIdx.value)
    TentOrderSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseFrameFunc = (idx) => {
    for (const frame of TentOrderSizesStore.sizes[currentSizeIdx.value].additional.frames) {
        frame.choosen = false
    }
    TentOrderSizesStore.sizes[currentSizeIdx.value].additional.frames[idx].choosen = true
    TentOrderSizesStore.calcFramePrice(currentSizeIdx.value)
    TentOrderSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseColorFunc = (idx) => {
    for (const color of TentOrderSizesStore.sizes[currentSizeIdx.value].additional.colors) {
        color.choosen = false
    }
    TentOrderSizesStore.sizes[currentSizeIdx.value].additional.colors[idx].choosen = true
}
const tentPrice = ref(formatPrice(TentOrderSizesStore.sizes[currentSizeIdx.value].price))
const priceSlideUp = ref(false)
const priceSlideUpFromDown = ref(false)
TentOrderSizesStore.$subscribe(() => {
    priceSlideUp.value = true
    setTimeout(() => {
        priceSlideUp.value = false
        priceSlideUpFromDown.value = true
    }, 150)
    setTimeout(() => {
        priceSlideUpFromDown.value = false
    }, 300)
    setTimeout(() => {
        tentPrice.value = TentOrderSizesStore.sizes[currentSizeIdx.value].price
        tentPrice.value = formatPrice(tentPrice.value)
    }, 200)
})
defineProps({
    isMobileOrTablet: {
        type: Boolean,
        required:false,
        default:false
    }
})
</script>
<style src="@/assets/scss/tent-card.scss" lang="scss"></style>
<style lang="scss"></style>