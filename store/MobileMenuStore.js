export const useMobileMenuStore = defineStore('MobileMenuStore', {
    state: () => {
        return {
            MobileMenuOpened: false
        }
    },
    actions: {
        change() {
            this.MobileMenuOpened = !this.MobileMenuOpened
        },
        close() {
            this.MobileMenuOpened = false;
        },
        open() {
            this.MobileMenuOpened = true
        }
    }
})