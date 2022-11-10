import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => (
        {   count: 0, 
            name: 'Eduardo' 
        }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    }
})