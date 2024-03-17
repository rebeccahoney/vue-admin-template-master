<template solot-scope="scope">
  <div>
    <el-card>
      <h1>这是修改用户页面</h1>
    </el-card>
    <el-form label-width="70px">
      <el-form-item label="username" prop="username">
        <el-input v-model="updateForm.username" @input="change($event)" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="updateForm.password" @input="change($event)" />
      </el-form-item>
      <el-form-item label="phone" prop="phone">
        <el-input v-model="updateForm.phone" @input="change($event)" />
      </el-form-item>
      <el-form-item label="email" prop="username">
        <el-input v-model="updateForm.email" @input="change($event)" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="el-dialog__footer">
      <el-button type="primary" @click="updateUsers">提交</el-button>
    </span>
  </div>
</template>

<script>
import userApi from '@/api/userManager'
export default {
  data() {
    return {
      updateForm: {
      }
    }
  },
  created() {
    // 回显数据
    this.updateForm.id = this.$route.params.id
    this.updateForm.password = this.$route.params.password
    this.updateForm.username = this.$route.params.username
    this.updateForm.email = this.$route.params.email
    this.updateForm.phone = this.$route.params.phone
  },
  methods: {
    change(e) {
      this.$forceUpdate()
    },
    updateUsers() {
      if (this.updateForm.id) {
        userApi.updateUser(this.updateForm).then(response => {
          alert('update success')
          this.$router.push('/user/user')
        }
        )
      } else {
        alert('uodate failed')
      }
    }
  }
}
</script>

<style scoped>

</style>
