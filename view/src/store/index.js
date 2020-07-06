import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
    strict: true,
    
    state: {
        CID: '1111',
        test : '我是在vuex里的缓存数据',
        num: 2,
    },
    mutations: {
        setCid(state, str){
            state.CID = str
        },
        settest(state, str){
            state.test = str
        }
    },
    actions: {
        setCid({commit},id) {
            // let inf = plus.push.getClientInfo();
            // let id = inf.clientid;
            commit('setCid', id)
        },
        settest({commit},id) {
            // let inf = plus.push.getClientInfo();
            // let id = inf.clientid;
            commit('settest', id)
        }
    },
    getters: {

    },
    modules: {

    }
}); 

export default store;
