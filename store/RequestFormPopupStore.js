export const  useRequestFormPopupStore  = defineStore('RequestFormPopupStore', {
    state: ()=> {
       return {
           PopupOpened: false
       }
    },
    actions: {
       change() {
           this.PopupOpened = !this.PopupOpened
       },
       close() {
           this.PopupOpened = false;
       },
       open() {
           this.PopupOpened = true
       }
    }
   })