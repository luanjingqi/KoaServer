import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'



Vue.use(Router)

export default new Router({
    routes: [
        {
          path : '/',  
          component :  Home   
      },
    //   {
    //     path : '/pro',  
    //     component :  mypro 
    // },
    // {
    //     path : '/form',  
    //     component :  myform 
    // },
  ],
      mode: "history"
  })