<!--
 * @Author: your name
 * @Date: 2021-02-20 14:39:26
 * @LastEditTime: 2021-02-20 20:52:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\App.vue
-->
<template>
    <div id="divs">
      <!-- <router-link to="/Home">home</router-link>
      <router-link to="/About">about</router-link> -->
      <router-view></router-view>
      <!-- <Textlogin></Textlogin> -->

    </div>
</template>

<script>
// import Textlogin from './components/foot'
export default {
  
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
      // Textlogin
    },
};

(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 750 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})();


</script>

<style  lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  // #divs{
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   display: flex;
  //   width: 100%;
   
  // }
</style>
