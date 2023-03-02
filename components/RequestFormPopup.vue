<template>
    <Teleport to="body">
        <transition name="fade-in">
            <div class="request-form-popup" v-if="requestFormPopupStore.PopupOpened">
                <div class="request-form-popup__content">
                    <div class="request-form-wrapper">
                        <form action="#" class="request-form">
                            <button type="button" class="request-form__close-popup-btn" @click="requestFormPopupStore.close()"></button>
                            <h3 class="request-form__title overflow--hidden">
                                <span v-motion="{
                                    initial: {
                                        display: 'block',
                                        y: 100,
                                    },
                                    enter: {
                                        y: 0,
                                        transition: {
                                            duration: 500,
                                            delay: 200
                                        }
                                    }
                                }">
                                    Оставьте ваши данные
                                </span>
                            </h3>
                            <p class="request-form__sub-title overflow--hidden">
                                <span v-motion="{
                                    initial: {
                                        display: 'block',
                                        y: 100,
                                    },
                                    enter: {
                                        y: 0,
                                        transition: {
                                            duration: 500,
                                            delay: 400,
                                        }
                                    }
                                }">
                                    Мы свяжемся с вами практически сразу
                                </span>
                            </p>
                            <div class="request-form__fields-wrapper">
                                <div class="request-form__label-wrapper overflow--hidden">
                                    <label class="request-form__label"
                                        v-motion="{
                                            initial: {
                                                y: 100,
                                            },
                                            enter: {
                                                y: 0,
                                                transition: {
                                                    duration: 500,
                                                    delay: 400,
                                                }
                                            }
                                        }">
                                        <strong>ФИО</strong>
                                        <input type="text" class="request-form__input" placeholder="Иван Иванов *" tabindex="0">
                                    </label>
                                </div>
                                <div class="request-form__label-wrapper overflow--hidden">
                                    <label class="request-form__label"
                                        v-motion="{
                                            initial: {
                                                y: 100,
                                            },
                                            enter: {
                                                y: 0,
                                                transition: {
                                                    duration: 500,
                                                    delay: 400,
                                                }
                                            }
                                        }">
                                        <strong>E-mail</strong>
                                        <input type="text" class="request-form__input" placeholder="ivanov@mail.ru *">
                                    </label>
                                </div>
                                <div class="request-form__label-wrapper overflow--hidden">
                                    <label class="request-form__label"
                                        v-motion="{
                                            initial: {
                                                y: 100,
                                            },
                                            enter: {
                                                y: 0,
                                                transition: {
                                                    duration: 500,
                                                    delay: 400,
                                                }
                                            }
                                        }">
                                        <strong>Телефон</strong>
                                        <input type="text" class="request-form__input" placeholder="8 929 507-79-64 *">
                                    </label>
                                </div>
                                <div class="request-form__label-wrapper overflow--hidden">
                                    <label class="request-form__label"
                                        v-motion="{
                                            initial: {
                                                y: 100,
                                            },
                                            enter: {
                                                y: 0,
                                                transition: {
                                                    duration: 500,
                                                    delay: 400,
                                                }
                                            }
                                        }">
                                        <textarea class="request-form__textarea" placeholder="Ваш комментарий"></textarea>
                                    </label>
                                </div>
                            </div>
                            <div class="request-form__submit-btn-wrapper overflow--hidden">
                                <button class="black--btn request-form__submit-btn"
                                    v-motion="{
                                        initial: {
                                            y: 100,
                                        },
                                        enter: {
                                            y: 0,
                                            transition: {
                                                duration: 500,
                                                delay: 400,
                                            }
                                        }
                                    }">Оставить заявку
                                </button>
                            </div>
                            <p class="request-form__description"
                                v-motion="{
                                    initial: {
                                        opacity: 0
                                    },
                                    enter: {
                                        opacity: 1,
                                        transition: {
                                            delay: 400,
                                            duration: 500
                                        }
                                    }
                                }">
                                Оставляя заявку, вы даете согласие на обработку
                                персональных данных
                            </p>
                        </form>
                    </div>
                    <span class="request-form-caption">ЗАЯВКА</span>
                    <img src="@/assets/img/tents/tent-1-full.png" alt="tent" class="request-form-image">
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
import DisableScroll from '@/composables/disable-scroll';
import EnableScroll from '@/composables/enable-scroll';
import { useRequestFormPopupStore } from '@/store/RequestFormPopupStore'
import { useMobileMenuStore } from '@/store/MobileMenuStore'
const requestFormPopupStore = useRequestFormPopupStore()
requestFormPopupStore.$subscribe(() => {
    if (requestFormPopupStore.PopupOpened) {
        DisableScroll()
    }
    else {
        if (!mobileMenuStore.MobileMenuOpened) {
            EnableScroll()
        }
    }
})
const route = useRoute();
watch(route, () => {
    requestFormPopupStore.close()
})
const mobileMenuStore = useMobileMenuStore()
</script>

<style lang="scss">
.request-form-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    padding: 135px 135px 0;
    z-index: 700;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    &.fade-in-enter-active,
    &.fade-in-leave-active {
        transform: scale(1);
        opacity: 1;
        transition: transform, opacity, 0.3s ease;
    }

    &.fade-in-enter-from {
        transform: scale(0.4);
        opacity: 0;
    }
    &.fade-in-leave-to {
        transform: translateY(10%);
        opacity: 0;
        transition: transform, opacity, 0.2s ease;
    }
}
.request-form-popup__content {
    position: relative;
    flex-grow: 1;
}
.request-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.request-form__close-popup-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 36px;
    padding: 15px 0;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 2px;
        background: $dark-grey-color;
        transition: 0.2s ease;
    }
    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover::before,
    &:hover::after {
        background: $red-color;
    }
}
.request-form {
    position: relative;
    width: 100%;
    max-width: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
}
.request-form__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: $dark-grey-color;
    margin-bottom: 5px;
    text-align: center;
}
.request-form__sub-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: $grey-color;
    text-align: center;
}
.request-form__fields-wrapper {
    width: 100%;
    max-width: 300px;
    margin-top: 85px;
}
.request-form__label-wrapper {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.request-form__label {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
    & strong {
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-weight: 500;
        color: $dark-grey-color;
    }
    & strong::after {
        content: "—";
        font-weight: 300;
        display: block;
        margin: 0 7px;
    }
}
.request-form__input {
    font-weight: 400;
    color: #888888;
    display: block;
    padding: 10px 0;
}
.request-form__textarea {
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: left;
    padding: 10px 0;
    color: $grey-color;
    resize: none;
}
.request-form__submit-btn-wrapper {
    width: 100%;
}
.request-form__submit-btn {
    margin: 80px auto 0;
}
.request-form__description {
    width: 100%;
    max-width: 320px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #888888;
    margin-top: 17px;
}
.request-form-caption {
    font-family: 'Montserrat';
    font-weight: 700;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 329px;
    line-height: .8;
    color: #F8F8F8;
    overflow: hidden;
    z-index: -2;
}
.request-form-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 35vw;
    max-width: 600px;
    object-fit: contain;
    object-position: right top;
    z-index: -1;
}
@media (max-width:1900px) {
    .request-form-popup {
        padding: 100px 100px 0;
    }
    .request-form-caption {
        font-size: calc(100px + 100 * (100vw / 1600));
    }
    .request-form__fields-wrapper {
        margin-top: 60px;
    }
    .request-form__submit-btn {
        margin-top: 40px;
    }
}
@media (max-width:1600px) {
    .request-form-popup {
        padding: 50px 80px 0;
    }
    .request-form__title {
        font-size: 32px;
        line-height: 40px;
    }
    .request-form-caption {
        font-size: calc(100px + 100 * (100vw / 1600));
    }
    .request-form__fields-wrapper {
        margin-top: 60px;
    }
    .request-form__submit-btn {
        margin-top: 30px;
    }
}
@media (max-width:1400px) {
    .request-form-popup {
        padding: 30px 80px 0;
    }
    .request-form__submit-btn {
        margin-top: 20px;
    }
    .request-form-image {
        max-width: 400px;
    }
}
@media (max-width:1200px) {
    .request-form-popup {
        padding: 30px 40px 0;
    }
    .request-form__title {
        font-size: 28px;
        line-height: 36px;
    }
}
@media (max-width:700px) {
    .request-form-popup {
        padding: 20px;
    }
    .request-form__title {
        font-size: 26px;
        line-height: 34px;
    }
    .request-form__sub-title {
        font-size: 16px;
        line-height: 20px;
    }
    .request-form__label {
        justify-content: center;
    }
    .request-form__textarea {
        text-align: center;
    }
    .request-form__input {
        width: 100%;
        max-width: 130px;
    }
    .request-form-caption,
    .request-form-image {
        display: none;
    }
}
@media (max-width:370px) {
    .request-form__close-popup-btn {
        width: 30px;
    }
    .request-form {
        padding-top: 60px;
    }
    .request-form__fields-wrapper {
        margin-top: 40px;
    }
    .request-form__title {
        font-size: 22px;
        line-height: 30px;
    }
    .request-form__sub-title {
        font-size: 14px;
        line-height: 18px;
    }
    .request-form__label,
    .request-form__textarea {
        font-size: 16px;
        line-height: 20px;
    }
    .request-form__description {
        font-size: 12px;
        line-height: 16px;
    }
}
@media (max-height:650px) {
    .request-form {
        padding-top: 60px;
    }
}
</style>