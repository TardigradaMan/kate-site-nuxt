module.exports = {
  logStart() {
    console.log(process.env)
    console.log(process.env.PORT)
    console.log('Бот запущен')
  },

  gerChatId(msg) {
    return msg.chat.id
  },

  getItemId(sourse) {
    return sourse.substr(2, sourse.length)
  }
}
