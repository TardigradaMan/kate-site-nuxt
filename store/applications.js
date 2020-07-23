export const actions = {
  async create({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/applications', formData)

      // const txt = `<b>Привет</b>  <b>${formData.name}</b>`

      // return await this.$axios.$post(
      //   `https://api.telegram.org/bot1009703975:AAFUGJCiXhNZF3vfTfG5787o1Fx4q7jtuRc/sendMessage?chat_id=-1001306557723&parse_mode=html&text=${txt}`
      // )
    } catch (error) {
      console.error(error)
    }
  },

  async sendBotTelegram({ commit }, formData) {
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
