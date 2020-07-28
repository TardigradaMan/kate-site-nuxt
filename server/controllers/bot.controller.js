// Экспортирует функции которые нужно применить в routes
// const Skill = require('../models/content.model')

// module.exports.create = async (req, res) => {
//   const skills = new Skill({
//     skill: req.body.skill
//   })

//   try {
//     await skills.save()
//     res.status(201).json(skills)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

module.exports.sendMsg = async (req, res) => {
  const keys = require('../keys')
  const axios = require('axios')

  //     if (formData.page === 'home') {
  //       text = `<b><i><u>Новая заявка с главной формы:</u></i></b>%0A<strong>Имя: </strong><i>${formData.name}</i>%0A<strong>Телефон: </strong><i>${formData.phone}</i>%0A👉<a href="tg://user?id=1009703975">Открыть бота</a>`
  //     }
  //     if (formData.page === 'small') {
  //       text = `<b><i><u>Новая заявка с малой формы:</u></i></b>%0A<strong>Имя: </strong><i>${formData.name}</i>%0A<strong>Телефон: </strong><i>${formData.phone}</i>%0A<strong>Сообщение: </strong><i>${formData.text}</i>%0A👉<a href="tg://user?id=1009703975">Открыть бота</a>`
  //     }

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
