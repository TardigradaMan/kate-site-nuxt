// Экспортирует функции которые нужно применить в routes

module.exports.sendMsg = async (req, res) => {
  const keys = require('../keys')
  const axios = require('axios')

  const fields = [
    '<b><i><u>Новая заявка с главной формы:</u></i></b>',
    `<strong>Имя: </strong><i>${req.body.name}</i>`,
    `<strong>Телефон: </strong><i>${req.body.phone}</i>`,
    `<strong>Сообщение: </strong><i>${req.body.text}</i>`,
    `👉<a href="tg://user?id=1009703975">Открыть бота</a>`
  ]
  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  })

  const uri = `https://api.telegram.org/bot${keys.TOKEN}/sendMessage?chat_id=${keys.CHAT_ID}&parse_mode=html&text=${msg}`
  const URL = encodeURI(uri)

  try {
    await axios.post(URL)
    res.json({ message: 'Сообщение отправлено' })
  } catch (error) {
    console.log(error)
  }
}
