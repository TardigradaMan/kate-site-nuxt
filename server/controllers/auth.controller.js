// Экспортирует функции которые нужно применить в routes
const User = require('../models/user.model')
const keys = require('../keys')
// Шифравание пароля:
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ login: req.body.login })

  if (candidate) {
    const isPasswordTrue = bcrypt.compareSync(
      req.body.password,
      candidate.password
    )
    if (isPasswordTrue) {
      const token = jwt.sign(
        {
          login: candidate.login,
          userId: candidate._id
        },
        keys.JWT,
        { expiresIn: '10h' }
      )
      res.json({ token })
    } else {
      // Лучше не сообщать что пароль верный(лучше просто 404, для безопасности)
      res.status(401).json({ message: 'Данные не верны' })
    }
  } else {
    res.status(404).json({ message: 'Пользователь не найден' })
  }
}

module.exports.createUser = async (req, res) => {
  const candidate = await User.findOne({ login: req.body.login })

  if (candidate) {
    res.status(409).json({ message: 'Такой пользователь уже существует' })
  } else {
    const salt = bcrypt.genSaltSync(10)

    const user = new User({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })
    await user.save()
    res.status(201).json(user)
  }
}
