<template>
    <div class="primary__title-block">
        <h1 class="primary__title primary--title"
            v-motion="{
                initial: {
                    y: 200,
                    opacity: 0
                },
                enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 200,
                    }
                }
            }">
            Мобильные шатры и визуальное оборудование
            для вашего бизнеса
        </h1>
        <p class="primary__sub-title primary--sub-title"
            v-motion="{
                initial: {
                    y: 200,
                    opacity: 0
                },
                enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 400,
                    }
                }
            }">
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
.primary__sub-title {
    max-width: 760px;
}
@media (max-width:1900px) {
    .primary__sub-title {
        max-width: 700px;
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