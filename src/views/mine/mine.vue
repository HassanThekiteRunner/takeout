<!--
 * @Author: your name
 * @Date: 2021-02-22 21:51:06
 * @LastEditTime: 2021-02-22 22:14:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\views\mine\mine.vue
-->
<template>
    <div>
        <Head>
            <span slot="mine">我的</span>
        </Head>
        <Foot></Foot>
    </div>
</template>

<script>
import Foot from '../../components/foot'
import Head from '../../components/head/head'
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
        Foot,
        Head
    },
};
</script>

<style scoped lang="less">

</style>
