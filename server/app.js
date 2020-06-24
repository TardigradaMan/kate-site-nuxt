const authRoutes = require('./routes/auth.routes')
const applicationsRoutes = require('./routes/applications.routes')
const contentRoutes = require('./routes/content.routes')
// Бот начало
require('./bot/telega')
// const helper = require('./helper')
// const Applications = require('./models/applications.model')
// Бот конец
const keys = require('./keys')
// Для защиты routs и проверки токена:
const passportStrategy = require('./middleware/passport-strategy')
const passport = require('passport')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB local connected.....'))
  .catch(error => console.error(error))
// =============================================== //

// Бот начало
// helper.logStart()

// bot.onText(/\/test/, msg => {
//   const text = `Привет, ${msg.from.first_name}. Чем я могу помочь?!`

//   bot.sendMessage(helper.gerChatId(msg), text, {
//     reply_markup: {
//       inline_keyboard: [
//         [
//           {
//             text: 'Список всех заявок',
//             callback_data: 'list'
//           },
//           {
//             text: 'Test',
//             callback_data: 'Test'
//           }
//         ]
//       ]
//     }
//   })
// })

// bot.on('callback_query', query => {
//   const id = query.message.chat.id
//   sendList(id)
// })

// function sendList(chatId) {
//   Applications.find({}).then(list => {
//     // console.log(list)
//     list.forEach((e, index) => {
//       console.log(e)
//     })

//     // const html = list.forEach((l, i) => {
//     //   return `<b>${i}</b> <b>${l.name}</b>`
//     // })
//     const html = `<b>${list[0].name}</b>`

//     // console.log(html)

//     bot.sendMessage(chatId, html, {
//       parse_mode: 'HTML'
//     })
//   })
// }
// Бот конец

// Passport подключаем сразу после mongoose
app.use(passport.initialize())
// Далее стратегия авторизации
passport.use(passportStrategy)

// Парсер для команд
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Регистрация Routes
app.use('/api/auth', authRoutes)
app.use('/api/applications', applicationsRoutes)
app.use('/api/content', contentRoutes)

module.exports = app
