<template>
    <section class="make-order">
        <div class="container make-order__container">
            <div class="make-order__wrapper">
                <div class="make-order__btn-wrapper overflow--hidden">
                    <button class="make-order__btn black--btn" @click="requestFormPopupStore.open()"
                        v-motion="{
                            initial: {
                                y: '100%',
                                opacity:0,
                                visibility:'hidden'
                            },
                            visibleOnce: {
                                y: 0,
                                opacity:1,
                                visibility:'visible',
                                transition: {
                                    delay: 100,
                                    duration: 500,
                                }
                            }
                        }">
                        Сделать заказ
                    </button>
                </div>
                <p class="make-order__description">
                    или позвоните нам: <a href="tel:+74957406584">+7 495 740-65-84</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
const requestFormPopupStore = useRequestFormPopupStore()
</script>

<style lang="scss">
.make-order {
    padding:150px 0 130px;
}
.make-order__wrapper {
    width: 100%;
    max-width: 335px;
    margin: 0 auto;
}
.make-order__btn {
    margin: 0 auto;
}
.black--btn {}
.make-order__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: $dark-grey-color;
    margin-top: 12px;
    & a:hover {
        text-decoration: underline;
    }
}
@media (max-width:1600px) {
    .make-order {
        padding: 130px 0 120px;
    }
}
@media (max-width:1300px) {
    .make-order {
        padding: 100px 0 120px;
    }
}
@media (max-width:700px) {
    .make-order {
        padding: 30px 0 120px;
    }
    .make-order__description {
        font-size: 16px;
        line-height: 20px;
    }
}
@media (max-width:550px) {
    .make-order__wrapper {
        max-width: none;
    }
}
@media (max-width:370px) {
    .make-order {
        padding: 30px 0 90px;
    }
    .make-order__description {
        font-size: 15px;
        line-height: 19px;
    }
}
</style>    