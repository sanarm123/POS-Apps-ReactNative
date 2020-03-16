import axios from 'axios'

export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'get',
      url: 'http://192.168.1.17:8001/product'
    })
  }
}

export const createProduct = (data) => {
  return {
    type: 'CREATE_PRODUCT',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.1.17:8001/product',
      data: data
    })
  }
}

export const searchProduct = (data) => {
  return {
    type: 'SEARCH_PRODUCT',
    payload: axios({
      method: 'get',
      url: `http://192.168.1.17:8001/product/?name=${data}`
    })
  }
}

export const filterProduct = (data) => {
  return {
    type: 'FILTER_PRODUCT',
    payload: axios({
      method: 'get',
      url: `http://192.168.1.17:8001/product/?category=${data}`
    })
  }
}

export const updateProduct = (data, productId) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: axios({
      method: 'PATCH',
      url: `http://192.168.1.17:8001/product/${productId}`,
      data: data
    })
  }
}

export const deleteProduct = (productId) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios({
      method: 'DELETE',
      url: `http://192.168.1.17:8001/product/${productId}`
    })
  }
}
