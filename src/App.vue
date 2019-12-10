<template>
  <div id="app">
    <el-menu mode="horizontal" router>
      <el-menu-item index="home">处理中心</el-menu-item>
      <el-menu-item index="login">消息中心</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2"
    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
