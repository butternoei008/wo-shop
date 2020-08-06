import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT } from './actions.type'
const state = {
   cart: []
}

const actions = {
   [ADD_CART_PRODUCT](context, product) {
      context.commit(ADD_CART_PRODUCT, product)
   },
   [REMOVE_CART_PRODUCT](context, productId) {
      context.commit(REMOVE_CART_PRODUCT, productId)
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
   },
   [REMOVE_CART_PRODUCT](state, productId) {
      state.cart = state.cart.filter(cart => cart.id !== productId)
   }
}

export default {
   state,
   actions,
   mutations,
   getters
}