<!--
 * @Author: your name
 * @Date: 2021-02-20 20:57:56
 * @LastEditTime: 2021-02-22 20:28:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\login\clo.vue
-->
<template>
  <div class="clo">
    <van-field
      clearable
      v-model="tel"
      type="tel"
      placeholder="手机/邮箱/用户名"
    />
    <van-field center label="密码" v-model="pwd" clearable>
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-field>

     <van-field center v-model="tel1"  label="验证码" clearable>
       
    </van-field>
    <div class="txm" v-html="tel2" @click="button">
       
       </div>
    <div class="divs">
        <van-button type="primary" @click="username">登录</van-button>
    </div>
    <p>关于我们</p>
  </div>
</template>

<script>
import {user,tuxing} from '../../http/login/login'
export default {
  props: {},
  data() {
    return {
      tel: "",
      tel1: "",
      tel2: "",
      pwd:"",
       checked:false
    };
  },
  methods: {
    button(){
      tuxing().then((res)=>{
        this.tel2=res
      })
    },
    
    username(){
    //  user().then((res)=>{
    //    console.log(res)
    //  })

    if(this.tel==''){
      this.tel='手机/邮箱/用户名不能为空！'
      return 
    }else if(this.tel.search(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/)==-1){
      this.tel='账号格式不正确'
      return
    }else if(this.pwd==''){
      this.pwd='密码不能为空'
      return
    }else if(this.pwd.search(/^(\w){6,20}$/)==-1){
      this.pwd='密码格式不正确'
      return
    }

    
    if(this.tel1=='') return
        this.$router.push('/home')
    }
  },
  mounted() {
    tuxing().then((res)=>{
      this.tel2=res
    })
  },
  components: {},
};
</script>

<style scoped lang="less">
.clo {
  position: relative;
  .van-field {
    width: 3rem;
    border: 1px solid #ccc;
    border-radius: 0.02rem;
    margin: 0 auto;
    margin-top: 0.2rem;
    height: .4rem;
    
  }
    .txm{
      position: absolute;
      top: 1.15rem;
      right: .1rem;
    }
 .divs{
     width: 3rem;
     margin:  0 auto;
     .van-button{
         color: #fff;
         width: 100%;
         border-radius: .03rem;
         margin-top: .2rem;
         font-size: .14rem;
     }
 }
 p{
     text-align: center;
     margin-top: .2rem;
     font-size: .12rem;
 }
}
</style>
