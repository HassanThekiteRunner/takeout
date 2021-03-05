<!--
 * @Author: your name
 * @Date: 2021-02-20 20:56:20
 * @LastEditTime: 2021-02-25 13:05:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\login\login.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-02-20 15:36:24
 * @LastEditTime: 2021-02-20 20:56:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\textlogin.vue
-->
<template>
  <div>

    <Getback class="getback"></Getback>
 
  <div id="textlogin">
    <h1>蜂鸟外卖</h1>
    <ul>
      <li><router-link to="/login/textlogin">短信登录</router-link></li>
      <li><router-link to="/login/clo">密码登录</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
   </div>
</template>

<script>
import Getback from '../getback'
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted(){
      // this.$router.push('/login/textlogin')
  },
  components: {
     Getback,
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
 .getback{
    color:#ccc;
    
  }
#textlogin {
  width: 100%;

 
  h1 {
    font-size: 0.36rem;
    color: green;
    text-align: center;
    margin-top: .5rem;
  }
  ul {
    list-style: none;
    width: 1.8rem;

    margin: 0 auto;
    font-size: 0.14rem;
    margin-top:.4rem;
    color: green;
    display: flex;
    li {
      width: 0.5rem;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
     
      a{
        display: inline-block;
        padding-bottom: .05rem;
        
      }
     .router-link-active{
        color: green;
        border-bottom: 3px solid green;
        
      }
    }
  }
}


</style>
