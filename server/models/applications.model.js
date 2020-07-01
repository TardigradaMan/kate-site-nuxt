const { Schema, model } = require('mongoose')

const applicationsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  urlAdd: {
    type: String
    // required: true
  },
  urlSocial: {
    type: String
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  performed: {
    type: Boolean,
    default: false
  },
  text: {
    type: String
  }
})

module.exports = model('applications', applicationsSchema)
