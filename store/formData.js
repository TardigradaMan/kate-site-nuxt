export const state = () => ({
  text: ''
})
export const mutations = {
  SET_TEXT: (state, data) => {
    state.text = data
  }
}
export const actions = {
  setText({ commit }, data) {
    commit('SET_TEXT', data)
  }
}
