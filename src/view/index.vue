<!--
- Author:  Cy.
- Date:    2017/12/6.
- File:    index.
-->
<template>
  <div class="wrap">
    <div class="slider">
      <img src="../../static/image/images/index01_02.png" alt="">
    </div>
    <div class="wrap-content">
      <div style="border: 1px solid #ffffff;overflow: hidden;display: flex;flex-direction: column">
        <div class="wrap-content-u">
          <div class="wrap-content-l">
            <img class="wrap-content-img" src="../../static/image/map.png" alt="">
          </div>
          <div class="wrap-content-r">
            <img class="wrap-content-img" src="../../static/image/news.png" alt="">
          </div>
        </div>
        <div class="wrap-content-d">
          <div class="wrap-content-common">
            <div class="img-bg">
              <img src="../../static/image/c_map.png" alt="">
            </div>
            <div class="img-bg">
              <img src="../../static/image/c_map.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        userName: this.$store.getters.getUserName,
        passWord: this.$store.getters.getPassWord
      }
    },
    mounted() {
      console.log(this.userName,this.passWord)
    },
    components: {}
  }
</script>

<style>
  .wrap{
    width: 100%;
    height: 100%;
    background: url("../../static/image/index-bg.png");
  }
  .slider img{
      width: 100%;
  }
  .wrap-content{
    overflow: hidden;
    padding: 5px;
  }
  .wrap-content-u{
    flex: 1;
    display: flex;
  }
  .wrap-content-d{
    flex: 2;
    display: flex;
  }
  .wrap-content-l{
    flex: 1;
  }
  .wrap-content-r{
    flex: 2;
  }
</style>