<template>
    <section class="questions">
        <div class="container questions__container">
            <h2 class="questions__title section--title overflow--hidden">
                <span v-motion="{
                    initial: {
                        y: '100%',
                        display: 'block',
                    },
                    visibleOnce: {
                        y: 0,
                        transition: {
                            delay: 100,
                            duration: 400,
                        }
                    }
                }">
                Ответы на вопросы
                </span>
            </h2>
            <div class="questions__wrapper">
                <Accordion>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Сколько человек требуется для установки шатра?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Для комфортной установки мобильного шатра достаточно двух человек. Но при
                                необходимости установить шатёр можно и в одиночку.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Правда ли установка шатра занимает две минуты?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Да, сам шатер раздвигается и фиксируется за одну минуту. Плюс, до пяти минут занимает монтаж шатра к основанию и крепление стен к шатру.
                            </p>
                        </template>
                    </AccordionItem>

                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Сколько человек требуется для установки шатра?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Для комфортной установки мобильного шатра достаточно двух человек. Но при необходимости установить шатёр можно и в одиночку.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Что входит в базовое оснащение шатра?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                В базовое оснащение шатра входит каркас из анодированного алюминия, крыша выбранного вами цвета, транспортировочный чехол, троссы и колья для установки шатра в грунт.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Какой автомобиль подойдёт для перевозки шатра?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Для перевозки шатра идеально подходит компактный фургон с кузовом до трех метров, но небольшой шатер помещается в кроссовер и даже универсал.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Не улетит ли шатер при сильном ветре?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Нет, если при монтаже вы крепко зафиксировали шатер к основанию или грунту. Но в сильную непогоду разумнее просто сложить шатер и убрать в безопасное место.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Из каких материалов изготовлен шатер?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Каркас мобильного шатра изготовлен по австрийской технологии из анодированного алюминия. Ткань крыши и стен шатра - полиэстер с полиуретановыми пропитками.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Как упакован мобильный шатер?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                Все шатры в базовом оснащении комплектуются плотным транспортировочным чехлом. При транспортировке на большие расстояния, опционально рекомендуем жесткий бокс.
                            </p>
                        </template>
                    </AccordionItem>
                    <AccordionItem class="questions__item">
                        <template #accordion-trigger>
                            <h3 class="questions__item_title">Сколько стен можно докупить к шатру?</h3>
                            <button class="questions__item_trigger-btn"></button>
                        </template>
                        <template #accordion-content>
                            <p class="questions__item_text">
                                В базовом оснащениии шатра стены не включены, но опционально вы можете заказать их при покупке шатра или дозаказать впоследствии в любом количестве.
                            </p>
                        </template>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss">
.questions__wrapper {
    width: 100%;
    max-width: 1050px;
    margin-top: 90px;
}
.questions__item_title {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: $dark-grey-color;
    margin-right: 20px;
}
.questions__item_trigger-btn {
    display: block;
    position: relative;
    margin-left: auto;
    padding: 9px;
    transition: 0.3s ease;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 2px;
        background: $grey-color;
        transform: translate(-50%, -50%);
        transition: 0.3s ease;
    }
    &::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .accordion__trigger_active & {
        transform: rotate(270deg);
    }
    .accordion__trigger_active &::before {
        transform: translate(-50%, -50%) scale(0);
    }
}
.accordion__content-wrapper {
    padding-bottom: 30px;
}
.questions__item_text {
    width: 100%;
    max-width: 750px;
    font-size: 18px;
    line-height: 22px;
    color: $grey-color;
}
@media (max-width:1600px) {
    .questions__item_title {
        font-size: 20px;
    }
    .accordion__trigger.accordion__trigger_active {
        margin-bottom: 20px;
    }
}
@media (max-width:700px) {
    .questions__wrapper {
        margin-top: 60px;
    }
    .questions__item_text {
        font-size: 16px;
        line-height: 20px;
    }
}
@media (max-width:370px) {
    .questions__wrapper {
        margin-top: 50px;
    }
    .questions__item_title {
        font-size: 18px;
        line-height: 23px;
    }
    .questions__item_text {
        font-size: 14px;
        line-height: 18px;
    }
    .accordion__trigger.accordion__trigger_active {
        margin-bottom: 20px;
    }
    .accordion__content-wrapper {
        padding-bottom: 20px;
    }
}
</style>