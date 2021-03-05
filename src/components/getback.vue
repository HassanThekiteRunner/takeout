<!--
 * @Author: your name
 * @Date: 2021-02-24 10:02:29
 * @LastEditTime: 2021-02-25 13:01:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\getback.vue
-->
<template>
    <div class="getback" >
        <van-icon @click="getback"  name="arrow-left" size='.2rem'/>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        getback(){
            this.$router.go(-1)
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.getback{  
    margin-top: .1rem;
    position: absolute;
    top: 0;
    left: 0;
   
    z-index: 10;
}


</style>
