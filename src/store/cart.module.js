import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT } from './actions.type'
const state = {
   cart: [],
}

const actions = {
   [ADD_CART_PRODUCT](context, product) {
      context.commit(ADD_CART_PRODUCT, product)
   },
   [REMOVE_CART_PRODUCT](context, productId) {
      context.commit(REMOVE_CART_PRODUCT, productId)
   },
}

const getters = {
   itemInCart() {
      return state.cart
   },
}

const mutations = {
   [ADD_CART_PRODUCT](state, product) {
      const inState = state.cart.findIndex((cart) => cart.id === product.id)
      if (inState != -1) {
         state.cart[inState].qty += 1
         state.cart[inState].total = state.cart[inState].price * state.cart[inState].qty
      } else {
         product.qty = 1
         product.total = product.price
         state.cart.push(product)
      }
   },
   [REMOVE_CART_PRODUCT](state, productId) {
      state.cart = state.cart.filter((cart) => cart.id !== productId)
   },
}

export default {
   state,
   actions,
   mutations,
   getters,
}
