export default {
  state: {
    error: null
  },
  mutations: {
    setError (state:any, error:any) {
      state.error = error
    },
    clearError (state:any) {
      state.error = null
    }
  },
  getters: {
    // @ts-ignore
    error: state => {
      return state.error
    }
  }
}
