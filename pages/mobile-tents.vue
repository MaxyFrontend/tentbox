<template>
    <Breadcrumbs :items="breadcrumbs" />
    <SectionMobileTentsPrimary />
    <SectionMobileTentsSizes />
    <SectionOurClients sectionShortTitle="Для мероприятий" />
    <SectionSomeNew sectionSubTitle="И очень полезное" />
    <SectionQuestions />
    <SectionQuickChoose sectionTitle="Следующий шаг" sectionSubTitle="Какая у вас задача" />
</template>
<script setup>
const breadcrumbs = [
    {
        path: '/',
        name: 'Главная'
    },
    {
        path: '/mobile-tents',
        name: 'Мобильные шатры'
    },
]
</script>