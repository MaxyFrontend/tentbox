<template>
    <section class="breadcrumbs">
        <div class="container breadcrumbs__container">
            <ul class="breadcrumbs-list">
                <li class="breadcrumbs-list__item" v-for="(item, idx) in items" :key="idx">
                    <nuxt-link :to="item.path"> {{ item.name }} </nuxt-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    }
})
</script>

<style lang="scss">
.breadcrumbs {
    margin: 100px 0 40px;
}
.container {}
.breadcrumbs__container {}
.breadcrumbs-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.breadcrumbs-list__item {
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $grey-color;
    & .router-link-active {
        text-decoration: underline;
    }
    & a {
        display: block;
        padding: 0 15px;
    }
    & a:hover {
        text-decoration: underline;
    }
    &:first-child a {
        padding-left: 0;
    }
    &::after {
        content: '—';
    }
    &:last-child::after {
        content: "";
    }
}
@media (max-width:1900px) {
    .breadcrumbs {
        margin-top: 5%;
    }
}
@media (max-width:1300px) {
    .breadcrumbs {
        margin-bottom: 30px;
    }
}
</style>