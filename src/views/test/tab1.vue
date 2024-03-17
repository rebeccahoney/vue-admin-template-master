<template>
  <div>
    <el-card class="tabContent1">
      xxx
    </el-card>
    <el-card class="tabContent2">
      惊喜的夏天
    </el-card>
    <el-card class="tabContent3">
      植物
    </el-card>
  </div>
</template>

<script>
import bookApi from '@/api/Book'
export default {
  name: 'Tab1',
  data() {
    return {
      booList: [],
      bookName: []
    }
  },
  created() {
    this.getBookNameList()
  },
  methods: {
    getBookNameList() {
      bookApi.getALLlist().then(response => {
        this.bookList = response.data
        for (let i = 0; i < this.bookList.length; i++) {
          this.bookName.add(i, Object.values(this.bookList[i].bookName))
        }
        console.log(this.bookList.length)
        console.log(this.bookName)
      })
    }
  }
}
</script>

<style scoped >

div{
  display: inline-flex;
  padding-left: 200px;
  margin: 50px;
}
.tabContent1,.tabContent2,.tabContent3{
  width: 200px;
  height: 350px;
  padding-left: 20px;
  background-size: cover;
}
.tabContent1 {
  background-image: url("../../icons/1.jgp.webp");
}
.tabContent2{
  background-image: url("../../icons/t2.webp");
}
.tabContent3{
  background-image: url("../../icons/t3.webp");
}
</style>
