export const actions = {
  async create({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/applications/admin', formData)
    } catch (error) {
      console.error(error)
    }
  },

  async fetchApplications() {
    try {
      return await this.$axios.$get('/api/applications/admin')
    } catch (error) {
      console.log(error)
    }
  },

  async remove({ commit }, id) {
    try {
      console.log(id)
      return await this.$axios.$delete(`/api/applications/admin/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}
