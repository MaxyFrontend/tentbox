<template>
    <div class="mobile-tents-promo" id="mobile-tents">
        <nuxt-link to="/mobile-tents" class="mobile-tents-promo__image-inner image-inner--hover">
            <picture>
                <source srcset="@/assets/img/yandex-tent.webp" type="image/webp">
                <source srcset="@/assets/img/yandex-tent.jpg" type="image/jpg">
                <img src="@/assets/img/yandex-tent.jpg" width="1650" alt="tents-promo" class="mobile-tents-promo__image">
            </picture>
            <client-only>
                <IconArrowRight Class="mobile-tents-promo__icon" :Animate="true" />
            </client-only>
        </nuxt-link>
        <h4 class="mobile-tents-promo__title overflow--hidden">
            <span v-motion="{
                initial: {
                    y: '50%',
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
            }">Мобильные шатры</span>
        </h4>
        <p class="mobile-tents-promo__sub-title">
            Монтаж за 2 минуты, компактное хранение и
            удобная транспортировка
        </p>
        <div class="mobile-tents-promo__links-inner" @mousemove="changeBtnsStyle($event)">
            <nuxt-link to="/mobile-tents" class="mobile-tents-promo__link blue-border-btn current--btn-active btn--hover">Подробнее</nuxt-link>
            <nuxt-link to="/tent-order" class="mobile-tents-promo__link no-border-btn btn--hover">Выбрать размер</nuxt-link>
        </div>
    </div>
</template>

<script setup>
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
</script>

<style lang="scss">
.mobile-tents-promo {
    margin-top: 35px;
}
.mobile-tents-promo__image-inner {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    display: block;
    &:hover .mobile-tents-promo__image {
        transform: scale(1.025);
    }
}
.mobile-tents-promo__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 55% center;
    transition: .6s ease;
}
.mobile-tents-promo__icon {
    position: absolute;
    bottom: 25px;
    left: 25px;
    z-index: 10;
}
.mobile-tents-promo__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 1;
    color: $dark-grey-color;
    margin-bottom: 16px;
}
.mobile-tents-promo__sub-title {
    width: 100%;
    max-width: 380px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: $grey-color;
}
.mobile-tents-promo__links-inner {
    margin-top: 30px;
    display: flex;
    align-items: center;
    &.mouse-entered {
        & .mobile-tents-promo__link.current--btn-active {
            border-color: transparent;
            color: $dark-grey-color;
        }
    }
}
.mobile-tents-promo__link {
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
}
@media (max-width:1600px) {
    .mobile-tents-promo__sub-title {
        font-size: 16px;
        line-height: 22px;
    }
}
@media (max-width:1000px) {
    .mobile-tents-promo__title {
        margin-bottom: 11px;
    }
    .mobile-tents-promo__sub-title {
        font-size: 16px;
        line-height: 22px;
    }
}
@media (max-width:700px) {
    .mobile-tents-promo__image {
        height: 90vw;
        max-height: 450px;
    }
    .mobile-tents-promo__link {
        margin-right: 12px;
    }
}
@media (max-width:410px) {
    .mobile-tents-promo__links-inner {
        margin-top: 25px;
    }
}
@media (max-width:370px) {
    .mobile-tents-promo__title {
        font-size: 18px;
    }
    .mobile-tents-promo__sub-title {
        font-size: 14px;
        line-height: 20px;
    }
}
</style>