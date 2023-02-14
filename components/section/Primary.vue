<template>
    <section class="section primary-section">
        <div class="container primary-section__container">
            <PrimaryTitleBlock />
            <PrimaryNavBlock />
            <MobileTentsPromo />
        </div>
    </section>
</template>
<script setup>
</script>
<style lang="scss">
.primary-section {
    padding-top: 224px;
    &.section {
        padding-bottom: 35px;
    }
}
@media(max-width:1900px) {
    .primary-section {
        padding-top: 120px;
    }
}
@media(max-width:1600px) {
    .primary-section {
        padding-top: 8%;
    }
}
@media (max-width:700px) {
    .primary-section {
        padding-top: 60px;
    }
}
</style>