import Vue from 'vue'
import Vuex from 'vuex'

import product from './product.module'
import cart from './cart.module'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
      product,
      cart
   }
})