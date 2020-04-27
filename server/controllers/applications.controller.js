// Экспортирует функции которые нужно применить в routes
const Applications = require('../models/applications.model')
// const keys = require('../keys')
// Шифравание пароля:
// const bcrypt = require('bcrypt-nodejs')
// const jwt = require('jsonwebtoken')

module.exports.create = async (req, res) => {
  const applications = new Applications({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    method: req.body.method,
    urlAdd: req.body.urlAdd,
    urlSocial: req.body.urlSocial
  })

  try {
    await applications.save()
    res.status(201).json(applications)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.getAll = async (req, res) => {
  try {
    const applications = await Applications.find().sort({ date: -1 })
    res.json(applications)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.remove = async (req, res) => {
  try {
    console.log('Блок try контроллера')
    console.log(req.params.id)
    await Applications.deleteOne({ _id: req.params.id })
    res.json({ message: 'Заявка удалена' })
  } catch (e) {
    console.log('Блок ошибки контроллера')
    res.status(500).json(e)
  }
}
