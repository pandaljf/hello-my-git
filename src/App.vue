<template>
  <div id="app">
    <!--页面缓存，会将输入里面的内容缓存在页面，从而让页面或组件不被销毁-->
    <!--<keep-alive>-->
      <!--<router-view/>-->
    <!--</keep-alive>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
