export const state = () => ({
  sliderSkills: [],
  errorOnData: false
})
export const mutations = {
  SET_SKILLS_LIST(state, skills) {
    state.sliderSkills = skills
  },
  SET_ERROR_DATA: state => {
    state.errorOnData = true
  }
}
export const actions = {
  async createSkill({ commit }, formData) {
    try {
      await this.$axios.$post('/api/content/admin', formData)
    } catch (error) {
      console.error(error)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },

  async fetchSkillAdmin({ commit }) {
    try {
      return await this.$axios.$get('/api/content/admin')
    } catch (error) {
      console.log(error)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },

  async fetchSkill({ commit }) {
    try {
      const skills = await this.$axios.$get('/api/content')
      await commit('SET_SKILLS_LIST', skills)
    } catch (error) {
      await commit('SET_ERROR_DATA')
      console.error(error.response && error.response.data)
    }
  },

  async removeSkill({ commit }, id) {
    try {
      console.log(id)
      return await this.$axios.$delete(`/api/content/admin/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}
