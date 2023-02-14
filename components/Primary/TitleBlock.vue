<template>
    <div class="primary__title-block">
        <h1 class="primary__title">
            Мобильные шатры и визуальное оборудование
            для вашего бизнеса
        </h1>
        <p class="primary__sub-title">
            Мы занимаемся изготовлением и дизайном визуального оборудования
            для мероприятий различных форматов
        </p>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
.primary__title-block {
    width: 100%;
    max-width: 1070px;
}
.primary__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
    color: #404040;
    margin-bottom: 30px;
}
.primary__sub-title {
    width: 100%;
    max-width: 760px;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: $grey-color;
}
@media (max-width:1400px) {
    .primary__title {
        max-width: 900px;
        font-size: 40px;
        line-height: 48px;
    }
    .primary__sub-title {
        font-size: 20px;
        line-height: 28px;
        max-width: 680px;
    }
}
@media (max-width:1250px) {
    .primary__title {
        max-width: 780px;
        font-size: 34px;
        line-height: 42px;
    }
    .primary__sub-title {
        font-size: 18px;
        line-height: 26px;
        max-width: 600px;
    }
}
@media (max-width:1000px) {
    .primary__title {
        max-width: 500px;
        font-size: 30px;
        line-height: 38px;
    }
    .primary__sub-title {
        font-size: 16px;
        line-height: 24px;
        max-width: 540px;
    }
}
@media (max-width:410px) {
    .primary__title {
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .mobile-tents-promo__title {
        margin-bottom: 11px;
    }
}
@media (max-width:370px) {
    .primary__title {
        font-size: 22px;
        line-height: 26px;
    }
    .primary__sub-title {
        font-size: 14px;
        line-height: 22px;
    }
}
</style>