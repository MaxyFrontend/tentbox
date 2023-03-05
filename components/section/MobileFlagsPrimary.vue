<template>
    <section class="primary--section mobile-flags-primary">
        <div class="container mobile-flags-primary__container">
            <h1 class="primary--title mobile-flags-primary__title">Собственное производство и лучшие поставщики</h1>
            <p class="primary--sub-title mobile-flags-primary__sub-title">
                Быстросборные флагштоки из анодированного алюминия. Пошив полотна из флажной сетки, полиэфирного шелка или сатена. Усиленные двойные швы.
            </p>
            <button class="mobile-flags-primary__btn blue-border-btn" @click="requestFormPopupStore.open()">Заказать</button>
            <Advantages :advantages="advantages" />
        </div>
    </section>
</template>

<script setup>
    import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore';
    const requestFormPopupStore = useRequestFormPopupStore()
    const advantages = ref([
    {
        key: '3 мин',
        value: 'Монтаж любого флага'
    },
    {
        key: '3 кг',
        value: 'Макс. вес одного флага'
    },
    {
        key: '2,5 м',
        value: 'Мин. высота флагов'
    },
    {
        key: '4,5 м',
        value: 'Макс. высота флагов'
    },
])
</script>

<style lang="scss">
.mobile-flags-primary__title {
    max-width: none;
}
.mobile-flags-primary__btn {
    margin-top: 34px;
}
</style>