// Экспортирует функции которые нужно применить в routes
const Skill = require('../models/content.model')

module.exports.create = async (req, res) => {
  const skills = new Skill({
    skill: req.body.skill
  })

  try {
    await skills.save()
    res.status(201).json(skills)
  } catch (error) {
    res.status(500).json(error)
  }
}
