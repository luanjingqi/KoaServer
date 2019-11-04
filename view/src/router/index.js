import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import login from '../view/login'



Vue.use(Router)

export default new Router({
    routes: [
        {
          path : '/',  
          component :  Home   
      },{
            path:'/login',
            component :  login 
      },
  ],
        mode: "history"
  })