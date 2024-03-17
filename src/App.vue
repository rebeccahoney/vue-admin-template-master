<template>
  <div id="app">
    <v-app>
      <v-app-bar color="#ffffff" app>
        <v-img src="/Users/wangchenxi/Vue/vue-admin-template-master/src/icons/svg/tree.svg"></v-img>
      </v-app-bar>

    </v-app>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app{
  padding-left: 0px;
}
.app-main{
  padding-left: -20px;
}
.el-card{
  margin-bottom: 10px;
  margin-left: 45px;
}
</style>
