<!--
 * @Author: your name
 * @Date: 2021-02-23 20:29:59
 * @LastEditTime: 2021-02-27 12:00:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\components\trolley\trolley.vue
-->
<template>
  <div id="getback">
    <Getback class="getback"></Getback>
    <div id="trolley">
      <ul>
        <li>
          <img class="imgs" :src="shangone.bgImg" alt="" />
          <img
            class="imgs_"
            :src="this.imgurl[this.xiabiao].image_path"
            alt=""
          />

          <div class="warm">
            <p class="p_">
              <span class="pin">品牌</span>
              <span>{{ this.imgurl[this.xiabiao].name }}</span>

              <van-icon
                is-link
                @click="showPopup"
                class="vanicon"
                name="play"
              />
            </p>
            <p class="p_1">
              <span>{{ shangone.score }}</span>
              <span>月售{{ shangone.sellCount }}单</span>
              <span>{{ shangone.description }}</span>
              <span>约{{ shangone.deliveryTime }}分钟</span>
              <span>距离{{ shangone.distance }}</span>
            </p>

            <p class="p_2" is-link @click="showPopup1">
              <span class="span1">{{ shangone1.name }}</span>
              <span class="span2">{{ shangone1.content }}</span>
              <span class="span3">8个优惠</span>
              <van-icon class="down" name="down" size="10px" />
            </p>

            <van-popup
              class="van-popup"
              v-model="show"
              :style="{ height: '1.8rem', width: '2.85rem' }"
            >
              内容
            </van-popup>

            <van-popup
              class="van-popup1"
              v-model="show1"
              position="bottom"
              :style="{ height: '2rem' }"
            >
              <p>优惠活动</p>
              <van-icon name="cross" color="#000" />

              <ul>
                <li v-for="(item, index) in shangone2.supports" :key="index">
                  <span class="shou">
                    {{ item.name }}
                    </span>
                  <span class="xin"> {{ item.content }}</span>
                </li>
              </ul>
            </van-popup>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <Remark></Remark>
    </div>
  </div>
</template>

<script>
import Getback from "../getback";
import Remark from "../../components/remark/remark";
// import {shangone} from '../../http/information/information'
export default {
  props: {},
  data() {
    return {
      imgurl: this.$store.state.imgurl,
      xiabiao: this.$store.state.xiabiao,
      shangone: [],
      shangone1: [],
      shangone2: [],
      show: false,
      show1: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup1() {
      this.show1 = true;
    },
  },
  mounted() {
    this.axios.get("/demo/data.json").then((res) => {
      console.log(res.data.info);
      this.shangone = res.data.info;
      this.shangone1 = res.data.info.supports[0];
      this.shangone2 = res.data.info;
      // console.log(res.data.info.support)
    });
  },
  components: {
    Getback,
    Remark,
  },
};
</script>

<style scoped lang="less">
#getback {
  position: relative;
  .getback {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }
}
#trolley {
  ul {
    li {
      position: relative;
      .imgs {
        width: 100%;
        height: 0.4rem;
      }
      .imgs_ {
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        top: 27%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #ccc;
      }
      .warm {
        // border: 1px solid;
        padding-top: 0.2rem;
        width: 3rem;
        margin: 0 auto;
        text-align: center;
        .p_ {
          overflow: hidden;

          .pin {
            background: yellow;
            font-size: 0.1rem;
            margin-right: 0.1rem;
            float: left;
            margin-left: 0.5rem;
            margin-top: 0.05rem;
            font-weight: bold;
          }
          :nth-of-type(2) {
            font-weight: bold;
            float: left;
          }
          .vanicon {
            color: #000;
            font-size: 0.14rem;
            float: left;

            margin-top: 0.055rem;
          }
        }
        .p_1 {
          font-size: 0.1rem;
          margin-top: 0.07rem;
          span {
            margin-right: 0.05rem;
          }
        }
        .p_2 {
          font-size: 0.1rem;
          border: 1px solid #ccc;
          width: 2.8rem;
          margin: 0 auto;
          margin-top: 0.05rem;
          padding-top: 0.03rem;
          padding-bottom: 0.03rem;
          overflow: hidden;
          padding-left: 0.085rem;
          span {
            margin-right: 0.05rem;
          }
          .span1 {
            background: green;
            color: #fff;
            font-size: 0.08rem;
            float: left;
          }
          .span2 {
            width: 1.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            float: left;
          }
          .span3 {
            float: left;
          }
          .down {
            float: left;
            margin-top: 0.03rem;
          }
        }
        .van-popup {
          border-radius: 0.05rem;
        }
        .van-popup1 {
          border-radius: 0rem;

          p {
            margin-top: 0.1rem;
            margin-bottom: 0.1rem;
            font-weight: bold;
          }
          .van-icon {
            position: absolute;
            top: 0.05rem;
            right: 0.05rem;
            font-weight: bold;
            font-size: 0.22rem;
          }

          ul {
            font-size: 0.12rem;
            text-align: left;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
            li {
              margin-bottom: 0.1rem;
              .shou {
                background-color:tomato;
                padding: .01rem;
                border: 1px solid;
                display: inline-block;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
