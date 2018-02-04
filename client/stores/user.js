import * as api from '../apis/main'

export default {
  actions: {
    async getCurrentUser ({ commit }) {
      const userInfo = await api.getCurrentUser()
      commit('setCurrentUser', userInfo)
    },
  },
  state: {
    email: '',
    first_name: '',
    last_name: '',
  },
  mutations: {
    setCurrentUser (state, params) {
      state.email = params.email
      state.first_name = params.first_name
      state.last_name = params.last_name
    },
  },
}
