/*
 * @Author: your name
 * @Date: 2021-02-20 14:39:26
 * @LastEditTime: 2021-02-24 13:15:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ying from '../../public/demo/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone:'',
    imgurl:[],
    xiabiao:'',
    ying:ying

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
