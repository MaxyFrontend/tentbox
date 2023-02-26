let sizesArr = []
export const useTentRentSizesStore = defineStore('TentRentSizesStore', {
    state: () => {
        return {
            sizes: [],
            dataFetched: false
        }
    },
    actions: {
        async fetchData() {
            const { data: response } = await useFetch('/api/tent-rent-sizes-params')
            sizesArr = response.value.data
            for (const size of sizesArr) {
                size.price = size.basePrice
                size.colorPrice = 0
                size.optionsPrice = 0
                size.daysPrice = 0
                for (let i = 0; i < size.additional.colors.length; i++) {
                    if(i === 0) {
                        size.additional.colors[i].choosen = true
                    }
                    else {
                        size.additional.colors[i].choosen = false
                    }
                }
                for (let i = 0; i < size.additional.options.length; i++) {
                    if(i === 0) {
                        size.additional.options[i].choosen = true
                    }
                    else {
                        size.additional.options[i].choosen = false
                    }
                }
                for (let i = 0; i < size.additional.days.length; i++) {
                    if(i === 0) {
                        size.additional.days[i].choosen = true
                    }
                    else {
                        size.additional.days[i].choosen = false
                    }
                }
            }
            return this.sizes = sizesArr
        },
        calcColorPrice(sizeIdx) {
            let colorPrice = 0
            for(const color of this.sizes[sizeIdx].additional.colors) {
                if(color.choosen) {
                    colorPrice += color.price
                }
            }
            this.sizes[sizeIdx].colorPrice = colorPrice
        },
        calcOptionsPrice(sizeIdx) {
            let optionsPrice = 0
            for(const option of this.sizes[sizeIdx].additional.options) {
                if(option.choosen) {
                    optionsPrice += option.price
                }
            }
            this.sizes[sizeIdx].optionsPrice = optionsPrice
        },
        calcDaysPrice(sizeIdx) {
            let daysPrice = 0
            for(const day of this.sizes[sizeIdx].additional.days) {
                if(day.choosen) {
                    daysPrice += day.price
                }
            }
            this.sizes[sizeIdx].daysPrice = daysPrice
        },
        calcPrice(sizeIdx) {
            this.sizes[sizeIdx].price =
            this.sizes[sizeIdx].basePrice + this.sizes[sizeIdx].optionsPrice + this.sizes[sizeIdx].daysPrice + this.sizes[sizeIdx].colorPrice
        }
    },
})