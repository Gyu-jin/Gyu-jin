import Vue from 'vue'
import Vuex from 'vuex'

export const store = new Vuex.Store({
    sate:{
        price: 100
    },
    getters: {
        originalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price * 2;
        },
        triplePrice(state){
            return state.price * 3;
        },

    }
});