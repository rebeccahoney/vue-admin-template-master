<template>
  <div>
    <el-card>
      <el-col :span="4" align="right">
        <el-button type="primary" icon="el-icon-plus" circle @click="addBookOpt">新增书籍</el-button>
      </el-col>
    </el-card>
    <el-card>
      <el-table v-model="searchModel.bookName" :data="bookList" stripe style="width: 100%">
        <el-table-column type="index" width="20" /><el-table-column />
        <el-table-column prop="bookName" label="bookName" width="400" />
        <el-table-column prop="type" label="type" width="200" />
        <el-table-column label="action">
          <template v-slot="scope">
            <el-button @click="deleteOPT(scope.row.id)">delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :title="title" :visible.sync="dialogVible">
      <el-form :model="formSubmit" label-width="100px">
        <el-form-item label="bookName" prop="bookName">
          <el-input v-model="formSubmit.bookName"/>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="formSubmit.type"/>
        </el-form-item>
      </el-form>
      <el-button @click="addBooks">submit</el-button>
    </el-dialog>
  </div>
</template>

<script>
import bookApi from '@/api/Book'
export default {
  props: {
    title: {
      default: '新增书籍',
      type: String
    }
  },
  data() {
    return {
      formSubmit: {},
      searchModel: {
        pageNo: 1,
        pageSize: 5
      },
      dialogVible: false,
      total: 0,
      bookList: []
    }
  },
  created() {
    this.getBookNameList()
  },
  methods: {
    getBookNameList() {
      bookApi.getBooksList(this.searchModel).then(response => {
        this.bookList = response.data.row
        this.total = response.data.all
      })
    },
    addBookOpt() {
      this.dialogVible = true
    },
    addBooks() {
      console.log('this formsubmit', this.formSubmit)
      bookApi.addBook(this.formSubmit).then(response => {
        alert('添加成功')
        this.dialogVible = false
        this.getBookNameList()
      })
    },
    deleteOPT(id) {
      bookApi.deleteBookName(id).then(response => {
        alert('删除成功')
        this.getBookNameList()
      })
    }
  }
}
</script>

<style>
/* css样式可以忽略 */
.inp {
  outline: none;
  font-size: 15px;
  margin-left: 5px;
  margin-top: 15px;
  color: #000000;
  border-radius: 5px;
  padding: 10px 10px;
  border: 2px solid #e3e3e3;
}

.inp:focus {
  border: 2px solid #7fffd4;
  box-shadow: inset 1px 5px 16px 10px rgba(237, 172, 172, 0.5), 1px 5px 16px 10px rgba(237, 172, 172, 0.5);
}

.btn {
  width: 75px;
  border: 0px;
  height: 30px;
  font-size: 14px;
  color: #fff;
  line-height: 30px;
  margin-left: 15px;
  border-radius: 10px;
  transition: all .3s;
  background-color: #00a2ff;
}

.btn:hover {
  color: #fff;
  transition: all .3s;
  background-color: #ff0000;
}
</style>
