<template>
  <div>
    <el-card>
      <h1>这是添加页面</h1>
    </el-card>
    <el-form :model="addUserForm" label-width="70px">
      <el-form-item label="username" prop="username">
        <el-input v-model="addUserForm.username" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="addUserForm.password" />
      </el-form-item>
      <el-form-item label="phone" prop="phone">
        <el-input v-model="addUserForm.phone" />
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="addUserForm.email" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="el-dialog__footer">
      <el-button type="primary" @click="addUsers">添加</el-button>
    </span>
  </div>
</template>

<script>
import userApi from '@/api/userManager'
export default {
  data() {
    return {
      // 添加用户的表单数据
      addUserForm: {
      }}
  },
  methods: {
    addUsers() {
      console.log('this add user form is', this.addUserForm)
      userApi.addUser(this.addUserForm).then(response => {
        alert('添加成功')
        this.$router.push('/user/user')
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
