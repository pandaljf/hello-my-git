<template>
  <div>
    <div style="margin-bottom: 10px">
      用户名：<input type="text" v-model="userName">
    </div>
    <div>
      密码：<input type="text" v-model="passWord">
    </div>
    <div>
      <button @click="setPrams">登陆</button>
    </div>
    <button>
    <router-link :to="{ name: 'index'}">views</router-link>
    </button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        userName:'',
        passWord:'',
        test: this.$store.getters.getUserName
      }
    },
    methods:{
      setPrams() {
        this.$store.dispatch('setUserName',this.userName)
        this.$store.dispatch('setPassWord',this.passWord)
      },
      getPrams() {
        console.log(this.test)
      }
    },
    mounted() {
    },
    components: {}
  }
</script>

<style>

</style>