const controll = require('../controllers/applications.controller')
const passport = require('passport')
const { Router } = require('express')

const router = Router()

// Admin
//  /api/applications/admin
// Создание заявки
// router.post(
//   '/admin/',
//   // passport.authenticate('jwt', { session: false }),
//   controll.create
// )
// Список всех заявок
router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  controll.getAll
)
// Открыть заявку
// router.get(
//   '/admin/:id',
//   passport.authenticate('jwt', { session: false }),
//   controll.getById
// )

// Удалить заявку
router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  controll.remove
)

// Base
router.post('/', controll.create)
module.exports = router
