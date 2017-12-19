<template>
  <div class="blog-wrap">
     <div class="header">
       <div class="header-wrap">
         <div class="header-wrap-l">
         </div>
         <div class="header-wrap-r">
           <ul>
             <li>Home</li>
             <li>Service</li>
             <li>Portfolio</li>
             <li>Team</li>
             <li>Blog</li>
             <li>Contact</li>
           </ul>
         </div>
       </div>
     </div>
     <div style="width:100%;margin:0px auto;height:400px">
        <!-- 配置slider组件 -->
        <slider :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
     <div class="more-wrap">
       <div class="more-common">
         <div class="more-logo"></div>
         <div class="more-title">
           Custom Designs
         </div>
         <div class="more-introduce">
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
         </div>
         <div class="more-button">
           <span>Read More</span>
         </div>
       </div>
       <div class="more-common">
         <div class="more-logo"></div>
         <div class="more-title">
           Custom Designs
         </div>
         <div class="more-introduce">
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
         </div>
         <div class="more-button">
           <span>Read More</span>
         </div>
       </div>
       <div class="more-common">
         <div class="more-logo"></div>
         <div class="more-title">
           Custom Designs
         </div>
         <div class="more-introduce">
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
         </div>
         <div class="more-button">
           <span>Read More</span>
         </div>
       </div>
       <div class="more-common">
         <div class="more-logo"></div>
         <div class="more-title">
           Custom Designs
         </div>
         <div class="more-introduce">
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
           beenbeenbeenbeenbeenbeenbeen
         </div>
         <div class="more-button">
           <span>Read More</span>
         </div>
       </div>
     </div>
     <div class="portfolio">
       <div class="portfolio-wrap">
         <div class="portfolio-title">
           Portfolio
         </div>
         <div class="portfolio-image">
           <img src="../../static/blog-img/images/564bd78a29bc9_1024_13.png" alt="">
         </div>
         <div class="portfolio-image">
           <img src="../../static/blog-img/images/564bd78a29bc9_1024_13.png" alt="">
         </div>
         <div class="portfolio-image">
           <img src="../../static/blog-img/images/564bd78a29bc9_1024_13.png" alt="">
         </div>
         <div class="portfolio-image">
           <img src="../../static/blog-img/images/564bd78a29bc9_1024_13.png" alt="">
         </div>
         <div class="portfolio-image">
           <img src="../../static/blog-img/images/564bd78a29bc9_1024_13.png" alt="">
         </div>
         <div class="portfolio-image">
           <img src="../../static/blog-img/images/564bd78a29bc9_1024_13.png" alt="">
         </div>
         <div class="see-wrap">
           <span class="see-btn">
             See all works
           </span>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
  import slider from 'vue-concise-slider'
  export default{
    data(){
      return {
        pages:[
          {
            html: '<div class="slider1"></div>',
            style: {
            }
          },
          {
            html: '<div class="slider2">slider2</div>',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: '<div class="slider3">slider3</div>',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 100,
          autoplay:1000,
          loop:true,
          direction:'horizontal',
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 300
        }
      }
    },
    components: {slider},
    methods: {
      // Listener event
      slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="less">
  .header{
    height: 74px;
    width: 100%;
    background-color: #ffffff;
  }
  .header-wrap{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header-wrap-l{
    float: left;
    display: block;
    height: 30px;
    width: 90px;
    background: url("../../static/blog-img/logo.jpg");
    background-size: 90px 30px;
    background-repeat: no-repeat;
    margin-top: 22px;
  }
  .header-wrap-r{
    float: right;
  }
  .header-wrap-r ul>li{
    float: left;
    padding: 29px;
    font-size: 12px;
    cursor: pointer;
  }
  .header-wrap-r ul>li:hover{
    color: #5bcbcc;
    border-bottom: 2px solid #5bcbcc;
  }
  .slider1{
    height: 100%;
    width: 100%;
    background: url("../../static/blog-img/images/long.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .more-wrap{
    overflow: hidden;
    width: 1000px;
    margin: 0 auto 50px auto;
  }
  .more-common{
    float: left;
    height: 250px;
    width: 25%;
    text-align: center;
    margin-top: 50px;
  }
  .more-logo{
    width: 80px;
    height: 80px;
    background: url("../../static/blog-img/rouket.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 10px auto;
  }
  .more-introduce{
    word-wrap: break-word;
    padding: 0 30px;
    font-size: 12px;
  }
  .more-button{
    margin-top: 10px;
    cursor: pointer;
  }
  .more-button span{
    padding: 3px 16px;
    background-color: #5bcbcc;
    font-size: 12px;
    border-radius: 4px;
    color: #fff;
  }
  .more-title{
    font-weight: 600;
    padding: 10px 0;
  }
  .portfolio-image{
    float: left;
    width: 31.3%;
    padding: 10px;
  }
  .portfolio{
    background-color: #F1F1F1;
  }
  .portfolio-wrap{
    width: 1000px;
    margin: 0 auto;
  }
  .portfolio-image img{
    width: 100%;
  }
  .see-wrap{
   padding-bottom: 80px;
  }
  .see-btn{
    display: block;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: #49CBCD;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    margin: 650px auto 0px auto;
  }
  .portfolio-title{
    overflow: hidden;
    font-size: 20px;
    font-weight: 600;
    width: 100px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-top: 50px;
    color: #545760;
  }
</style>