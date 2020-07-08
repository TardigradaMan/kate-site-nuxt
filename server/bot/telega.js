const keys = require('../keys')
const Applications = require('../models/applications.model')
const kb = require('./keyboards-buttons')
const helper = require('./helper')
const keyboard = require('./keyboard')

const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(keys.TOKEN, { polling: true })

// Тест Webhook
// const bot = new TelegramBot(keys.TOKEN)

// Тест Webhook

helper.logStart()

// Вывод разной клавиатуры в зависимости от страницы
bot.on('message', msg => {
  console.log('Работаю', msg.from.first_name)

  const chatId = helper.gerChatId(msg)

  switch (msg.text) {
    case kb.home.list:
      sendList(chatId)
      bot.sendMessage(chatId, `Показываю все заявки`, {
        reply_markup: { keyboard: keyboard.home, resize_keyboard: true }
      })
      break
    case kb.home.test:
      break
    case kb.customer.back:
      bot.sendMessage(chatId, `Что вам показать?`, {
        reply_markup: { keyboard: keyboard.home, resize_keyboard: true }
      })
      break
    default:
      break
  }
})

// Вывод главной клавиатуры по команде /start
bot.onText(/\/start/, msg => {
  const text = `Привет, ${msg.from.first_name}.\nЧем я могу помочь?!`

  // Мои тесты //
  bot.getChatMember('1009703975').then(response => {
    console.log(response)
  })
  // ************ //

  bot.sendMessage(helper.gerChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home,
      resize_keyboard: true
    }
  })
})

// Показать конкретного клиента
bot.onText(/\/l(.+)/, (msg, [sourse, match]) => {
  const listId = helper.getItemId(sourse)
  const chatId = helper.gerChatId(msg)

  Applications.findOne({ _id: listId }).then(list => {
    const html = `😄 <b>${list.name}</b>\n<b>☎️ ${list.phone}</b>\n<b>📧 ${
      list.email
    }</b>\n<b>🔨 ${
      list.method
    }</b>\n<b>📆 ${list.date.toLocaleDateString()}</b>\n`

    bot.sendMessage(chatId, html, {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Связаться с клиентом',
              callback_data: JSON.stringify({
                phone: list.phone
                // name: list.name
              })
            }
            // {
            //   text: 'Позвонить',
            //   callback_data: JSON.stringify({
            //     type: 'toCall',
            //     phone: list.phone
            //   })
            // }
          ]
        ]
      }
    })
  })
})

// Меню и методы карточки клиента
bot.on('callback_query', query => {
  const chatId = query.message.chat.id
  let data

  try {
    data = JSON.parse(query.data)
  } catch (error) {
    throw new Error('Data is not an object')
  }

  const { phone } = data
  const name = 'Выбранный клиент'
  bot.sendContact(chatId, phone, name)

  //   if (type === 'toWrite') {
  //   }

  //   if (type === 'toCall') {
  //     bot.sendContact(chatId, phone, name)
  //   }
})

// Функция показа списка из базы данных
function sendList(chatId) {
  Applications.find({})
    .sort({ date: -1 })
    .then(list => {
      const html = list
        .map((l, i) => {
          return `<b>${i + 1}</b>) <b>${list[i].name}</b>\n /l${list[i]._id}`
          // return `<b>${i + 1}</b>) <b>${list[i].name}</b>\n
          // <a href="//l${list[i]._id}">Открыть</a>`
        })
        .join('\n')

      sendHTML(chatId, html)
    })
}

// Функция показа сообщения
function sendHTML(chatId, html, kbName = null) {
  const options = {
    parse_mode: 'HTML'
  }

  if (kbName) {
    console.log('Зашел')

    options['reply_markup:'] = {
      keyboard: keyboard[kbName]
    }
  }
  bot.sendMessage(chatId, html, options)
}

// Тесты

bot.onText(/\/t/, msg => {
  // const text = `Привет, ${msg.from.first_name}.\nЧем я могу помочь?!`

  // Мои тесты //
  bot.getUpdates().then(response => {
    console.log(response[0].message)
  })
  // ************ //
})

module.exports = bot
