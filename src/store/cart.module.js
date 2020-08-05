import { ADD_CART_PRODUCT } from './actions.type'
const state = {
   cart: []
}

const actions = {
   [ADD_CART_PRODUCT](context, product) {
      context.commit(ADD_CART_PRODUCT, product)
   }
}

const getters = {
   itemInCart() {
      return state.cart
   }
}

const mutations = {
   [ADD_CART_PRODUCT](state, product) {
      state.cart.push(product)
   }
}

export default {
   state,
   actions,
   mutations,
   getters
}