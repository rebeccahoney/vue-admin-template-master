<template>
  <div>
    <!--search box-->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input v-model="searchModel.username" placeholder="用户名" />
          <el-input v-model="searchModel.phone" placeholder="PHONE" />
          <el-button type="primary" round icon="el-icon-search" @click="getUserList">查询</el-button>

        </el-col>
        <el-col :span="4" align="right">
          <el-button type="primary" icon="el-icon-plus" circle @click="handleAdd">新增</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table :data="userList" stripe style="width: 100%">
        <el-table-column type="index" label="#" width="80" />
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="username" label="username" width="180" />
        <el-table-column prop="password" label="password" width="180" />
        <el-table-column prop="phone" label="phone" width="180" />
        <el-table-column prop="email" label="email" width="180" />
        <el-table-column label="action" width="180" />
        <el-table-column>
          <template v-slot="scope">
            <el-button value="value" @click="handleUpdate(scope.row)">编辑</el-button>
            <el-button value="value" @click="deleteUser(scope.row.id)">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
    </el-card>
    <el-pagination
      :current-page="searchModel.pageNo"
      :page-sizes="[5,10,20,50]"
      :page-size="searchModel.pageSize"
      layout="total,sizes,prev,pager,next,jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import userApi from '@/api/userManager'
export default {
  data() {
    return {
      formLabelWidth: '130px',
      userForm: {},
      dialogFormVisible: false,
      title: '',
      total: 0,
      searchModel: {
        pageNo: 1,
        pageSize: 5
      },
      userList: []
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    deleteUser(id) {
      userApi.deleteUser(id).then(response => {
        alert('删除成功')
        this.getUserList()
      })
    },
    handleUpdate(row) {
      this.$router.push({
        name: 'userUpdate',
        params: {
          id: row.id,
          username: row.username,
          password: row.password,
          phone: row.phone,
          email: row.email
        }})
    },
    handleAdd() {
      this.$router.push('/userAdd')
    },
    handleSizeChange(pageSize) {
      this.searchModel.pageSize = pageSize
      this.getUserList()
    },
    handleCurrentChange(pageNo) {
      this.searchModel.pageNo = pageNo
      this.getUserList()
    },
    getUserList() {
      userApi.getUserList(this.searchModel).then(response => {
        this.userList = response.data.rows
        this.total = response.data.total
      })
    }
  }
}
</script>
<style scoped>
#search .el-input{
  width: 200px;
  margin-right: 10px;
}
.el-dialog .el-input{
  width: 85%;
}
</style>
