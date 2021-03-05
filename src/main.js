/*
 * @Author: your name
 * @Date: 2021-02-20 14:39:26
 * @LastEditTime: 2021-02-27 17:39:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//导入轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper,)


//导入字体图标库
import 'font-awesome/css/font-awesome.min.css'
// 导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//导入样式
import  Rescss from './assets/common.css'
import {obj} from './assets/utils'

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted(){
    obj.setRem();
    document.body.style.fontSize=.16+'rem';
    this.$router.push('/home')
  },

  render: h => h(App)
}).$mount('#app')
