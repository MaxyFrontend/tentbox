<template>
    <header :class="['header', { 'mobile-menu-visible': mobileMenuStore.MobileMenuOpened }]">
        <div class="container header__container">
            <nuxt-link to="/" class="logo header__logo">
                <img src="@/assets/img/logo.svg" alt="logo">
            </nuxt-link>
            <nav class="nav header__nav">
                <ul class="nav--list header__nav_list">
                    <li class="nav-list__item header__nav_list_item nav-list__item_dropdown-trigger">
                        <span>КАТАЛОГ</span>
                        <div class="nav-list__item_dropdown nav-list__item_catalog-dropdown header__nav_list_item_dropdown">
                            <nuxt-link to="/mobile-tents" class="nav-list__item_dropdown_link">Мобильные шатры</nuxt-link>
                            <nuxt-link to="mobile-flags" class="nav-list__item_dropdown_link">Мобильные флаги</nuxt-link>
                            <nuxt-link to="/accessories" class="nav-list__item_dropdown_link">Аксессуары</nuxt-link>
                            <nuxt-link to="/" class="nav-list__item_dropdown_link">Пагоды</nuxt-link>
                            <nuxt-link to="/" class="nav-list__item_dropdown_link">Мобильные зонты</nuxt-link>
                        </div>
                    </li>
                    <li class="nav-list__item header__nav_list_item">
                        <nuxt-link to="/tent-rent">АРЕНДА</nuxt-link>
                    </li>
                    <li class="nav-list__item header__nav_list_item nav-list__item_dropdown-trigger">
                        <span>КОНТАКТЫ</span>
                        <div class="nav-list__item_dropdown nav-list__item_contacts-dropdown header__nav_list_item_dropdown">
                            <div class="nav-list__item_dropdown_group">
                                <strong class="nav-list__item_dropdown_group_title">Телефон</strong>
                                <div class="nav-list__item_dropdown_group_option">
                                    <span class="nav-list__item_dropdown_option_name">Офис</span>
                                    <a href="tel:+74957406584" class="nav-list__item_dropdown_option_link">+7 495 740-65-84</a>
                                </div>
                                <div class="nav-list__item_dropdown_group_option">
                                    <span class="nav-list__item_dropdown_option_name">WhatsApp</span>
                                    <a href="https://wa.me/79250241040" class="nav-list__item_dropdown_option_link">+7 925 024-10-40</a>
                                </div>
                            </div>
                            <div class="nav-list__item_dropdown_group">
                                <strong class="nav-list__item_dropdown_group_title">Почта</strong>
                                <div class="nav-list__item_dropdown_group_option">
                                    <span class="nav-list__item_dropdown_option_name">Клиентам</span>
                                    <a href="mailto:hello@tentbox.ru" class="nav-list__item_dropdown_option_link">hello@tentbox.ru</a>
                                </div>
                                <div class="nav-list__item_dropdown_group_option">
                                    <span class="nav-list__item_dropdown_option_name">Поставщикам</span>
                                    <a href="mailto:info@tentbox.ru" class="nav-list__item_dropdown_option_link">info@tentbox.ru</a>
                                </div>
                            </div>
                            <div class="nav-list__item_dropdown_group">
                                <strong class="nav-list__item_dropdown_group_title">Адрес</strong>
                                <p class="nav-list__item_dropdown_text">
                                    Пространство Хлебозавод №9
                                    г. Москва, ул. Новодмитровская, д. 1
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <a class="header__tel-link" href="tel:+74957406584">+7 495 740-65-84</a>
            <button type="button" @click="requestFormPopupStore.open()" class="header__request-btn">ОСТАВИТЬ ЗАЯВКУ</button>
            <button type="button" :class="['header__menu-btn', { 'active': mobileMenuStore.MobileMenuOpened }]" @click="mobileMenuStore.change()"></button>
        </div>
    </header>
</template>

<script setup>
import { useMobileMenuStore } from '~/store/MobileMenuStore'
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
const mobileMenuStore = useMobileMenuStore()
const requestFormPopupStore = useRequestFormPopupStore()
</script>

<style lang="scss">
.header {
    position: relative;
    padding: 43px 0;
    z-index: 600;
    &.mobile-menu-visible {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
}
.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__logo {
    margin-right: 20px;
    width: 100%;
    max-width: 105px;
    min-width: 74px;
}
.header__nav {
    margin-right: 66px;
    margin-left: auto;
}
.header__nav_list_item {
    position: relative;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.07em;
    margin-right: 66px;
    color: $dark-grey-color;
    &>a {
        position: relative;
    }
    &>a::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $dark-grey-color;
        transform: scale(0, .5);
        transition: .2s ease;
    }
    &>a:hover::before {
        transform: scale(1);
        transition: .2s ease-out;
    }
    &:last-child {
        margin-right: 0;
    }
}
.nav-list__item_dropdown-trigger {
    cursor: pointer;
    padding: 15px 0;
    &:hover .nav-list__item_dropdown {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 100%);
    }
}
.nav-list__item_dropdown {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 105%);
    width: 100vw;
    max-width: 300px;
    min-width: fit-content;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    border: 1px solid #4076CC;
    opacity: 0;
    visibility: hidden;
    cursor: auto;
    transition: 0.2s ease;
}
.nav-list__item_catalog-dropdown {
    max-width: 260px;
}
.nav-list__item_contacts-dropdown {
    max-width: 370px;
}
.header__nav_list_item_dropdown {}
.nav-list__item_dropdown_link {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 7px 0;
    margin: 0 auto;
    &:hover {
        text-decoration: underline;
    }
}
.nav-list__item_dropdown_group {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 32px;
    &:last-child {
        margin-bottom: 0;
    }
}
.nav-list__item_dropdown_group_title {
    display: block;
    font-weight: 700;
    margin-bottom: 16px;
}
.nav-list__item_dropdown_group_option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
}
.nav-list__item_dropdown_option_name {}
.nav-list__item_dropdown_option_link {
    font-weight: 500;
    &:hover {
        text-decoration: underline;
    }
}
.nav-list__item_dropdown_text {
    line-height: 24px;
}
.header__tel-link {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $dark-grey-color;
    transition: $base-transition;
    &:hover {
        color: $red-color;
    }
    &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $red-color;
        transform: scale(0, .5);
        transition: .2s ease;
    }
    &:hover::before {
        transform: scale(1);
        transition: .2s ease-out;
    }
}
.header__request-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.07em;
    text-decoration: underline;
    text-transform: uppercase;
    margin-left: 66px;
    color: #224E96;
    transition: $base-transition;
    &:hover {
        color: $red-color;
    }
}
.header__menu-btn {
    position: relative;
    width: 36px;
    height: 10px;
    padding: 15px 0;
    display: none;
    &::before,
    &::after {
        position: absolute;
        content: "";
        left: 0;
        width: 100%;
        height: 2px;
        background: $dark-grey-color;
        transition: 0.3s ease;
    }
    &::before {
        top: 10px;
    }
    &::after {
        bottom: 10px;
    }
    &.active::before {
        top: 50%;
        transform: rotate(45deg) translateY(-50%);
    }
    &.active::after {
        bottom: 50%;
        transform: rotate(-225deg) translateY(-50%);
    }
}
@media (max-width:1900px) {
    .header__nav {
        margin-right: 55px;
    }
    .header__nav_list_item {
        margin-right: 50px;
    }
    .header__request-btn {
        margin-left: 50px;
    }
    .nav-list__item_dropdown {
        padding: 30px;
    }
    .nav-list__item_catalog-dropdown {
        max-width: 240px;
    }
}
@media (max-width:1600px) {
    .header__nav {
        margin-right: 40px;
    }
    .header__nav_list_item {
        font-size: 12px;
        line-height: 15px;
        margin-right: 40px;
    }
    .header__request-btn {
        margin-left: 40px;
    }
    .header__tel-link {
        font-size: 14px;
        line-height: 18px;
    }
    .header__request-btn {
        font-size: 12px;
        line-height: 15px;
    }
    .nav-list__item_dropdown {
        max-width: 220px;
        padding: 24px;
    }
    .nav-list__item_contacts-dropdown {
        max-width: 320px;
    }
    .nav-list__item_dropdown_link,
    .nav-list__item_dropdown_group {
        font-size: 14px;
        line-height: 16px;
    }
    .nav-list__item_dropdown_link {
        padding: 6px 0;
    }
}
@media (max-width:1000px) {
    .header__nav,
    .header__tel-link,
    .header__request-btn {
        display: none;
    }
    .header__menu-btn {
        display: block;
    }
    .header {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
    }
}
@media (max-width:700px) {
    .header {
        padding: 24px 0;
    }
}
@media (max-width:370px) {
    .header__menu-btn {
        width: 30px;
    }
}
</style>