let sizesArr = []
export const useTentOrderSizesStore = defineStore('TentOrderSizesStore', {
    state: () => {
        return {
            sizes: [],
            dataFetched: false
        }
    },
    actions: {
        async fetchData() {
            const { data: response } = await useFetch('/api/tent-order-sizes-params')
            sizesArr = response.value.data
            for (const size of sizesArr) {
                size.price = size.basePrice
                size.optionsPrice = 0
                size.framePrice = 0
                size.typePrice = 0
                for (let i = 0; i < size.additional.colors.length; i++) {
                    if(i === 0) {
                        size.additional.colors[i].choosen = true
                    }
                    else {
                        size.additional.colors[i].choosen = false
                    }
                }
                for (let i = 0; i < size.additional.frames.length; i++) {
                    if(i === 0) {
                        size.additional.frames[i].choosen = true
                    }
                    else {
                        size.additional.frames[i].choosen = false
                    }
                }
                for (let i = 0; i < size.additional.types.length; i++) {
                    if(i === 0) {
                        size.additional.types[i].choosen = true
                    }
                    else {
                        size.additional.types[i].choosen = false
                    }
                }
                for (let i = 0; i < size.additional.options.length; i++) {
                    size.additional.options[i].choosen = false
                }
            }
            return this.sizes = sizesArr
        },
        calcTypePrice(sizeIdx) {
            let typePrice = 0
            for(const type of this.sizes[sizeIdx].additional.types) {
                if(type.choosen) {
                    typePrice += type.price
                }
            }
            this.sizes[sizeIdx].typePrice = typePrice
        },
        calcFramePrice(sizeIdx) {
            let framePrice = 0
            for(const frame of this.sizes[sizeIdx].additional.frames) {
                if(frame.choosen) {
                    framePrice += frame.price
                }
            }
            this.sizes[sizeIdx].framePrice = framePrice
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
        calcPrice(sizeIdx) {
            this.sizes[sizeIdx].price =
            this.sizes[sizeIdx].basePrice + this.sizes[sizeIdx].optionsPrice + this.sizes[sizeIdx].typePrice + this.sizes[sizeIdx].framePrice
        },
    },
})