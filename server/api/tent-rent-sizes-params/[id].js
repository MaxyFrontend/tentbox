import data from "./tent-rent-sizes-params.json"
export default defineEventHandler((event) => {
    if(event.context.params) {
        if(typeof event.context.params.id !== undefined) {
            const newData = data[event.context.params.id]
            return newData
        }
    }
    else {
        return data
    }
})