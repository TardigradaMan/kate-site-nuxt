const config = require('../nuxt.config.js')
require('./bot/telega')
const app = require('./app')

const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Webhook Telegram

  // bot.setWebHook(`${host}/bot${keys.TOKEN}`)
  // // We are receiving updates at the route below!
  // app.post(`/bot${keys.TOKEN}`, (req, res) => {
  //   bot.processUpdate(req.body)
  //   res.sendStatus(200)
  // })
  // Webhook

  // Give bot middleware to express

  // Listen the server
  app.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })

  // Ботт

  // Конец бота
}
start()
