export const state = () => ({
  blogs: [],
})

export const getters = {
  blogs: (state) => {
    return state.blogs.slice(0, 5)
  },
}

export const mutations = {
  setBlogs(state, blogs) {
    state.blogs = blogs
  },
}

export const actions = {
  getBlogs({ commit }) {
    return this.$api
      .get('/posts')
      .then((response) => {
        if (response && response.data) {
          commit('setBlogs', response.data)
          return response.data
        }
      })
      .catch((err) => {
        return err
      })
  },
}
