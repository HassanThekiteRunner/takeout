<!--
 * @Author: your name
 * @Date: 2021-02-20 15:36:24
 * @LastEditTime: 2021-03-07 21:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\login\textlogin.vue
-->
<template>
  <div id="login">
    
    <van-field
      autosize
      v-model="sms"
      center
      clearable
      label="手机号"
     
    >
      <!-- <van-icon name="cross" size='big'  color="red"/> -->
      <template #button>
        <van-button :disabled='disabled' size="small" type="default" @click="button">{{resend}}</van-button>
      </template>
    </van-field>
    <van-field
      autosize
      v-model="sms1"
      center
      clearable
      label="验证码"
      
    >
    </van-field>
    <p>
      温馨提示，未注册蜂鸟外卖账号的手机号，登录时将自动注册，且代表已同意<span
        >《用户服务协议》</span
      >
    </p>
    <div class="divs">
      <van-button class="button" type="primary" @click="denglu">登录</van-button>
    </div>
    <p class="p">关于我们</p>
  </div>
</template>

<script>

import {login} from '../../http/login/login'
export default {
  props: {},
  data() {
    return {
      sms: "",
      sms1: "",
      timer:null,
      time:60,
      disabled:false,
      resend:'获取验证码'
    };
  },
  methods: {
    button(){
     if(this.sms==''){
       this.sms='请输入手机号'
       return;
     }else if(this.sms.search(/^1[3578]\d{9}$/)==-1){
       this.sms='手机号格式错误'
       return;
     }

     this.$store.state.phone=this.sms
     this.timer=setInterval(()=>{
       this.disabled=true,
        this.time--,
        this.resend=this.time+'秒后重新发送'
      if(this.time<0){
        this.time=60
        clearInterval(this.timer)
        this.disabled=false
        this.resend='发送验证码'
      }

     },500)
    login().then((res)=>{
      console.log(res)
      this.sms1=res.code
    })
      

    },
    denglu(){
        if(this.sms1=='') return;
        this.$router.push('/home')
      }
  },
  components: {
   
  },
};
</script>

<style scoped lang="less">
#login {
  
  .van-field {
    width: 3rem;
    height: 0.4rem;
    font-size: 0.12rem;
    border: solid 0.01rem #ccc;
    margin: 0 auto;
    margin-top: 0.15rem;
    border-radius: 0.03rem;
    span {
      font-size: 0.1rem;
      margin-top: -0.03rem;
      color: #666;
    }
  }

  .van-button {
    font-size: 0.16rem;
    margin: 0 auto;
    border: none;
    outline: none;
  }
  p {
    width: 3rem;

    margin: 0 auto;
    font-size: 0.118rem;
    margin-top: 0.2rem;
    span {
      color: green;
    }
  }
  .divs {
      margin: 0 auto;
      width: 3rem;
     .button {
      width: 3rem;
      
      color: #fff;
      border-radius: 0.02rem;
      height: 0.4rem;
      font-size: 0.14rem;
      margin-top: 0.2rem;
     }
  }
  .p{
      text-align: center;
  }
}
</style>
