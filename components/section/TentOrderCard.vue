<template>
    <section class="tent-order-card section">
        <div class="container tent-order-card__container">
            <template v-if="IsPageExist">
                <div class="tent-order-card__sizes" @mousemove="changeBtnsStyle($event)">
                    <p class="tent-order-card__sizes_caption">Размер, м</p>
                    <nuxt-link :to="`/tent-order/${size.path}`" :class="['tent-order-card__size', { 'blue-border-btn current--btn-active': currentSizeIdx === idx }, { 'grey-border-btn': currentSizeIdx !== idx }]"
                        v-for="(size, idx) in orderSizes" :key="idx">
                        {{ size.value }}
                    </nuxt-link>
                </div>
                <div class="tent-order-card__main-info">
                    <div class="tent-order-card__main-info_column tent-order-card__main-info_left-column">
                        <h2 class="tent-order-card__name">
                            Шатер {{ currentSize }} м
                        </h2>
                        <p class="tent-order-card__description">
                            Раздвижной каркас из анодированного алюминия по австрийской технологии.
                            Ткань крыши и стен из плотного Оксфорда. Все швы герметичны.
                        </p>
                        <ul class="tent-order-card__params">
                            <li class="tent-order-card__params_item" v-for="(param, idx) in data.params" :key="idx">
                                <strong class="tent-order-card__params_item_key">{{ param.key }}</strong> <span class="tent-order-card__params_item_value">{{ param.value }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="tent-order-card__main-info_column tent-order-card__main-info_right-column">
                        <img src="@/assets/img/tents-models/single-tent.png" alt="single-tent" class="tent-order-card__main-info_image">
                    </div>
                </div>
                <div class="tent-order-card__additional">
                    <div class="tent-order-card__additional_item tent-order-card__frame">
                        <p class="tent-order-card__additional_item_name">Каркас</p>
                        <div class="tent-order-card__additional_item_content">
                            <div class="tent-order-card__frame_btns-inner">
                                <button
                                v-for="(frame, idx) in data.additional.frames" :key="idx"
                                :class="['tent-order-card__frame_btn grey-border-btn',
                                { 'is-choosen': TentSizesStore.sizes[currentSizeIdx].additional.frames[idx].choosen }]"
                                 @click="chooseFrameFunc(idx)"
                                >
                                    {{ frame.width }}

                                </button>
                            </div>
                            <p class="tent-order-card__additional_item_description">
                                * 4х-гранный профиль стоек 40х40мм. Производство Китай.
                            </p>
                        </div>
                    </div>
                    <div class="tent-order-card__additional_item tent-order-card__tent-type">
                        <p class="tent-order-card__additional_item_name">Тент</p>
                        <div class="tent-order-card__additional_item_content">
                            <div class="tent-order-card__tent-type_btns-inner">
                                <button v-for="(type, idx) in data.additional.types" :key="idx" 
                                :class="['tent-order-card__tent-type_btn grey-border-btn',
                                { 'is-choosen': TentSizesStore.sizes[currentSizeIdx].additional.types[idx].choosen }]"
                                 @click="chooseTypeFunc(idx)">
                                    {{ type.name }}
                                    <div class="tent-order-card__tent-type_btn_additional-price"> {{ type.priceText }} </div>
                                </button>
                            </div>
                            <div class="tent-order-card__tent-type_colors">
                                <div
                                v-for="(color, idx) in data.additional.colors" :key="idx" :style="`background-color:${color.hex}`"
                                :class="['tent-order-card__tent-type_color', {'is-choosen': TentSizesStore.sizes[currentSizeIdx].additional.colors[idx].choosen}]"
                                @click="chooseColorFunc(idx)"
                                >

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tent-order-card__additional_item tent-order-card__options">
                        <p class="tent-order-card__additional_item_name">Опции</p>
                        <div class="tent-order-card__additional_item_content">
                            <div class="tent-order-card__options_btns-inner">
                                <button :class="['tent-order-card__options_btn grey-border-btn', { 'is-choosen': TentSizesStore.sizes[currentSizeIdx].additional.options[idx].choosen }]" v-for="(option, idx) in data.additional.options" :key="idx" @click="chooseOptionFunc(idx)">
                                    <div class="tent-order-card__options_btn_name">{{ option.name }}</div>
                                    <div class="tent-order-card__options_btn_price">{{ option.priceText }}</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tent-order-card__additional_item tent-order-card__total-price">
                        <p class="tent-order-card__additional_item_name">Цена</p>
                        <div class="tent-order-card__additional_item_content">
                            <p class="tent-order-card__total-price_value"> {{ tentPrice }} ₽ </p>
                            <p class="tent-order-card__total-price_description">
                                В комплект включены крыша, алюминиевый
                                каркас, плотный чехол, тросы и колья.
                            </p>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <p>Данного размера не существует</p>
            </template>
        </div>
    </section>
</template>

<script setup>
import changeBtnsStyle from '@/composables/ChangeBtnsStyle';
import { useTentSizesStore } from '@/store/TentSizesStore';
const TentSizesStore = useTentSizesStore()
if (!TentSizesStore.dataFetched) {
    await TentSizesStore.fetchData()
    TentSizesStore.dataFetched
    TentSizesStore.dataFetched = true
}
const { size } = useRoute().params
const { data: orderSizesData } = await useFetch('/api/tent-sizes')
const orderSizes = orderSizesData.value.data
const IsPageExist = ref(false)
const isPageExistFunc = () => {
    for (let orderSize of orderSizes) {
        if (orderSize.path === size) {
            return IsPageExist.value = true
        }
    }
}
isPageExistFunc()
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
const { data } = await useFetch(`/api/tent-sizes-params/${currentSizeIdx.value}`)
const formatPrice = (int) => {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const chooseOptionFunc = (idx) => {
    TentSizesStore.sizes[currentSizeIdx.value].additional.options[idx].choosen = !TentSizesStore.sizes[currentSizeIdx.value].additional.options[idx].choosen
    TentSizesStore.calcOptionsPrice(currentSizeIdx.value)
    TentSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseTypeFunc = (idx) => {
    for(const type of TentSizesStore.sizes[currentSizeIdx.value].additional.types) {
        type.choosen = false
    }
    TentSizesStore.sizes[currentSizeIdx.value].additional.types[idx].choosen = true
    TentSizesStore.calcTypePrice(currentSizeIdx.value)
    TentSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseFrameFunc = (idx) => {
    for(const frame of TentSizesStore.sizes[currentSizeIdx.value].additional.frames) {
        frame.choosen = false
    }
    TentSizesStore.sizes[currentSizeIdx.value].additional.frames[idx].choosen = true
    TentSizesStore.calcFramePrice(currentSizeIdx.value)
    TentSizesStore.calcPrice(currentSizeIdx.value)
}
const chooseColorFunc = (idx) => {
    for(const color of TentSizesStore.sizes[currentSizeIdx.value].additional.colors) {
        color.choosen = false
    }
    TentSizesStore.sizes[currentSizeIdx.value].additional.colors[idx].choosen = true
}
const tentPrice = ref(formatPrice(TentSizesStore.sizes[currentSizeIdx.value].price))
watch(TentSizesStore.sizes[currentSizeIdx.value], () => {
    tentPrice.value = TentSizesStore.sizes[currentSizeIdx.value].price
    tentPrice.value = formatPrice(tentPrice.value)
})
</script>

<style lang="scss">
.tent-order-card {
    padding-top: 110px;
}
.tent-order-card__main-info {
    width: 100%;
    max-width: 1300px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.tent-order-card__main-info_column {}
.tent-order-card__main-info_left-column {
    margin-right: 50px;
}
.tent-order-card__main-info_right-column {
    padding-top: 65px;
    align-self: flex-end;
}
.tent-order-card__sizes {
    display: flex;
    margin-bottom: 35px;
}
.tent-order-card__sizes_caption {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: $dark-grey-color;
    margin-right: 29px;
    align-self: center;
}
.tent-order-card__name {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: $dark-grey-color;
    margin-bottom: 12px;
}
.tent-order-card__description {
    width: 100%;
    max-width: 670px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: $grey-color;
}
.tent-order-card__params {
    margin-top: 73px;
}
.tent-order-card__params_item {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
    color: $grey-color;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.tent-order-card__params_item_key {
    color: $dark-grey-color;
    &::after {
        content: "—";
        margin: 0 10px;
        font-weight: 300;
    }
}
.tent-order-card__params_item_value {
    font-weight: 400;
}
.tent-order-card__additional {
    margin-top: 84px;
}
.tent-order-card__additional_item {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: flex-start;
    align-content: center;
    margin-bottom: 45px;
    &:last-child {
        margin-bottom: 0;
    }
}
.tent-order-card__frame {}
.tent-order-card__additional_item_name {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: $dark-grey-color;
    flex: 1 1 20%;
    max-width: 110px;
    margin-right: 20px;
    padding: 8px 0;
}
.tent-order-card__additional_item_content {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 1 auto;
}
.tent-order-card__frame_btns-inner {
    display: flex;
}
.tent-order-card__frame_btn {
    &.is-choosen {
        color: $blue-color;
        border-color: $blue-color;
    }
}
.tent-order-card__additional_item_description {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: $grey-color;
    margin-left: 50px;
}
.tent-order-card__tent-type_btns-inner {
    width: 100%;
    display: flex;
    align-items: center;
}
.tent-order-card__tent-type_btn {
    width: 100%;
    max-width: 250px;
    line-height: 24px;
    align-items: flex-start;
    transition: 0.2s ease;
    &.is-choosen {
        border-color: $blue-color;
        color:$blue-color;
    }
    &:hover .tent-order-card__tent-type_btn_additional-price,
    &.is-choosen .tent-order-card__tent-type_btn_additional-price {
        color: $blue-color;
        transition: 0.2s ease;
    }
}
.tent-order-card__tent-type_btn_additional-price {
    color: #888888;
}
.tent-order-card__tent-type_colors {
    width: 100%;
    max-width: 1100px;
    margin-top: 35px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 92px));
    grid-gap: 20px;
}
.tent-order-card__tent-type_color {
    height: 38px;
    background: #F7F7F7;
    border: 1px solid transparent;
    border-radius: 1px;
    transition: 0.2s ease;
    cursor: pointer;
    &.is-choosen,
    &:hover,
    &.current-color {
        border: 1px solid #4076CC;
    }
}
.tent-order-card__options_btns-inner {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    grid-gap: 20px;
}
.tent-order-card__options_btn {
    align-items: flex-start;
    width: auto;
    text-align: left;
    margin-right: 0;
    &.is-choosen {
        border-color: $blue-color;
        color: $blue-color;
    }
    &.is-choosen .tent-order-card__options_btn_price,
    &:hover .tent-order-card__options_btn_price {
        color: $blue-color;
    }
}
.tent-order-card__options_btn_name {}
.tent-order-card__options_btn_price {
    color: #888888;
    transition: 0.2s ease;
}
.tent-order-card__total-price .tent-order-card__additional_item_name {
    padding: 20px 0;
}
.tent-order-card__total-price .tent-order-card__additional_item_content {
    flex-direction: column;
    align-items: flex-start;
}
.tent-order-card__total-price_value {
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: $dark-grey-color;
    margin-bottom: 8px;
}
.tent-order-card__total-price_description {
    width: 100%;
    max-width: 400px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: $grey-color;
}
</style>