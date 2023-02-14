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
@media(max-width:1700px) {
    .primary-section {
        padding-top: 10%;
    }
}
@media (max-width:700px) {
    .primary-section {
        padding-top: 20%;
    }
}
</style>