<template>
    <Breadcrumbs :items="breadcrumbs" Class="card--breadcrumbs" />
    <Breadcrumbs :items="mobileBreadcrumbs" Class="card--breadcrumbs card--breadcrumbs-mobile" />
    <SectionTentRentCard v-if="IsPageExist" :isMobileOrTablet="isMobileOrTablet" />
    <section v-else>
        <div class="container">
            <h1>Этого размера не существует</h1>
        </div>
    </section>
    <SectionOurClients :clients="clients" sectionTitle="Наши клиенты" sectionSubTitle="В самых разных городах страны" />
    <SectionQuestions />
    <SectionOptionalEquipment subTitle="Дополнительное оборудование" />
</template>

<script setup>
import fullColorImprintImage from '@/assets/img/clients/full-color-imprint.jpg'
import logosDrawingImage from '@/assets/img/clients/logos-drawing.jpg'
import logosDrawing2Image from '@/assets/img/clients/logos-drawing-2.jpg'
const { size } = useRoute().params
const { data: rentSizesData } = await useFetch('/api/tent-rent-sizes')
const rentSizes = rentSizesData.value.data
const IsPageExist = ref(false)
const isPageExistFunc = () => {
    for (let rentSize of rentSizes) {
        if (rentSize.path === size) {
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
        path: `/tent-rent/${size}`,
        name: 'Аренда шатра'
    },
]
const mobileBreadcrumbs = [
    {
        path: '/mobile-tents',
        name: 'Назад',
    },
    {
        path: `/tent-rent/${size}`,
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
const isMobileOrTablet = ref(false)
onMounted(() => {
    const { $isMobile, $isTablet } = useNuxtApp()
        if ($isMobile() || $isTablet()) {
            return isMobileOrTablet.value = true
        }
})
</script>

<style lang="scss"></style>