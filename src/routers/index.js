import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
   routes: [
      {
         name: 'Home',
         path: '/',
         component: () => import('@/pages/Home'),
      },
      {
         name: 'Cart',
         path: '/cart',
         component: () => import('@/pages/Cart')
      }
   ]
})