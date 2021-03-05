<!--
 * @Author: your name
 * @Date: 2021-02-23 19:43:40
 * @LastEditTime: 2021-02-24 18:58:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\views\waimai\shops.vue
-->
<template>
  <div id="shops">
    <div>
      <van-icon name="bars" />
      <span>附近商家</span>
    </div>
    <div id="brand">
      <ul >
        <li  v-for="(item,index) in trolley" :key="index">
          <router-link to="/trolley">
            <img @click="imgs(index)" :src="item.image_path" alt="" />
          </router-link>
          <div class="middle">
            <p class="pin">
              <span>品牌</span>
              <span class="jia">{{ item.name }}</span>
            </p>
            <p class="p_">
              <van-rate
                v-model="value"
                :size="10"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
                allow-half
              />
              <span class="rating">{{ item.rating }}</span>
              <span class="yue">月售{{ item.recent_order_num }}单</span>
            </p>
            <p class="peisong">
              <span>￥{{ item.float_minimum_order_amount }}起送</span>
              <span>{{ item.piecewise_agent_fee.tips}}</span>
            </p>
          </div>
          <div class="bao">
              <span v-for="(ite,index) in item.supports " :key="index">{{ite.icon_name}}</span>
              <span class="feng">{{item.delivery_mode.text}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { shops } from "../../http/home/home";
export default {
  props: {},
  data() {
    return {
      trolley: [],
      value: 4.6,
     
    };
  },
  methods: {
    imgs(index){
      // this.$router.push('/trolley')
      this.$store.state.imgurl=this.trolley
      this.$store.state.xiabiao=index
      
    }
    
  },
  mounted() {
    shops().then((res) => {
      // console.log(res.data);
      this.trolley = res.data;
      
    });
  },
  components: {},
};
</script>

<style scoped lang="less">
#shops {
  div {
    overflow: hidden;
    .van-icon {
      margin-top: 0.05rem;
      float: left;
      margin-left: 0.1rem;
    }
    span {
      font-size: 0.12rem;
      margin-left: 0.05rem;
      float: left;
      margin-top: 0.04rem;
    }
  }
}
#brand {
  width: 100%;
  padding: 0.1rem;

  ul {
    li {
      margin-bottom: 0.2rem;
      overflow: hidden;
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.075rem;
        float: left;
      }
      .middle {
        margin-left: 0.05rem;
        width: 1.7rem;
        float: left;
        // border: 1px solid;
        position: relative;
        .pin {
          width: 2rem;
          //   border: 1px solid;
          height: 0.25rem;
          :first-of-type{
            background: yellow;
            
          }
          .jia{
            font-size: .13rem;
            font-weight: bold;
          }
        }
        .p_ {
          //   margin-top: 0.1rem;
          .van-rate {
            float: left;
            margin-top: 0.05rem;
            padding-left: 0.05rem;
          }
          .rating {
            float: left;
            font-size: 0.1rem;
            color: #ffd930;
          }
          .yue {
            float: left;

            font-size: 0.1rem;
          }
        }
        .peisong {
          margin-top: 0.07rem;
          float: left;
          span {
            font-size: 0.1rem;
          }
        }
      }
      .bao{
        padding-top: .04rem;
        text-align: center;
        overflow: hidden;
        span{
        
         border: 1px solid #ccc;
          font-size: .1rem;
          margin-bottom: .1rem;
        }
        .feng{
          
          font-size: .08rem;
          border: 1px solid #23b286;
          color: #23b286;
          margin-left: .06rem;
        }
      }
    }
  }
}
</style>
