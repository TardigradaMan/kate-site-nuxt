const keys = require('../keys')
const { Strategy, ExtractJwt } = require('passport-jwt')
const { model } = require('mongoose')
const User = model('users')

// Добавляет в Header поле Autherization: Bearer 'TOKEN'
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await User.findById(payload.userId).select('id')

    if (candidate) {
      // Валидация прошла
      done(null, candidate)
    } else {
      // Валидация не прошла
      done(null, false)
    }
  } catch (error) {
    console.error(error)
  }
})
