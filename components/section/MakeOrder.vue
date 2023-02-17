<template>
    <section class="section make-order">
        <div class="container make-order__container">
            <div class="make-order__wrapper">
                <button class="make-order__btn black--btn" @click="requestFormPopupStore.open()"
                    v-motion="{
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 200
                            }
                        }
                    }">
                    Сделать заказ
                </button>
                <p class="make-order__description"
                    v-motion="{
                        initial: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: 300,
                                duration: 400
                            }
                        }
                    }">
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
@media (max-width:700px) {
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
    .make-order__description {
        font-size: 15px;
        line-height: 19px;
    }
}
</style>    