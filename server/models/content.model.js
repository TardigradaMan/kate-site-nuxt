const { model, Schema } = require('mongoose')

const skillSchema = new Schema({
  skill: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('skills', skillSchema)
