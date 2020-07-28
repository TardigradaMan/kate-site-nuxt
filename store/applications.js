export const actions = {
  async create({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/applications', formData)
    } catch (error) {
      console.error(error)
    }
  },

  // async sendBotTelegram({ commit }, formData) {
  //   try {
  //     const TOKEN = process.env.TOKEN_PROD
  //     // const keys = require('../server/keys')
  //     // const TOKEN = '1009703975:AAFUGJCiXhNZF3vfTfG5787o1Fx4q7jtuRc'
  //     const chatId = process.env.CHAT_ID
  //     let text
  //     if (formData.page === 'home') {
  //       text = `<b><i><u>Новая заявка с главной формы:</u></i></b>%0A<strong>Имя: </strong><i>${formData.name}</i>%0A<strong>Телефон: </strong><i>${formData.phone}</i>%0A👉<a href="tg://user?id=1009703975">Открыть бота</a>`
  //     }
  //     if (formData.page === 'small') {
  //       text = `<b><i><u>Новая заявка с малой формы:</u></i></b>%0A<strong>Имя: </strong><i>${formData.name}</i>%0A<strong>Телефон: </strong><i>${formData.phone}</i>%0A<strong>Сообщение: </strong><i>${formData.text}</i>%0A👉<a href="tg://user?id=1009703975">Открыть бота</a>`
  //     }

  //     return await this.$axios.$post(
  //       `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`
  //     )
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },

  async sendBotTelegram({ commit }, formData) {
    try {
      // const TOKEN = process.env.TOKEN_PROD
      // const keys = require('../server/keys')
      // const TOKEN = '1009703975:AAFUGJCiXhNZF3vfTfG5787o1Fx4q7jtuRc'

      return await this.$axios.$post('/api/telegram', formData)
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
