const router = require('express').Router()
const List = require('../models/model_list')

// GET / Show all
router.get('/', (req, res) => {
  List.find({})
    .populate('items')
    //.exec()
    .then(lists => res.json(lists))
    .catch(err => console.error(err))
})

// GET /:id Show one
router.get('/:id', (req, res) => {
  List.findById(req.params.id)
    .populate('items')
    //.exec()
    .then(list => res.json(list))
    .catch(err => res.json("Not found"))
})

// POST / Create
router.post('/', (req, res) => {
  List.create({
    'name': req.body.name
  })
  .then(list => res.json(list))
  .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  List.findByIdAndRemove(req.params.id)
  
  .then(list => {res.json(list)})
  .catch(err => res.json(err))
  })


module.exports = router