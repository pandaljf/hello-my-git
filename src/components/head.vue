<template>
  <div class="head">
    <div class="head-l" @click="goBack">
      <img src="../../static/image/back-go.png" alt="">
    </div>
    <div class="head-m" v-show="middleShow">
      <span class="head-ml" :class="[changeFlag===false?'head-hover-style':'']" @click="changePage('left')">
        景点列表
      </span>
      <span class="head-mr" :class="[changeFlag===true?'head-hover-style':'']" @click="changePage('right')">
        地图概览
      </span>
    </div>
    <div class="head-m" v-show="!middleShow">
      <span class="view-name">{{moduleName}}</span>
    </div>
    <div class="head-r" v-show="rightShow">
      <img src="../../static/image/share.png" alt="">
    </div>
    <div class="head-r" v-show="!rightShow">
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        changeFlag:false
      }
    },
    props:{
      middleShow: {
        type: Boolean,
        default: true
      },
      rightShow: {
        type: Boolean,
        default: false
      },
      moduleName: {
        type: String,
        default: '在线购票'
      },
      goBack: {
        type:   Function,
        default: function () {
          history.go(-1)
        }
      }
    },
    watch:{},
    methods: {
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
  .head{
    position: fixed;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    height: 50px;
    width: 100%;
    background: #008B49;
    z-index: 999;
  }
  .head-l{
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
  .head-l img{
    width: 100%;
    vertical-align: middle;
  }
  .head-r{
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
  .head-r img{
    width: 100%;
    vertical-align: middle;
  }
  .head-m{
    align-self: center;
    width: 240px;
    text-align: center;
  }
  .head-ml{
    padding: 6px 10px;
    line-height: 50px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    color: #ffffff;
    background-color: #00B46A;
    font-size: 20px;
  }
  .head-mr{
    padding: 6px 20px;
    line-height: 50px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    color: #ffffff;
    background-color: #00B46A;
    font-size: 20px;
  }
  .head-hover-style{
   color: #000 !important;
   background-color: #ffffff !important;
  }
  .view-name{
    color: #fff;
    line-height: 50px;
    font-size: 24px;
  }
</style>