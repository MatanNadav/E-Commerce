import Vue from 'vue'
import Vuex from 'vuex'
import spectrumService from '@/services/SpectrumService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selectedProduct: null,
    cart: []

  },
  mutations: {
    setProducts(state, {data}) {
      state.products = data
    },
    setSelectedProduct(state, {data}) {
      state.selectedProduct = data
    },
    setCart(state, {data}) {
      state.cart.push(data.items[0])
    },
    setFilterProducts(state, {filterBy}) {
      state.products = state.products.filter( product => {
        return product.title.includes(filterBy.txt) && product.max_price <= filterBy.price
      })
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getSelectedProduct(state) {
      return state.selectedProduct
    },
    getCart(state) {
      return state.cart
    }
  },
  actions: {
    async loadProducts(context) {
      const res = await spectrumService.fetchProducts()
      const {data} = res
      context.commit({ type: 'setProducts', data })
  },
    async loadProductById(context, {_id}) {
      const res = await spectrumService.fetchProductById(_id)
      const {data} = res
      context.commit({type: 'setSelectedProduct', data})
  },
    clearSelectedProduct(context) {
      context.commit({type: 'setSelectedProduct', data:null })
    },
    async addToCart(context, {id, quantity}) {
      const res = await spectrumService.addToCart(id, quantity)
      const {data} = res
      context.commit({type: 'setCart', data})
    },
    async clearCart(context) {
      const res = await spectrumService.clearCart()
      const {data} = res
      context.commit({ type: 'setCart', data})
    },
    filterProducts(context, {filterBy}) {
      context.commit({type: 'setFilterProducts', filterBy})
    }
  },
  modules: {
  }
})
