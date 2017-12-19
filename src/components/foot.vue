<template>
  <div class="foot">
    <div v-show="!showPay" class="foot-l" :class="[changeFlag===false?'hover-style':'']" @click="changePage('left')">
      <div class="foot-l-img">
        <img :src="leftImg" alt="">
      </div>
      <div class="title">{{titleLeft}}</div>
    </div>
    <div  v-show="!showPay" class="foot-l" :class="[changeFlag===true?'hover-style':'']" @click="changePage('righ')">
      <div class="foot-l-img">
        <img :src="rightImg" alt="">
      </div>
      <div class="title">{{titleRight}}</div>
    </div>
    <div class="pay" v-show="showPay">
      <span style="color: #ffffff">总价</span>
      <span style="color: yellow;font-size: 20px">￥450</span>
    </div>
    <div class="pay-btn-box" v-show="showPay">
      <span class="pay-btn">支付</span>
    </div>
  </div>
</template>

<script scoped>
  export default{
    data(){
      return {
        changeFlag: false
      }
    },
    props: {
      titleLeft: {
        type: String,
        default: '交 通'
      },
      titleRight: {
        type: String,
        default: '服 务'
      },
      leftImg: {
        type: String,
        default: '../../static/image/car.png'
      },
      rightImg: {
        type: String,
        default: '../../static/image/phone.png'
      },
      showPay: {
        type: Boolean,
        default: false
      }
    },
    methods:{
      changePage (data) {
        console.log(data)
        if (data === 'left') {
          this.changeFlag = false
        } else {
          this.changeFlag = true
        }
      }
    },
    components: {}
  }
</script>

<style>
.foot{
  width: 100%;
  height: 63px;
  background-color: #007C48;
  position: fixed;
  bottom: 0;
}
.foot-l{
  float: left;
  width: 50%;
  height: 100%;
  background-color: #009366;
  color: #ffffff;
}
.foot-l-img{
  height: 26px;
  width: 50px;
  margin: 0 auto;
}
.foot-l-img img{
  width: 100%;
}
.title{
  text-align: center;
  color: #ffffff;
  margin-top: 15px;
}
.hover-style{
  background-color: #35976E;
}
  .pay{
    line-height: 63px;
    padding-left: 40px;
    float: left;
  }
  .pay-btn{
    padding: 10px 50px;
    border-radius: 10px;
    background-color: #5ECEA7;
    color: #fff;
    font-size: 20px;
  }
  .pay-btn-box{
    margin-top: 18px;
    float: right;
    margin-right: 10px
  }
</style>