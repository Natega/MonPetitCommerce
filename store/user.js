import axios from 'axios'
const Cookie = process.client ? require('js-cookie') : undefined
export const state = () => ({
  user: {}
})
export const mutations = {
  logout(state) {
    state.user = {}
    if (process.client) {
      Cookie.remove('auth')
    }
    axios.post('/logout')
  }
}
