/*
 * @Author: your name
 * @Date: 2021-02-20 14:39:26
 * @LastEditTime: 2021-02-24 21:17:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/waimai/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/waimai/Home.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue'),
  },
  {
    path: '/listalt',
    name: 'listalt',
    component: () => import('../views/listalt/listalt.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/mine.vue'),
  },
 
  {
    path: '/login',
    name: 'login',
   
    component: () => import('../components/login/login.vue'),
    children:[
      {
        path: 'textlogin',
        // name: 'textlogin',
       
        component: () => import('../components/login/textlogin.vue'),
      },
      {
        path: 'clo',
        // name: 'clo',
       
        component: () => import('../components/login/clo.vue'),
      },
    ]
  },
  {
    path:'/trolley',
    name:'trolley',
    component:()=>import('../components/trolley/trolley.vue')
    ,children:[
      {
        path:'/',
        component:()=>import('../components/remark/diancan.vue')
      },
      {
        path:'diancan',
        component:()=>import('../components/remark/diancan.vue')
      },
      {
        path:'pingjia',
        component:()=>import('../components/remark/pingjia.vue')
      },
      {
        path:'shangjia',
        component:()=>import('../components/remark/shangjia.vue')
      }
    ]
  }
 
 
]

const router = new VueRouter({
  routes
})

export default router
