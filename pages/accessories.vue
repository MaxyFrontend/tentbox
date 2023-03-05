<template>
    <Breadcrumbs :items="breadcrumbs" />
    <SectionAccessoriesPrimary />
    <SectionPromoBags />
    <SectionOurClients :clients="clients" sectionTitle="Наши клиенты" sectionSubTitle="В самых разных городах страны" />
    <SectionQuestions />
    <SectionOptionalEquipment ref="optionalEquipmentRef" title="Не аксессуары" subTitle="Прочее оборудование" />
</template>

<script setup>
import { onMounted } from 'vue';
import canvasBagsImage from '@/assets/img/clients/canvas-bags.jpg'
import polyesterBagsImage from '@/assets/img/clients/polyester-bags.jpg'
import etchedCanvasImage from '@/assets/img/clients/etched-canvas-bags.jpg'
import mobileTentsImage from '@/assets/img/mobile-tents.jpg'
import mobileFlagsImage from '@/assets/img/mobile-flags.jpg'
const breadcrumbs = [
    {
        path: '/',
        name: 'Главная'
    },
    {
        path: '/accessories',
        name: 'Аксессуары'
    }
]
const clients = [
    {
        title: 'Холщовые сумки с вытравкой',
        text: 'Общий бюджет  —  70 000 ₽',
        img: canvasBagsImage
    },
    {
        title: 'Полиэстеровые рюкзаки с шелкографией',
        text: 'Общий бюджет  —  130 000 ₽',
        img: polyesterBagsImage
    },
    {
        title: 'Холщовые сумки с вытравкой',
        text: 'Общий бюджет  —  60 000 ₽',
        img: etchedCanvasImage
    },
    {
        title: 'Холщовые сумки с вытравкой',
        text: 'Общий бюджет  —  70 000 ₽',
        img: canvasBagsImage
    },
    {
        title: 'Полиэстеровые рюкзаки с шелкографией',
        text: 'Общий бюджет  —  130 000 ₽',
        img: polyesterBagsImage
    },
    {
        title: 'Холщовые сумки с вытравкой',
        text: 'Общий бюджет  —  60 000 ₽',
        img: etchedCanvasImage
    }
]
const optionalEquipmentRef = ref('')

onMounted(() => {
    optionalEquipmentRef.value.optionalEquipmentArr[0].title = 'Мобильные шатры'
    optionalEquipmentRef.value.optionalEquipmentArr[0].subTitle = 'Монтаж за 2 минуты, компактное хранение и удобная транспортировка'
    optionalEquipmentRef.value.optionalEquipmentArr[0].types = ['3,0х3,0', '3,0х4,5', '3,0х6,0', '4,0х4,0']
    optionalEquipmentRef.value.optionalEquipmentArr[0].additionalClass = 'optional-equipment__mobile-tents-item'
    optionalEquipmentRef.value.optionalEquipmentArr[0].image = mobileTentsImage
    optionalEquipmentRef.value.optionalEquipmentArr[0].pathTo = '/mobile-tents'
    optionalEquipmentRef.value.optionalEquipmentArr[1].title = 'Мобильные флаги'
    optionalEquipmentRef.value.optionalEquipmentArr[1].subTitle = 'Быстросборные виндеры в четырех формах'
    optionalEquipmentRef.value.optionalEquipmentArr[1].image = mobileFlagsImage
    optionalEquipmentRef.value.optionalEquipmentArr[1].pathTo = '/mobile-flags'
})
// console.log(optionalEquipmentRef.value)
/* optionalEquipmentRef.optionalEquipment.value[0].title = 'Мобильные флаги'
optionalEquipmentRef.optionalEquipment.value[0].subTitle = 'Быстросборные виндеры в четырех формах' */
</script>

<style lang="scss"></style>