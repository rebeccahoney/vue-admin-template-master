import request from '@/utils/request'
export default {
  // BOOKS - READ
  getAllReadList(searchModal) {
    return request({
      url: '/sys/read/getReadList',
      method: 'get',
      params: {
        pageNo: searchModal.pageNo,
        pageSize: searchModal.pageSize,
        book_name: searchModal.book_name
      }

    })
  },
  getALLlist() {
    return request({
      url: '/sys/read/allInfo',
      method: 'get'
    })
  },

  // BOOKSE TTINGS
  getBooksList(searchModal) {
    return request({
      url: '/sys/book/getBooksList',
      method: 'get',
      params: {
        pageNo: searchModal.pageNo,
        pageSize: searchModal.pageSize
      }

    })
  },
  addBook(bookName) {
    return request({
      url: '/sys/book/addBook',
      method: 'post',
      data: bookName
    })
  },
  deleteBookName(id) {
    return request({
      url: `/sys/book/delete/${id}`,
      method: 'post'
    })
  }
}
