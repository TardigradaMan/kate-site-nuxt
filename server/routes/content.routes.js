const controll = require('../controllers/content.controller')
// const passport = require('passport')
const { Router } = require('express')

const router = Router()

// Admin
//  /api/content/admin
// Создание заявки
router.post(
  '/admin/',
  // passport.authenticate('jwt', { session: false }),
  controll.create
)
// Список всех заявок
router.get(
  '/admin/',
  // passport.authenticate('jwt', { session: false }),
  controll.getAllSkills
)
// Открыть заявку
// router.get(
//   '/admin/:id',
//   passport.authenticate('jwt', { session: false }),
//   controll.getById
// )

// Удалить заявку
// router.delete(
//   '/admin/:id',
//   passport.authenticate('jwt', { session: false }),
//   controll.remove
// )

router.get('/', controll.getAllSkills)

module.exports = router
