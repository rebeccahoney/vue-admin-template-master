<template>
  <div>
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input v-model="searchModel.book_name" placeholder="书名" />
          <el-button type="primary" round icon="el-icon-search" @click="getBookList">查询</el-button>

        </el-col>
        <el-col :span="4" align="right">
          <el-button type="primary" icon="el-icon-plus" circle @click="handleAdd">新增笔记</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table :data="bookList" stripe style="width: 100%">
        <el-table-column type="index" lab el="#" width="80" />
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="bookName" label="bookName" width="180" />
        <el-table-column prop="description" label="description" width="180" />
        <el-table-column prop="note" label="note" width="180" />
        <el-table-column prop="time" label="time" width="180" />
        <el-table-column label="action" width="180" />
        <el-table-column>
          <template v-slot="scope">
            <el-button value="value" @click="handleUpdate(scope.row)">编辑</el-button>
            <el-button value="value" @click="deleteUser(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :title="diagtitle" :visible.sync="dialogVible">
      <el-form :model="PopUpForm" label-width="100px">
        <el-form-item label="BookName" prop="book_name">
          <el-select
            v-model="PopUpForm.book_name"
            placeholder="请选择"
            size="mini"
            @change="selectMethod"
          >
            <el-option
              v-for="(item, index) in PopUpForm"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-select
            v-model="value2"
            multiple
            collapse-tags
            style="margin-left: 20px"
            size="mini"
            placeholder="请选择"
          >
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button size="mini" type="primary" @click="addData">添加</el-button>

        </el-form-item>

        <el-form-item label="Description" prop="description">
          <el-input v-model="PopUpForm.description" />
        </el-form-item>
<!--        <el-form-item label="note" prop="note">-->
<!--          <el-input v-model="PopUpForm.note" />-->
<!--        </el-form-item>-->
        <el-form-item label="Date" prop="time">
          <el-date-picker
            v-model="PopUpForm.time"
            @change="changeDate()"
            type="daterange"
            align="center"
            unlink-panels
            range-separator="~"
            start-placeholder="Start date"
            end-placeholder="End date"
            show-week-number="true"
            size="small"
            class="date-class"
            :format="format"
            :picker-options="pickerOptionsType"
            value-format="yyyy-MM-dd"
            prefix-icon="calendar-icon"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <el-button value="value" @click="submitOperation(scope.row)">提交</el-button>
      <el-button value="value" @click="cancelOperation">取消</el-button>
    </el-dialog>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import bookApi from '@/api/Book'
export default {
  name: 'Book',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      PopUpForm: {},
      total: 0,
      diagtitle: '',
      dialogVible: false,
      searchModel: {
        pageNo: 1,
        pageSize: 5
      },
      bookList: []
    }
  },
  created() {
    this.getBookList()
  },
  methods: {
    // 提交
    submitOperation(row) {

    },
    // add interface
    handleAdd() {
      this.diagtitle = '增加笔记'
      this.dialogVible = true
    },
    // 查询接口
    getBookList() {
      bookApi.getAllReadList(this.searchModel).then(response => {
        this.bookList = response.data.row
        this.total = response.data.all
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
#search .el-input{
  width: 200px;
  margin-right: 10px;
}
</style>
