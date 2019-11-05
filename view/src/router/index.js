import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import login from '../view/login'
import list from '../view/listView'
import Time from '../components/Time'



Vue.use(Router)

export default new Router({
    routes: [
        {
          path : '/',  
          component :   login 
      },{
            path:'/Home',
            component :  Home  
      },
      {
        path:'/Time',
        component :  Time  
        },
        {
            path:'/list',
            component :  list  
        },

  ],
      mode: "history"
  })