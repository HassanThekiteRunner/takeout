<!--
 * @Author: your name
 * @Date: 2021-02-24 20:03:04
 * @LastEditTime: 2021-02-27 17:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\remark\diancan.vue
-->
<template>
  <div id="jisuan">
    <div id="diancan">
      <div class="left">
        <ul>
          <li
            :class="{ active: index == ind }"
            @click="qiehuan(index)"
            v-for="(item, index) in youhui"
            :key="index"
          >
            <img :src="item.icon" alt="" />
            <span>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="right">
        <input type="text" name="" id="" placeholder="优惠" />
        <div class="nangua">
          <ul>
            <li v-for="(item, index) in youhui[ind].foods" :key="index">
              <p>{{ item.name }}</p>
              <p>{{ item.description }}</p>
              <div>
                <span>月售{{ item.sellCount }}份</span>
                <span>好评率{{ item.rating }}%</span>
              </div>
              <p class="money">￥{{ item.price }}</p>
              <div class="calculate">
                <van-icon
                  @click="minus(index)"
                  class="minus"
                  name="minus"
                  color="#fff"
                />
                <span>{{ item.sum }}</span>
                <van-icon
                  @click="add(index)"
                  class="add"
                  name="add"
                  color="green"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <van-cell is-link @click="showPopup">
      <div class="gouwu">
        <div class="gou1">
          <van-icon class="che" name="shopping-cart" color="#ccc" />
          <div>
            <p>￥{{ totalprice }}</p>
            <p>另需配送费￥{{ four }}元</p>
          </div>
        </div>
        <div class="gou2" :style="color_">
          {{ erqi }}
        </div>
      </div>
    </van-cell>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '2.5rem' }"
      z-index="1"
      class="content"
    >
      <div class="head">
        <span>购物车</span>
        

  
        <span @click="qkong">清空</span>
      
      </div>
      <div>
        11111
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  props: {},
  data() {
    return {
      youhui: this.$store.state.ying.goods,
      nangua: [],
      ind: 0,
      show: false,
      four: 4,
      erqi: "￥20元起送",
      color_: {
        background: "",
      },
    
    };
  },
  methods: {
    
    
    
    qkong(){
    
Dialog.confirm({
  title: '提示',
  message: '确定清空购物车吗？',
})
  
    },
    showPopup() {
      this.show = true;
    },

    qiehuan(index) {
      this.ind = index;
      // console.log(this.youhui[this.ind].foods)
    },
    add(index) {
      console.log(index);
      this.youhui[this.ind].foods[index].sum++;
    },
    minus(index) {
      if (this.youhui[this.ind].foods[index].sum <= 0) {
        return false;
      }

      this.youhui[this.ind].foods[index].sum--;
      if (this.totalprice == 0) {
        this.erqi = "￥20元起送";
      }
    },
  },
  mounted() {
    this.axios.get("/demo/data.json").then((res) => {
      // console.log(res.data.goods[0].foods)
      console.log(res.data.goods);
    });

    
    
  },
  computed: {
    totalprice() {
      let totalprice = 0;
      // this.youhui[this.ind].foods.forEach((item)=>{
      //   console.log(item)
      //   totalprice+=item.sum*item.price
      // })
      for (let i = 0; i < this.youhui[this.ind].foods.length; i++) {
        console.log(this.youhui[this.ind].foods);
        totalprice +=
          this.youhui[this.ind].foods[i].sum *
          this.youhui[this.ind].foods[i].price;

        if (
          this.youhui[this.ind].foods[i].sum *
            this.youhui[this.ind].foods[i].price >
            0 &&
          this.youhui[this.ind].foods[i].sum *
            this.youhui[this.ind].foods[i].price <
            20
        ) {
          this.erqi = "还差￥" + (20 - totalprice) + "元起送";
          this.color_.background = "";
        } else if (totalprice > 20) {
          this.erqi = "结算";
          this.color_.background = "green";
        }
      }
      return totalprice;
    },
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
#jisuan {
  position: relative;

  .content{
      .head{
        overflow: hidden;
        font-size: .12rem;
        border: 1px solid #ccc;
        background: #ccc;
        height: .35rem;
        line-height: .35rem;
        :nth-of-type(1){
          float: left;
          padding: 0rem  .15rem;
        }
         :nth-of-type(2){
          float: right;
           padding: 0rem .15rem;
           color: blue;
        }
      }
  }

  .gouwu {
    width: 100%;
    height: 0.4rem;
    // border: 1px solid;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    overflow: hidden;

    .gou1 {
      width: 70%;
      background-color: #000;
      float: left;
      height: 100%;

      .che {
        border: 5px solid #000;
        border-radius: 50%;
        padding: 0.07rem;
        background: #666;
        position: fixed;
        bottom: 0.05rem;
        left: 0.1rem;
        z-index: 20;
        font-size: 0.2rem;
      }
      div {
        font-size: 0.12rem;
        margin-left: 0.6rem;
        padding-top: 0.03rem;
        :nth-of-type(1) {
          color: #fff;
          margin-left: 0.1rem;
        }
        :nth-of-type(2) {
          color: #ccc;
          margin-top: -0.06rem;
        }
      }
    }
    .gou2 {
      width: 30%;
      background: #666;
      float: left;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
    }
  }

  #diancan {
    width: 100%;
    //  padding-bottom: 1rem;
    .left {
      width: 20%;
      // border: 1px solid;
      box-sizing: border-box;
      float: left;
      ul {
        background-color: #ccc;
        li {
          height: 0.5rem;
          font-size: 0.12rem;
          text-align: center;
          line-height: 0.5rem;
          position: relative;

          img {
            width: 0.1rem;
            // height: .1rem;
            position: absolute;
            top: 40%;
            left: 10%;
          }
          span {
            display: inline-block;
            width: 80%;
            border-bottom: 1px solid;
            margin: 0 auto;
          }
        }
      }
    }
    .right {
      // border: 1px solid;
      box-sizing: border-box;
      float: left;
      width: 80%;
      input {
        font-size: 0.12rem;
        border-left: 1px solid;
        height: 0.25rem;
        padding-left: 0.1rem;
        width: 100%;
        background: #ccc;
      }
      .nangua {
        ul {
          margin-bottom: 1rem;

          li {
            border-bottom: 1px solid #ccc;
            padding: 0.1rem;
            padding-left: 0.5rem;
            width: 2.5rem;
            margin: 0 auto;
            font-size: 0.12rem;
            color: #666;
            overflow: hidden;
            padding-bottom: 0.17rem;
            .money {
              float: left;
              width: 0.3rem;
            }
            .calculate {
              width: 1rem;
              float: left;
              margin-left: 0.5rem;
              position: relative;
              padding-left: 0.3rem;
              .minus {
                border: 1px solid;
                border-radius: 50%;
                background-color: green;
                padding-left: 0.026rem;
                box-sizing: border-box;
                padding-top: 0.04rem;
                width: 0.2rem;
                height: 0.2rem;
                // display: none;
                display: block;
                position: absolute;
                top: 0;
                left: 0.3rem;
              }
              span {
                margin-left: 0.05rem;
                margin-right: 0.05rem;
                margin-top: -0.02rem;
                font-size: 0.16rem;
                // display: none;
                display: block;
                position: absolute;
                top: 0;
                left: 0.5rem;
              }
              .add {
                font-size: 0.2rem;
                position: absolute;
                top: 0;
                right: 0.03rem;
              }
            }
          }
          li > :nth-child(1) {
            color: #000;
          }
          li > :nth-child(4) {
            color: red;
          }
        }
      }
    }
  }
}
.active {
  background-color: #fff;
  color: green;
  border: 1px solid #fff;
}
@popup-close-icon-z-index: 1;
</style>
