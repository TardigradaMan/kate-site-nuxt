const controll = require('../controllers/bot.controller')
// const passport = require('passport')
const { Router } = require('express')

const router = Router()

// Создание заявки
router.post('/', controll.sendMsg)

module.exports = router
