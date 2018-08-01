const router = require('express').Router()

// show all lists
router.get('/', (req, res) => 
  res.send("Lists"))

// show single list
router.get('/:id', (req, res) => 
  res.send(`List ${req.params.id}`))

module.exports = router