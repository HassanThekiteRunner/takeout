<!--
 * @Author: your name
 * @Date: 2021-02-22 22:07:57
 * @LastEditTime: 2021-02-22 22:19:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\head\head.vue
-->
<template>
    <div id="head">
        <slot name="home"></slot>
        <slot name="search"></slot>
        <slot name="listalt"></slot>
        <slot name="mine"></slot>
        
        
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

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    #head{
        background: green;
        height: .4rem;
        text-align: center;
        color: #fff;
        line-height: .4rem;

    }
</style>
