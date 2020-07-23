export const state = () => ({
  sliderSkills: []
})
export const mutations = {
  SET_SKILLS_LIST(state, skills) {
    state.sliderSkills = skills
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

  async fetchSkill({ commit }) {
    try {
      const skills = await this.$axios.$get('/api/content/admin')
      await commit('SET_SKILLS_LIST', skills)
    } catch (error) {
      console.log(error)
      // throw new Error('Внутреняя ошибка сервера, сообщите администратору')
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
