// const message = [
//   {
//     user: 'User 1',
//     text: 'text 1',
//     _id: 'id1'
//   },
//   {
//     user: 'User 2',
//     text: 'text 2',
//     _id: 'id2'
//   }
// ]

export const actions = {
  async createMessage({ commit }, message) {
    try {
      const keys = require('../server/keys')
      const chatId = '-1001306557723'

      await console.log(message.text)

      return await this.$axios.$post(
        `https://api.telegram.org/bot${keys.TOKEN}/sendMessage?chat_id=${chatId}&text=${message.text}`
      )
    } catch (error) {
      console.error(error)
    }
  },

  // Чат через бота

  async chatBotTelegram({ commit }, formData) {
    try {
      const keys = require('../server/keys')
      const chatId = '-1001306557723'
      let text
      if (formData.page === 'home') {
        text = `<b><i><u>Новая заявка с главной формы:</u></i></b>%0A<strong>Имя: </strong><i>${formData.name}</i>%0A<strong>Телефон: </strong><i>${formData.phone}</i>%0A👉<a href="tg://user?id=1009703975">Открыть бота</a>`
      }
      if (formData.page === 'small') {
        text = `<b><i><u>Новая заявка с малой формы:</u></i></b>%0A<strong>Имя: </strong><i>${formData.name}</i>%0A<strong>Телефон: </strong><i>${formData.phone}</i>%0A<strong>Сообщение: </strong><i>${formData.text}</i>%0A👉<a href="tg://user?id=1009703975">Открыть бота</a>`
      }

      return await this.$axios.$post(
        `https://api.telegram.org/bot${keys.TOKEN}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`
      )
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
  }
}
