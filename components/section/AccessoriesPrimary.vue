<template>
    <section class="primary--section accessories-primary">
        <div class="container accessories-primary__container">
            <h1 class="primary--title accessories-primary__title">Индивидуальная стилизация для мероприятия</h1>
            <p class="primary--sub-title accessories-primary__sub-title">
                Пошив любого количества сумок, промо-одежды и прочих аксессуаров для вашего мероприятия. Минимальная партия — 200 единиц.
            </p>
            <button class="accessories-primary__btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
            <Advantages Class="accessories-primary__advantages" :advantages="advantages" />
        </div>
    </section>
</template>

<script setup>
    import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore';
    const requestFormPopupStore = useRequestFormPopupStore()
    const advantages = ref([
    {
        key: '200 шт',
        value: 'Минимальная партия'
    },
    {
        key: '40 цветов',
        value: 'Стандартных тканей'
    },
    {
        key: '15 дней',
        value: 'Средний срок пошива'
    }
])
</script>

<style lang="scss">
.accessories-primary__title {
    max-width: none;
}
.accessories-primary__btn {
    margin-top: 34px;
}
</style>