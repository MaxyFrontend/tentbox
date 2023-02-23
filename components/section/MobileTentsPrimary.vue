<template>
    <section class="mobile-tents-primary section">
        <div class="container mobile-tents-primary__container">
            <h1 class="mobile-tents-primary__title primary--title overflow--hidden">
                <span v-motion="{
                    initial: {
                        y: 110,
                        display: 'block',
                    },
                    enter: {
                        y: 0,
                        transition: {
                            delay: 100,
                            duration: 500,
                        }
                    }
                }">
                    Собственное производство и лучшие поставщики
                </span>
            </h1>
            <p class="mobile-tents-primary__sub-title primary--sub-title">
                Усиленные раздвижные каркасы из анодированного алюминия по австрийской технологии. Ткань крыши и стен из плотного Оксфорда (полиэстера с полиуретановой пропиткой).
            </p>
            <div class="mobile-tents-primary__btns-inner" @mousemove="changeBtnsStyle($event)">
                <router-link to="/tent-order" class="mobile-tents-primary__button blue-border-btn current--btn-active">
                    Рассчитать
                </router-link>
                <button type="button" class="mobile-tents-primary__button no-border-btn"
                    @click="requestFormPopupStore.open()">
                    Оставить заявку
                </button>
            </div>
            <Advantages :advantages="advantages" />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
import changeBtnsStyle from '@/composables/ChangeBtnsStyle.js';
const requestFormPopupStore = useRequestFormPopupStore()
const advantages = ref([
    {
        key: '5 мин',
        value: 'Монтаж любого шатра'
    },
    {
        key: '32 м2',
        value: 'Макс. площадь одного шатра'
    },
    {
        key: '80 кг',
        value: 'Макс. вес одного шатра'
    },
    {
        key: '2 года',
        value: 'Обслуживание и гарантия'
    },
    {
        key: '6',
        value: 'Типоразмеров шатров'
    },
    {
        key: '2 м',
        value: 'Макс. длина при перевозке'
    },
    {
        key: '0,25 м2',
        value: 'Площадь хранения одного шатра'
    },
])
</script>

<style lang="scss">
.mobile-tents-primary {
    padding-top: 0;
}
.mobile-tents-primary__title {
    max-width: none;
}
.mobile-tents-primary__btns-inner {
    display: flex;
    align-items: stretch;
    margin-top: 34px;
}
.mobile-tents-primary__button {
    height: 100%;
}
.blue-border-btn {}
.no-border-btn {}
</style>