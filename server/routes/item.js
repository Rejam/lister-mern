const router = require("express").Router({ mergeParams: true });
const List = require("../models/model_list");
const Item = require("../models/model_item");

// Create new item
// POST /lists/:id/
router.post("/", (req, res) => {
  List.findById(req.params.id)
    .then(list => {
      const newItem = {
        title: req.body.title,
        content: req.body.content
      };
      Item.create(newItem)
        .then(item => {
          list.items.push(item);
          list
            .save()
            .then(list => res.json(item))
            .catch(err =>
              res.status(400).json({ error: "Could not save list" })
            );
        })
        .catch(err => res.status(400).json({ error: "Could not save item" }));
    })
    .catch(err => res.status(404).json({ error: "Could not find list" }));
});

// Delete item
// DELETE /lists/:id/:item_id
router.delete("/:item_id", (req, res) => {
  Item.findByIdAndRemove(req.params.item_id)
    .then(item => {
      if (item) return res.json({ success: true });
      return res.status(400).json({ error: "Unable to find and delete item" });
    })
    .catch(err => res.status(400).json({ error: "Could not delete item" }));
});

module.exports = router;
