const router = require('express').Router({ mergeParams: true })
const Item = require('../models/model_item')
const List = require('../models/model_list')

// POST / Create
router.post('/', (req, res) => {
  console.log(req.params)
  List.findById(req.params.id)
    .then(list => {
      Item.create({
        name: req.body.name,
        list: req.params.id
      })
      .then(item => {
        list.items.push(item)
        list.save()
        res.send({success: true})
      })
    })
    .catch(err => console.error(err))
})

module.exports = router