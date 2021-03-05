<!--
 * @Author: your name
 * @Date: 2021-02-24 19:59:49
 * @LastEditTime: 2021-02-24 21:23:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\remark\remark.vue
-->
<template>
    <div id="remark">
        <ul>
            <li>
                <router-link to="/trolley/diancan">点餐</router-link>
            </li>
            <li>
                <router-link to="/trolley/pingjia">评价</router-link>
            </li>
            <li>
                <router-link to="/trolley/shangjia">商家</router-link>
            </li>
        </ul>
        <router-view></router-view>
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
    mounted(){
        this.$router.replace('/trolley/diancan')
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    #remark{
        width: 100%;
        padding-top: .1rem;
      
        ul{
            display: flex;
            li{
                font-size: .14rem;
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
                a{
                    height: .3rem;
                    &.router-link-active{
                        color: green;
                        border-bottom: 3px solid green;
                    }
                }
            }
        }
    }
</style>
