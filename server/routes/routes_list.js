const router = require('express').Router()
const List = require('../models/model_list')

// GET / Show all
router.get('/', (req, res) => {
  List.find({})
    .then(lists => res.json(lists))
    .catch(err => console.error(err))
})

// GET /:id Show one
router.get('/:id', (req, res) => {
  List.findById(req.params.id)
    .then(list => res.json(list))
    .catch(err => console.error(err))
})

// POST / Create
router.post('/', (req, res) => {
  List.create({
    'name': req.body.name
  })
  .then(list => res.json(list))
  .catch(err => console.error(err))
})

module.exports = router