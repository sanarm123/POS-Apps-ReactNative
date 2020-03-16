const initialState = {
  products: [],
  product: null,
  isLoading: false
}
// products
const products = (state = initialState, action) => {
  // console.log(action.type)s
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCTS_REJECTED':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_PRODUCTS_FULFILLED':
      // console.log('halo', action.payload.data.result)
      return {
        ...state,
        isLoading: false,
        products: action.payload.data.result
      }

    case 'CREATE_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true

      }
    case 'CREATE_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true
      }
    case 'CREATE_PRODUCT_FULFILLED':
      // console.log('halo', action.payload.data.result)
      const newProducts = [...state.products, action.payload.data.result]
      return {
        ...state,
        isLoading: false,
        products: newProducts
      }

    case 'UPDATE_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'UPDATE_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true
      }

    case 'UPDATE_PRODUCT_FULFILLED':
      // console.log('halo', action.payload.data.result)
      const newProductAfterUpdate = state.products.map(product => {
        if (product.id === action.payload.data.result.id) {
          return action.payload.data.result
        }

        return product
      })
      return {
        ...state,
        isLoading: false,
        products: newProductAfterUpdate
      }

      case 'SEARCH_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'SEARCH_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true
      }

    case 'SEARCH_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        products: action.payload.data.result
      }

      case 'FILTER_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'FILTER_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true
      }

    case 'FILTER_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        products: action.payload.data.result
      }

    case 'DELETE_PRODUCT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'DELETE_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true
      }

    case 'DELETE_PRODUCT_FULFILLED':
      const newProductAfterDelete = state.products.filter(product => product.id !== action.payload.data.result.id)
      return {
        ...state,
        isLoading: false,
        products: newProductAfterDelete
      }
    default:
      return state
  }
}

export default products