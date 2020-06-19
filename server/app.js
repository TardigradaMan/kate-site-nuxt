const authRoutes = require('./routes/auth.routes')
const applicationsRoutes = require('./routes/applications.routes')
const contentRoutes = require('./routes/content.routes')

const keys = require('./keys')
// Для защиты routs и проверки токена:
const passportStrategy = require('./middleware/passport-strategy')
const passport = require('passport')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// const MongoClient = require('mongodb').MongoClient
// const objectId = require('mongodb').ObjectID

const app = express()

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB local connected.....'))
  .catch(error => console.error(error))

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
