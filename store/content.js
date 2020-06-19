export const actions = {
  async createSkill({ commit }, formData) {
    try {
      console.log('Зашел в Store')
      console.log(formData)

      return await this.$axios.$post('/api/content/admin', formData)
    } catch (error) {
      console.error(error)
    }
  },

  async fetchSkill() {
    try {
      return await this.$axios.$get('/api/content/admin')
    } catch (error) {
      console.log(error)
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
