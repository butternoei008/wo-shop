const state = {
   products: [
      {id: 1, name: 'WO-2B', price: 6, img: 'https://aumento.officemate.co.th/media/catalog/product/O/F/OFM1000751_X2.jpg?imwidth=640'},
      {id: 2, name: 'WO-4B', price: 20, img: 'https://www.stationerymine.com/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/f/s/fs031435_staedtler_pencil_4b.jpg'},
      {id: 3, name: 'WO-EE', price: 30, img: 'https://aumento.officemate.co.th/media/catalog/product/O/F/OFM1500310_X2.jpg?imwidth=640'},
   ]
}

const getters = {
   allProduct(state) {
      return state.products
   }
}

export default {
   state,
   getters
}