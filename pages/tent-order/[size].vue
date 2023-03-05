<template>
    <Breadcrumbs :items="breadcrumbs" Class="card--breadcrumbs" />
    <Breadcrumbs :items="mobileBreadcrumbs" Class="card--breadcrumbs card--breadcrumbs-mobile" />
    <SectionTentOrderCard v-if="IsPageExist" :isMobileOrTablet="isMobileOrTablet" />
    <section v-else>
        <div class="container">
            <h1>Этого размера не существует</h1>
        </div>
    </section>
    <SectionTentsBranding />
    <SectionOurClients sectionTitle="Наши клиенты" sectionSubTitle="На мероприятиях Москвы и Московской области" />
    <SectionService />
    <SectionQuestions />
    <SectionOptionalEquipment subTitle="Дополнительное оборудование" />
</template>

<script setup>
const { size } = useRoute().params
const { data: orderSizesData } = await useFetch('/api/tent-order-sizes')
const orderSizes = orderSizesData.value.data
const IsPageExist = ref(false)
const isPageExistFunc = () => {
    for (let orderSize of orderSizes) {
        if (orderSize.path === size) {
            return true
        }
    }
    return false
}
IsPageExist.value = isPageExistFunc()
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
        path: `/tent-order/${size}`,
        name: 'Покупка шатра'
    },
]
const mobileBreadcrumbs = [
    {
        path: '/mobile-tents',
        name: 'Назад',
    },
    {
        path: `/tent-order/${size}`,
        name: 'Покупка шатра'
    },
]
const isMobileOrTablet = ref(false)
onMounted(() => {
    const { $isMobile, $isTablet } = useNuxtApp()
        if ($isMobile() || $isTablet()) {
            return isMobileOrTablet.value = true
        }
})
</script>

<style lang="scss"></style>