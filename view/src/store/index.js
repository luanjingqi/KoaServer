import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
    strict: true,
    state: {
        CID: ''
    },
    mutations: {
        setCid(state, str){
            state.CID = str
        }
    },
    actions: {
        setCid({commit}) {
            let inf = plus.push.getClientInfo();
            let id = inf.clientid;
            commit('setCid', id)
        }
    },
    getters: {

    },
    modules: {

    }
}); 

export default store;
