<template>
    <section class="section tents-branding">
        <div class="container tents-branding__container">
            <h2 class="section--title tents-branding__title">Брендинг шатров</h2>
            <p class="section--sub-title tents-branding__sub-title">
                И разработка дизайна
            </p>
            <swiper class="tents-branding__wrapper"
                :modules="modules"
                @after-init="SwiperMouseControl"
                :speed="450"
                :slides-per-view="1"
                :space-between="30"
                :allow-touch-move="true"
                :mousewheel="true"
                :pagination="{
                    el: '.tents-branding__slider-pagination',
                    type: 'progressbar',
                }"
                :breakpoints="{
                    1200: {
                        slidesPerView: 2
                    },
                    1000: {
                        slidesPerView: 1.6
                    },
                    700: {
                        slidesPerView: 1.3
                    }
                }">
                <swiper-slide class="tents-branding__item tents-branding__item-flat">
                    <div class="tents-branding__item_image-inner card--image-inner" @click="requestFormPopupStore.open()">
                        <img src="@/assets/img/branding/flat.png" alt="flat" class="tents-branding__item_image card--image tents-branding__item-flat_image">
                        <span class="tents-branding__item_image-inner_caption">2d</span>
                    </div>
                    <h3 class="card--title slider--card-title tents-branding__item_title" @click="requestFormPopupStore.open()">Визуализация в плоскости</h3>
                    <p class="card--sub-title tents-branding__item_sub-title">
                        Дизайн и визуализация шатра в плоскости.<br>
                        Бюджет от 5 000 ₽
                    </p>
                    <button class="tents-branding__item_btn blue-border-btn" @click="requestFormPopupStore.open()">
                        Заказать дизайн
                    </button>
                </swiper-slide>
                <swiper-slide class="tents-branding__item tents-branding__item-volumetric">
                    <div class="tents-branding__item_image-inner card--image-inner" @click="requestFormPopupStore.open()">
                        <img src="@/assets/img/branding/volumetric.png" alt="volumetric" class="tents-branding__item_image card--image tents-branding__item-volumetric_image">
                        <span class="tents-branding__item_image-inner_caption">3d</span>
                    </div>
                    <h3 class="card--title slider--card-title tents-branding__item_title" @click="requestFormPopupStore.open()">Визуализация в объеме</h3>
                    <p class="card--sub-title tents-branding__item_sub-title">
                        Дизайн и визуализация шатра на объемной модели.
                        Будьте готовы заложить от 10 000 ₽
                    </p>
                    <button class="tents-branding__item_btn blue-border-btn" @click="requestFormPopupStore.open()">
                        Заказать дизайн
                    </button>
                </swiper-slide>
                <div class="tents-branding__slider-pagination tents-slider--progressbar swiper-pagination"></div>
            </swiper>
            <div class="tents-branding__for-designer">
                <h3 class="tents-branding__for-designer_title">Для вашего дизайнера</h3>
                <div class="tents-branding__for-designer_samples-wrapper">
                    <button class="tents-branding__for-designer_sample" v-for="(sample, idx) of samples" :key="idx" @click="requestFormPopupStore.open()">
                        <p class="tents-branding__for-designer_sample_name"> {{ sample.name }} </p>
                        <div class="tents-branding__for-designer_sample_formats">
                            <span class="tents-branding__for-designer_sample_format">PDF</span>
                            <span class="tents-branding__for-designer_sample_format">CDR</span>
                            <span class="tents-branding__for-designer_sample_format">AI</span>
                        </div>
                        <IconArrowBottomCorner Class="tents-branding__for-designer_sample_icon" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, A11y } from 'swiper'
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
import SwiperMouseControl from '@/composables/SwiperMouseControl.js'
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css';
const requestFormPopupStore = useRequestFormPopupStore()
const modules = [Pagination, Mousewheel, A11y]
const samples = [
    {
        name: 'Шаблон 3,0x3,0м'
    },
    {
        name: 'Шаблон 3,0x4,5м'
    },
    {
        name: 'Шаблон 3,0x6,0м'
    },
    {
        name: 'Шаблон 4,0x4,0м'
    },
    {
        name: 'Шаблон 4,0x6,0м'
    },
    {
        name: 'Шаблон 4,0x8,0м'
    },
]
</script>

<style lang="scss">
.tents-branding__wrapper {
    position: relative;
    display: flex;
    margin-top: 56px;
}
.tents-branding__item {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    height: auto;
    &:last-child {
        margin-right: 0;
    }
}
.tents-branding__item_image-inner {
    position: relative;
    background: #E3E3E3;
    display: flex;
    padding-top: 80px;
    max-height: 330px;
    max-width: none;
    z-index: 10;
}
.tents-branding__item_image {
    align-self: flex-end;
    margin-left: auto;
    height: 100%;
    width: auto;
    max-width: none;
    max-height: 250px;
}
.tents-branding__item-volumetric_image {
    margin-right: 25px;
}
.tents-branding__item_image-inner_caption {
    position: absolute;
    bottom: 0;
    left: 20px;
    line-height: 0.7;
    font-weight: 500;
    font-size: 260px;
    letter-spacing: -0.075em;
    text-transform: uppercase;
    color: #DBDBDB;
    z-index: -1;
}
.card--title {}
.tents-branding__item_sub-title {
    max-width: 430px;
}
.tents-branding__item_title {
    cursor: pointer;
}
.card--sub-title {}
.tents-branding__item_btn {
    margin-top: auto;
}
.tents-branding__for-designer {
    width: 100%;
    margin-top: 80px;
}
.tents-branding__for-designer_title {
    font-family: "DINPro";
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 36px;
    color: $dark-grey-color;
}
.tents-branding__for-designer_samples-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:20px 0;
}
.tents-branding__for-designer_sample {
    position: relative;
    flex: 1 1 auto;
    max-width: 250px;
    margin-right: 30px;
    padding: 18px;
    border: 1px dashed #BDBDBD;
    border-radius: 2px;
    transition: 0.2s ease;
    &:hover {
        border-color: $blue-color;
        border-style: solid;
    }
    &:hover .tents-branding__for-designer_sample_icon path {
        fill:#4076CC;
    }
}
.tents-branding__for-designer_sample_name {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    color: $dark-grey-color;
    margin-bottom: 6px;
}
.tents-branding__for-designer_sample_formats {
    display: flex;
    align-items: center;
}
.tents-branding__for-designer_sample_format {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #888888;
    margin-right: 7px;
    &:last-child {
        margin-right: 0;
    }
}
.tents-branding__for-designer_sample_icon {
    position: absolute;
    bottom: 23px;
    right: 18px;
}
@media (max-width:1600px) {
    .tents-branding__item_image-inner_caption {
        font-size: 220px;
        left: 10px;
    }
    .tents-branding__for-designer_title {
        font-size: 20px;
        line-height: 25px;
    }
    .tents-branding__for-designer_sample {
        margin-right: 20px;
    }
    .tents-branding__for-designer_sample_name,
    .tents-branding__for-designer_sample_format {
        font-size: 16px;
        line-height: 20px;
    }
}
@media (max-width:1350px) {
    .tents-branding__for-designer_sample {
        flex-basis: 30%;
    }
}
@media (min-width:1200px) {
    .tents-branding__item {
        flex: 1 1 45%;
    }
    .tents-branding__item_image-inner {
        height: 20vw;
    }
    .tents-branding__item_image {}
}
@media (max-width:1200px) {
    .tents-branding__item_image-inner {
        max-height: 245px;
        padding-top: 50px;
    }
}
@media (max-width:700px) {
    .tents-branding__item_image-inner {
        max-height: 220px;
    }
    .tents-branding__item-volumetric_image {
        margin-right: -50px;
    }
    .tents-branding__item-flat_image {
        margin-right: -30px;
    }
    .tents-branding__for-designer {
        display: none;
    }
}
@media (max-width:370px) {
    .tents-branding__item_image-inner {
        max-height: 200px;
    }
}
</style>