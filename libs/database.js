const mysql = require('mysql')
const co = require('co-mysql')
const config = require('../config')

let conn = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME 
})

module.exports = co(conn)
methods: {
    name() {
        
    }
},
data() {
    return {
        key: value
    }
},
created () {
    ;
},
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'

describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().mount()
        expect(vm.el.querySelector('.hello h1').textContent)
            .to.equal('Welcome to Your Vue.js App')
    })
})
router.afterEach((to, from) => {
    
};
computed: {
    () {
        return this.data 
    }
},
import New from '@/components/New.vue';
import header from '@/components/header.vue';
actions: {
    updateValue({commit}, payload) {
        commit('updateValue', payload);
    }
}
actions: {
    updateValue({commit}, payload) {
        commit('updateValue', payload);
    }
}
this.$route.params
import Name from '@/components/Name.vue'

export default {
    components: {
        Name
    },
} 
<template>
    

</template>

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        key: value
    }
});