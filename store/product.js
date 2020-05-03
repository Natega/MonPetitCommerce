import axios from 'axios'
export const state = () => ({
  product: null
})
export const mutations = {
  addProduct(state, product) {
    axios.post('/product', product)
    state.product = product
  }
}
