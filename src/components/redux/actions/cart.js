import axios from 'axios'

export const postCart = (data) => {
  return {
    type: 'POST_CART',
    payload: { data }
  }
}

export const manipulateQuantity = (data) => {
  return {
    type: 'MANIPULATE_QUANTITY',
    payload: { data }
  }
}

export const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: { id }
  }
}

// export const checkout = (data) => {
//   return {
//     type: 'CHECKOUT',
//     payload: axios({
//       method: 'POST',
//       url: 'http://localhost:8001/purchase',
//       data:data
//     })
//   }
// }





// export const addCart = (data, id_product) => {
//   return {
//     type: 'ADD_CART',
//     payload: data, id_product
//   }
// }

// export const addQty = (id_product) => {
//   return {
//     type: 'ADD_QTY',
//     payload: id_product
//   }
// }

// export const reduceQty = (id_product) => {
//   return {
//     type: 'REDUCE_QTY',
//     payload: id_product
//   }
// }
