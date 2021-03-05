<!--
 * @Author: your name
 * @Date: 2021-02-22 21:50:33
 * @LastEditTime: 2021-02-22 22:21:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\views\listalt\listalt.vue
-->
<template>
    <div>
        <Listalt>
            <span slot="listalt">订单列表</span>
        </Listalt>
        <Foot></Foot>
    </div>
</template>

<script>
import Foot from '../../components/foot'
import Listalt from '../../components/head/head'
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
        Listalt
    },
};
</script>

<style scoped lang="less">

</style>
