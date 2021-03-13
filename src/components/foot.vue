<!--
 * @Author: your name
 * @Date: 2021-02-20 15:12:03
 * @LastEditTime: 2021-03-06 13:21:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\foot.vue
-->
<template>
  <div class="foot">
    <ul>
      <!-- <li><router-link to="/Home">home</router-link></li>
            <li><router-link to="/About">about</router-link></li>
            <li><router-link to="/About">about</router-link></li>
            <li><router-link to="/About">about</router-link></li> -->
      <li>
        <router-link to="home">
        <i class="fa fa-mobile fa-lg"></i>
          <span>外卖</span>
          </router-link>
      </li>
      <li>
        <router-link to="search">
        <i class="fa fa-search fa-lg"></i>
          <span>搜索</span>
          </router-link>
      </li>
      <li>
        <router-link to="listalt">
        <i class="fa fa-list-alt fa-lg"></i>
          <span>订单</span>
          </router-link>
      </li>
      <li>
        <router-link to="mine">
        <i class="fa fa-user fa-lg"></i>
          <span>我的</span>
          </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;
}
.foot > ul {
  display: flex;
 
  border-top: 1px solid #ccc;
 
  
  padding-top: .05rem;
  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    i{
        font-size: .2rem;
        display: flex;
        align-items: center;
    justify-content: center;
    flex-direction: column;
    }
    span{
        display: inline-block;
        margin-top: .05rem;
        font-size: .12rem;
        
    }
    .router-link-active{
          color: green;
        }
  }
}
</style>
