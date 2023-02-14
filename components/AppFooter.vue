<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__wrapper">
                <div class="footer__top">
                    <div class="footer__logo_inner">
                        <nuxt-link to="/" class="logo footer__logo">
                            <img src="@/assets/img/logo.svg" alt="logo" class="logo__image">
                        </nuxt-link>
                        <p class="logo__description footer__logo_description">
                            Мобильные шатры и визуальное
                            оборудование для вашего бизнеса
                        </p>
                    </div>
                </div>
                <div class="footer__bottom">
                    <nav class="nav footer__nav">
                        <ul class="footer__nav_list">
                            <li class="nav-list__item footer__nav_list_item">
                                <nuxt-link to="/mobile-tents">Мобильные шатры</nuxt-link>
                            </li>
                            <li class="nav-list__item footer__nav_list_item">
                                <nuxt-link to="mobile-flags">Мобильные флаги</nuxt-link>
                            </li>
                            <li class="nav-list__item footer__nav_list_item">
                                <a href="#promo-accessories">Аксессуары</a>
                            </li>
                            <li class="nav-list__item footer__nav_list_item">
                                <a href="#pagodas">Пагоды</a>
                            </li>
                        </ul>
                        <ul class="footer__nav_list">
                            <li class="nav-list__item footer__nav_list_item">
                                <a href="#mobile-umbrellas">Мобильные зонты</a>
                            </li>
                            <li class="nav-list__item footer__nav_list_item">
                                <nuxt-link to="tent-rent">Аренда</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <ul class="footer__contacts">
                        <li class="footer__contacts_item">
                            <a href="tel:+74957406584">+7 495 740-65-84</a>
                        </li>
                        <li class="footer__contacts_item">
                            <a href="tel:+79250241040">+7 925 024-10-40</a>
                        </li>
                        <li class="footer__contacts_item">
                            <a href="matlto:hello@tentbox.ru">hello@tentbox.ru</a>
                        </li>
                    </ul>
                    <div class="footer__info">
                        <p class="footer__copyrights">
                            TENTBOX 2023г.
                            <a href="#" target="_blank">Политика конфиденциальности</a>
                        </p>
                        <p class="footer__developers-and-design">
                            Дизайн и разработка от <img src="@/assets/img/project-caption.svg" alt="project-caption">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss">
.footer__logo_description {
    margin-top: 17px;
    flex-basis: 100%;
}
.footer {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 20px;
}
.footer__wrapper {
    margin: 0 auto;
}
.footer__top {
    display: flex;
    align-items: flex-start;
}
.footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 100px;
}
.footer__nav {
    width: 100%;
    max-width: 440px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-right: 20px;
    margin-bottom: 30px;
}
.footer__nav_list {
    margin-right: 125px;
    &:last-child {
        margin-right: 0;
    }
}
.footer__nav_list_item {
    font-weight: 400;
    color: $dark-grey-color;
    margin-bottom: 26px;
    & a:hover {
        text-decoration: underline;
    }
    &:last-child {
        margin-bottom: 0;
    }
}
.footer__contacts {}
.footer__contacts_item {
    font-weight: 400;
    margin-bottom: 26px;
    color: $dark-grey-color;
    & a:hover {
        color: $blue-color;
        text-decoration: underline;
    }
}
.footer__info {
    position: relative;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}
.footer__copyrights {
    width: fit-content;
    font-weight: 400;
    text-align: center;
    color: #888888;
    & a {
        display: block;
        margin-top: 8px;
        line-height: 1;
        &:hover {
            text-decoration: underline;
        }
    }
}
.footer__developers-and-design {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #C0C0C0;
    margin-left: auto;
    & img {
        margin-left: 6px;
    }
}
@media (max-width:1200px) {
    .footer {
        font-size: 16px;
        line-height: 20px;
    }
    .footer__nav_list_item,
    .footer__contacts_item {
        margin-bottom: 20px;
    }
    .footer__nav_list {
        margin-right: 100px;
    }
    .footer__bottom {
        margin-top: 70px;
    }
}
@media (max-width:900px) {
    .footer__developers-and-design {
        display: none;
    }
}
@media (max-width:700px) {
    .footer {
        padding-bottom: 15px;
    }
    .footer__wrapper {
        max-width: 280px;
    }
    .footer__logo_inner {
        text-align: center;
    }
    .footer__logo {
        margin: 0 auto;
        width: fit-content;
    }
    .footer__logo_description {
        margin-top: 10px;
    }
    .footer__top,
    .footer__bottom {
        justify-content: center;
        text-align: center;
    }
    .footer__bottom {
        margin-top: 50px;
    }
    .footer__nav {
        margin: 0;
        flex-direction: column;
        align-items: center;
    }
    .footer__nav_list {
        margin: 0 0 16px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .footer__copyrights {
        font-size: 14px;
        line-height: 17px;
    }
    .footer__contacts {
        display: none;
    }
}
</style>