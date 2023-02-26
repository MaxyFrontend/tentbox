<template>
    <Breadcrumbs :items="breadcrumbs" Class="card--breadcrumbs" />
    <SectionTentOrderCard />
    <SectionTentsBranding />
    <SectionOurClients sectionTitle="Наши клиенты" sectionSubTitle="На мероприятиях Москвы и Московской области" />
    <SectionService />
    <SectionQuestions />
    <SectionOptionalEquipment subTitle="Дополнительное оборудование" />
</template>

<script setup>
const breadcrumbs = [
    {
        path: '/',
        name: 'ГЛАВНАЯ'
    },
    {
        path: '/mobile-tents',
        name: 'Мобильные шатры'
    },
    {
        path: '/tent-order',
        name: 'ПОКУПКА ШАТРА'
    },
]
</script>

<style lang="scss"></style>