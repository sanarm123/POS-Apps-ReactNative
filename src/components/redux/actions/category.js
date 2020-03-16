import axios from 'axios'

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios({
      method: 'get',
      url: 'http://192.168.1.17:8001/category'
    })
  }
}

export const createCategory = (data) => {
  return {
    type: 'CREATE_CATEGORY',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.1.17:8001/category',
      data: data
    })
  }
}

// export const searchProduct = (data) => {
//   return {
//     type: 'SEARCH_PRODUCT',
//     payload: axios({
//       method: 'get',
//       url: `http://192.168.1.17:8001/product/?name=${data}`
//     })
//   }
// }

// export const filterProduct = (data) => {
//   return {
//     type: 'FILTER_PRODUCT',
//     payload: axios({
//       method: 'get',
//       url: `http://192.168.1.17:8001/product/?category=${data}`
//     })
//   }
// }

export const updateCategory = (data, categoryId) => {
  return {
    type: 'UPDATE_CATEGORY',
    payload: axios({
      method: 'PATCH',
      url: `http://192.168.1.17:8001/category/${categoryId}`,
      data: data
    })
  }
}

export const deleteCategory = (categoryId) => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios({
      method: 'DELETE',
      url: `http://192.168.1.17:8001/category/${categoryId}`
    })
  }
}
