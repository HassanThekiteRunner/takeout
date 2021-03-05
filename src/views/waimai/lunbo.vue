<!--
 * @Author: your name
 * @Date: 2021-02-23 11:19:58
 * @LastEditTime: 2021-03-01 11:54:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\views\waimai\lunbo.vue
-->
<template>

  <swiper class="swiper"  ref="mySwiper" :options="swiperOptions">
    <swiper-slide >
        <div id="slideshow">
            <ul>
              
                <li v-for="item in list" :key="item.id">
                    <img :src="'http://fuss10.elemecdn.com'+ item.image_url" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </swiper-slide>
    <swiper-slide >
        <div id="slideshow">
            <ul>
              
                <li v-for="item1 in list1" :key="item1.id">
                    <img :src="'http://fuss10.elemecdn.com'+ item1.image_url" alt="">
                    <span>{{item1.title}}</span>
                </li>
            </ul>
        </div>
    </swiper-slide>

     <!-- <div class="swiper-button-prev"></div> -->
     <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- <div class="swiper-button-next"></div> -->
    <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 
</template>

<script>
import {lun} from '../../http/home/home'
export default {
  name: "carrousel",
  data() {
    return {
        list:[],
        list1:[],
// notNextTick: true,
      swiperOptions: {
    pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      
       autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 slidesPerView: 1,

        loopAdditionalSlides: 2,

        spaceBetween: 0,

        initialSlide: 0,

        speed: 200,
        // loop:true, 

//  effect : 'cube',
//   cubeEffect: {
//     slideShadows: true,
//     shadow: true,
//     shadowOffset: 100,
//     shadowScale: 0.6
//   },
    
      },
    
    };
    
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  created(){
      
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
        lun().then((res)=>{
            // console.log(res)
            this.list=res.data.slice(0,8)
            this.list1=res.data.slice(8)
        })
  },
};
</script>
<style lang="less" scoped>

.swiper {
  
  padding-bottom: .1rem;
  border-bottom: 1px solid #ccc;
  position: relative;

//   --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
//     --swiper-navigation-color: #000;/* 单独设置按钮颜色 */
//     --swiper-navigation-size: 30px;/* 设置按钮大小 */
  .swiper-pagination{
    position: absolute;
      bottom:0;
      left: 0;
    --swiper-pagination-color:green;
  }
 
  #slideshow{
      width: 100%;
      ul{
        width: 100%;
         li{
             width: 25%;
             padding-bottom: .1rem;
             padding-top: .1rem;
           
             font-size: .12rem;
             text-align: center;
             display: flex;
            float: left;
             align-items: center;
             justify-content: center;
             flex-direction: column;
             img{
                display: flex;
                flex: 1;
                width: .5rem;
                 height: .5rem;
                 align-items: center;
                 justify-content: center;
                 margin-bottom: .1rem;
                
             }
         }
      }
  }
  
}
</style>