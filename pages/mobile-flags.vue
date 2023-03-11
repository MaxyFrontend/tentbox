<template>
    <Breadcrumbs :items="breadcrumbs" />
    <SectionMobileFlagsPrimary />
    <SectionMobileFlagsSizes />
    <SectionOurClients :clients="clients" sectionTitle="Наши клиенты" sectionSubTitle="В самых разных городах страны" />
    <SectionQuestions />
    <SectionOptionalEquipment ref="optionalEquipmentRef" title="Не мобильные флаги" subTitle="Прочее оборудование" />
</template>

<script setup>
import { onMounted } from 'vue';
import breezeImage from '@/assets/img/clients/breeze.jpg'
import doubleBreezeImage from '@/assets/img/clients/double-breeze.jpg'
import twoWingsImage from '@/assets/img/clients/two-wings.jpg'
import mobileTentsImage from '@/assets/img/mobile-tents.jpg'
const breadcrumbs = [
    {
        path: '/',
        name: 'Главная'
    },
    {
        path: '/mobile-flags',
        name: 'Мобильные флаги'
    }
]
const clients = [
    {
        title: 'Бриз 3,5м',
        text: 'Общий бюджет  —  17 500 ₽',
        img: breezeImage
    },
    {
        title: 'Два бриза 2,5м',
        text: 'Общий бюджет  —  28 000 ₽',
        img: doubleBreezeImage
    },
    {
        title: 'Два крыла 3,0м',
        text: 'Общий бюджет  —  32 000 ₽',
        img: twoWingsImage
    },
    {
        title: 'Бриз 3,5м',
        text: 'Общий бюджет  —  17 500 ₽',
        img: breezeImage
    },
    {
        title: 'Два бриза 2,5м',
        text: 'Общий бюджет  —  28 000 ₽',
        img: doubleBreezeImage
    },
    {
        title: 'Два крыла 3,0м',
        text: 'Общий бюджет  —  32 000 ₽',
        img: twoWingsImage
    },
]
const optionalEquipmentRef = ref('')

onMounted(() => {
    optionalEquipmentRef.value.optionalEquipmentArr[0].title = 'Мобильные шатры'
    optionalEquipmentRef.value.optionalEquipmentArr[0].subTitle = 'Монтаж за 2 минуты, компактное хранение и удобная транспортировка'
    optionalEquipmentRef.value.optionalEquipmentArr[0].types = [
        {
            name:'3,0х3,0',
            path:'/tent-order/3x3/'
        },
        {
            name:'3,0х4,5',
            path:'/tent-order/3x4/'
        },
        {
            name:'3,0х6,0',
            path:'/tent-order/3x6/'
        },
        {
            name:'4,0х4,0',
            path:'/tent-order/4x4/'
        },
    ]
    optionalEquipmentRef.value.optionalEquipmentArr[0].additionalClass = 'optional-equipment__mobile-tents-item'
    optionalEquipmentRef.value.optionalEquipmentArr[0].image = mobileTentsImage
    optionalEquipmentRef.value.optionalEquipmentArr[0].pathTo = '/tent-order/3x3/'
})
</script>

<style lang="scss"></style>