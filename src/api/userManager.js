import request from '@/utils/request'

export default {
  getUserList(searchModel) {
    return request({
      url: '/sys/user/getUserList',
      method: 'get',
      params: {
        pageNo: searchModel.pageNo,
        pageSize: searchModel.pageSize,
        username: searchModel.username,
        phone: searchModel.phone
      }

    })
  },
  addUser(user) {
    return request({
      url: '/sys/user/add',
      method: 'post',
      data: user
    })
  },
  updateUser(user) {
    return request({
      url: '/sys/user/update',
      method: 'post',
      data: user
    })
  },
  getUserById(id) {
    return request({
      url: `/sys/user/${id}`,
      method: 'get'
    })
  },
  deleteUser(id) {
    return request({
      // url: '/sys/user/'+id,
      url: `/sys/user/${id}`,
      method: 'delete'
    })
  }

}
