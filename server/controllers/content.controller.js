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
module.exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ date: -1 })
    res.json(skills)
  } catch (error) {
    res.status(500).json(error)
  }
}

// module.exports.remove = async (req, res) => {
//   try {
//     await Applications.deleteOne({ _id: req.params.id })
//     res.json({ message: 'Заявка удалена' })
//   } catch (e) {
//     console.log('Блок ошибки контроллера')
//     res.status(500).json(e)
//   }
// }
