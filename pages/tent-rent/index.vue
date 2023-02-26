<template>
    <Breadcrumbs :items="breadcrumbs" Class="card--breadcrumbs" />
    <SectionOurClients :clients="clients" sectionTitle="Наши клиенты" sectionSubTitle="В самых разных городах страны" />
    <SectionQuestions />
    <SectionOptionalEquipment subTitle="Дополнительное оборудование" />
</template>

<script setup>
import fullColorImprintImage from '@/assets/img/clients/full-color-imprint.jpg'
import logosDrawingImage from '@/assets/img/clients/logos-drawing.jpg'
import logosDrawing2Image from '@/assets/img/clients/logos-drawing-2.jpg'
const breadcrumbs = [
    {
        path: '/',
        name: 'Главная'
    },
    {
        path: '/mobile-tents',
        name: 'Мобильные шатры'
    },
    {
        path: '/tent-rent',
        name: 'Аренда шатра'
    },
]
const clients = [
            {
                title: 'Полноцветная запечатка шатров',
                text: 'Общий бюджет  —  200 000 ₽',
                img: fullColorImprintImage
            },
            {
                title: 'Нанесение логотипов на фризы крыш',
                text: 'Общий бюджет  —  30 000 ₽',
                img: logosDrawingImage
            },
            {
                title: 'Нанесение логотипов на фризы крыш',
                text: 'Общий бюджет  —  10 000 ₽',
                img: logosDrawing2Image
            },
            {
                title: 'Полноцветная запечатка шатров',
                text: 'Общий бюджет  —  200 000 ₽',
                img: fullColorImprintImage
            },
            {
                title: 'Нанесение логотипов на фризы крыш',
                text: 'Общий бюджет  —  30 000 ₽',
                img: logosDrawingImage
            },
            {
                title: 'Нанесение логотипов на фризы крыш',
                text: 'Общий бюджет  —  10 000 ₽',
                img: logosDrawing2Image
            }
        ]
</script>

<style lang="scss">

</style>