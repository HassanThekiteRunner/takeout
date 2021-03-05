<!--
 * @Author: your name
 * @Date: 2021-02-20 14:39:26
 * @LastEditTime: 2021-02-22 22:22:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\views\search\search.vue
-->
<template>
    <div>
      <Srarch>
          <span slot="search">搜索</span>
      </Srarch>
      <Foot></Foot>
    </div>
</template>

<script>
import Foot from '../../components/foot'
import Srarch from '../../components/head/head'
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
        Srarch
    },
};
</script>

<style scoped lang="less">

</style>

