<template>
    <section :class="['breadcrumbs', Class]">
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
    Class:{
        type:String,
        required:false
    },
    items: {
        type: Array,
        required: true,
    }
})
</script>

<style lang="scss">
.breadcrumbs {
    margin: 100px 0 40px;
    &.card--breadcrumbs {
        margin: 0;
    }
}
.card--breadcrumbs-mobile {
    display: none;
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
        display: none;
    }
}
@media (max-width:1300px) {
    .breadcrumbs {
        margin-bottom: 30px;
    }
}
@media (max-width:1000px) {
    .breadcrumbs {
        margin-top: 54px;
        &.card--breadcrumbs {
            margin-top: 60px;
        }
    }
}
@media (max-width:700px) {
    .breadcrumbs-list__item {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: inherit;
        & a {
            padding: 0;
            text-transform: none;
        }
        & a.router-link-active {
            background: #F2F2F2;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 1px;
        }
        &::after {
            margin: 0 18px;
        }
    }
    .card--breadcrumbs {
        display: none;
    }
    .card--breadcrumbs-mobile {
        display: block;
    }
}
@media (max-width:370px) {
    .breadcrumbs {
        &.card--breadcrumbs {
            margin-top: 40px;
        }
    }
    .breadcrumbs-list__item {
        font-size: 14px;
        line-height: 18px;
    }
}
</style>