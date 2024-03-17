<template>
  <div class="forTab">
  <el-tabs v-show="activeName"  @tab-click="handleClick">
    <el-tab-pane label="书籍管理" name="first">
      <Tab1 ref="tab1"/>
    </el-tab-pane>
    <el-tab-pane label="书籍类型" name="second">
      <Tab2 ref="tab2"/>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import Tab1 from './tab1'
import Tab2 from './tab2'
export default {
  components: {
    Tab1,
    Tab2
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
      console.log(this.activeName)
    }
  }
}
</script>

<style scoped>
.forTab{
  padding-left: 45px;
}
</style>
