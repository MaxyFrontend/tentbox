<template>
    <Teleport to="body">
        <transition name="fade">
            <div class="mobile-menu" v-show="mobileMenuStore.MobileMenuOpened">
                <nav class="nav mobile-menu__nav">
                    <ul class="mobile-menu__nav-list nav--list">
                        <li ref="catalogListItem" :class="['mobile-menu__nav_list_item', 'nav-list__item', { 'sub-menu-visible': catalogSubMenuVisible }]"
                            @click="subMenuFunc($event)">
                            <span>КАТАЛОГ</span>
                            <div :class="['mobile-menu__list_item_sub-menu']">
                                <ul class="mobile-menu__sub-menu_list">
                                    <nuxt-link to="/mobile-tents" class="mobile-menu__sub-menu_link">Мобильные шатры</nuxt-link>
                                    <nuxt-link to="/mobile-flags" class="mobile-menu__sub-menu_link">Мобильные флаги</nuxt-link>
                                    <nuxt-link to="/" class="mobile-menu__sub-menu_link">Аксессуары</nuxt-link>
                                    <nuxt-link to="/" class="mobile-menu__sub-menu_link">Пагоды</nuxt-link>
                                    <nuxt-link to="/" class="mobile-menu__sub-menu_link">Модульные зонты</nuxt-link>
                                </ul>
                            </div>
                        </li>
                        <li class="mobile-menu__nav_list_item nav-list__item">
                            <nuxt-link to="/tent-rent">АРЕНДА</nuxt-link>
                        </li>
                        <li ref="contactsListItem" :class="['mobile-menu__nav_list_item', 'nav-list__item', { 'sub-menu-visible': contactsSubMenuVisible }]"
                            @click="subMenuFunc($event)">
                            <span>КОНТАКТЫ</span>
                            <div :class="['mobile-menu__list_item_sub-menu', { 'visible': contactsSubMenuVisible }]">
                                <a href="tel:+74957406584" class="mobile-menu__sub-menu_link">+7 495 740-65-84</a>
                                <a href="https://wa.me/79250241040" class="mobile-menu__sub-menu_link whatsapp--link">whatsapp</a>
                                <a href="https://t.me/tentbox" class="mobile-menu__sub-menu_link telegram--link">telegram</a>
                                <a href="mailto:hello@tentbox.ru" class="mobile-menu__sub-menu_link">hello@tentbox.ru</a>
                            </div>
                        </li>
                        <button type="button" class="mobile-menu__request-btn" @click="requestFormPopupStore.open()">оставить заявку</button>
                    </ul>
                </nav>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import DisableScroll from '@/composables/disable-scroll';
import EnableScroll from '@/composables/enable-scroll';
import { useMobileMenuStore } from '@/store/MobileMenuStore'
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
const mobileMenuStore = useMobileMenuStore()
const requestFormPopupStore = useRequestFormPopupStore()
const route = useRoute();
const catalogListItem = ref('')
const contactsListItem = ref('')
const catalogSubMenuVisible = ref(false)
const contactsSubMenuVisible = ref(true)
function subMenuFunc(e) {
    let currentEl = e.currentTarget
    if (!e.target.closest('.mobile-menu__list_item_sub-menu')) {
        if (currentEl === catalogListItem.value) {
            catalogSubMenuVisible.value = !catalogSubMenuVisible.value;
            contactsSubMenuVisible.value = false
        }
        if (currentEl === contactsListItem.value) {
            contactsSubMenuVisible.value = !contactsSubMenuVisible.value;
            catalogSubMenuVisible.value = false
        }
/*         document.addEventListener('click', function clickOutFunc(e) {
            if (!currentEl.contains(e.target) && e.target.closest('.mobile-menu__nav_list_item') !== catalogListItem.value && e.target.closest('.mobile-menu__nav_list_item') !== contactsListItem.value) {
                contactsSubMenuVisible.value = false
                catalogSubMenuVisible.value = false
                document.removeEventListener('click', clickOutFunc)
            }
        }) */
    }
}
mobileMenuStore.$subscribe(() => {
    if (mobileMenuStore.MobileMenuOpened) {
        contactsSubMenuVisible.value = true
        catalogSubMenuVisible.value = false
        DisableScroll()
        document.querySelector('body').style.paddingTop = window.getComputedStyle(document.querySelector('.header')).height
    }
    else {
        EnableScroll()
        document.querySelector('body').style.removeProperty('padding-top')
    }
})
watch(route, () => {
    mobileMenuStore.close()
})
defineExpose({ catalogListItem, contactsListItem })
</script>

<style lang="scss">
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 180px 20px 65px;
    z-index: 500;
    overflow-y: auto;
    display: none;
    &.fade-enter-active,
    &.fade-leave-active {
        transform: translateX(0);
        opacity: 1;
        transition: transform, opacity, 0.4s ease;
    }

    &.fade-enter-from {
        transform: translate(-100%, 0);
        opacity: 0;
    }
    &.fade-leave-to {
        opacity: 0;
        transition: transform, opacity, 0.4s ease;
    }
}
.nav {}
.mobile-menu__nav {}
.mobile-menu__nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.nav--list {}
.mobile-menu__nav_list_item {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: $dark-grey-color;
    margin-bottom: 32px;
    cursor: pointer;
    &>a,
    &>span {
        position: relative;
        cursor: pointer;
    }
    &>span::before,
    &>a::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background: $dark-grey-color;
        transform: translateX(-50%) scale(0, .5);
        transition: 0.2s ease;
    }
    &:hover a::before,
    &:hover span::before {
        transform: translateX(-50%) scale(1);
    }
    &:last-child {
        margin-bottom: 0;
    }
    &.sub-menu-visible>span::before {
        transform: translateX(-50%) scale(1);
    }
}
.nav-list__item {}
.mobile-menu__list_item_sub-menu {
    max-height: 0;
    overflow: hidden;
    transition: 0.4s ease;
    .sub-menu-visible & {
        max-height: 15rem;
    }
}
.mobile-menu__sub-menu_list {}
.mobile-menu__sub-menu_link {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-transform: none;
    margin-bottom: 20px;
    &:hover {
        text-decoration: underline;
    }
    &:first-child {
        margin-top: 38px;
    }
    &:last-child {
        margin-bottom: 0px;
    }
    &.whatsapp--link {
        color: #13932F;
    }
    &.telegram--link {
        color: #0D6F9F;
    }
}
.mobile-menu__request-btn {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.07em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: $blue-color;
    transition: $base-transition;
    &:hover {
        color: $red-color;
    }
}
@media (max-width:1000px) {
    .mobile-menu {
        display: block;
    }
}
@media (max-width:370px) {
    .mobile-menu {
        padding-top: 130px;
    }
    .mobile-menu__nav_list_item {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 26px;
    }
    .mobile-menu__request-btn {
        font-size: 14px;
        line-height: 18px;
    }
    .mobile-menu__sub-menu_link {
        font-size: 16px;
        line-height: 20px;
    }
    .mobile-menu__sub-menu_link {
        &:first-child {
            margin-top: 32px;
        }
    }
}
</style>