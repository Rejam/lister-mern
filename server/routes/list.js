const router = require("express").Router();
const List = require("../models/model_list");

// Get all lists
// GET /lists
router.get("/", (req, res) => {
  List.find({})
    .populate("items")
    .then(lists => res.json(lists))
    .catch(_ => res.status(404).json({ error: "List not found" }));
});

// Get a list
// GET /lists/:id
router.get("/:id", (req, res) => {
  List.findById(req.params.id)
    .populate("items")
    .then(list => res.json(list))
    .catch(_ => res.status(404).json({ error: "List not found" }));
});

// Create a list
// POST /lists
router.post("/", (req, res) => {
  List.create({
    title: req.body.title
  })
    .then(list => res.json(list))
    .catch(_ => res.status(404).json({ error: "Could not create list" }));
});

// Delete a list
// DELETE /lists/:id
router.delete("/:id", (req, res) => {
  List.findByIdAndRemove(req.params.id)
    .then(list => res.json(list))
    .catch(_ => res.status(404).json({ error: "Could not delete list" }));
});

module.exports = router;
