<!--
 * @Author: your name
 * @Date: 2021-02-20 14:39:26
 * @LastEditTime: 2021-02-23 19:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\views\Home.vue
-->
<template>
  <div>
    <div>
      <Home>
        <div  slot="home">
          <van-icon class="span_1" name="search" />
        <p class="dingwei">{{ dizhi }}</p>
        <span id="span_2">
          <van-icon name="user-circle-o" />
        </span>
        <div id="span_">
        <router-link to="/login/textlogin">登录|注册</router-link>
       </div>
        </div>

      </Home>
      <Lunbo></Lunbo>
      <Shops></Shops>
    </div>

    <Foot></Foot>
    
    <router-view></router-view>
  </div>
</template>

<script>
import Foot from "../../components/foot";
import Home from "../../components/head/head";
import {jwd} from "../../http/home/home";
import Lunbo from './lunbo'
import Shops from './shops'
export default {
  props: {},
  data() {
    return {
      dizhi: "",
    };
  },
  methods: {
    
  },
  created() {
     jwd().then((res) => {
    //   console.log(res.data);
      this.dizhi = res.data.name;
    });
  },
  mounted() {
       jwd().then((res) => {
    //   console.log(res.data);
      this.dizhi = res.data.name;
    });
    if(this.$store.state.phone!=''){
        span_.style.display='none',
        span_2.style.display='block'
    }else{
        span_.style.display="block",
        span_2.style.display='none'
    }
    
  },

  components: {
    Foot,
    Home,
    Lunbo,
    Shops
  },
};
</script>

<style scoped lang="less">
#span_ {
  position: absolute;
  top: 0;
  right: .15rem;
a{
    color: #fff;
    font-size: .12rem;
}
}
.span_1 {
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.08rem;
  font-size: 0.25rem;
}
#span_2 {
  position: absolute;
  top: 0.02rem;
  right: 0.15rem;
    font-size: .2rem;
}
.dingwei {
  height: 100%;
  width: 1.5rem;
  margin-left: .85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

