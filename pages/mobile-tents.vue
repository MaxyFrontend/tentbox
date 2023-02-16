<template>
    <Breadcrumbs :items="breadcrumbs" />
    <SectionMobileTentsPrimary />
    <SectionMobileTentsSizes />
    <SectionOurClients />
    <SectionSomeNew sectionSubTitle="И очень полезное" />
    <SectionQuestions />
    <SectionQuickChoose sectionTitle="Следующий шаг" sectionSubTitle="Какая у вас задача" />
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
]
</script>