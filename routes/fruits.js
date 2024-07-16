//FRUIT CRUD ROUTES
const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");

//index - GET
router.get("/", async (req, res) => {
  try {
    const allFruits = await Fruit.find({});
    res.json(allFruits);
  } catch (error) {
    res.status(500).json({msg: 'whoops, something went wrong'})
    console.error(error.message)
  }
});



// show - GET - indiv. fruit
router.get("/:id", async (req, res) => {
  const oneFruit = await Fruit.findById(req.params.id);
  res.json(oneFruit);
});


// new - GET - form
// create - POST
router.post("/", async (req, res) => {
    console.log(req.body)
    const newFruit = await Fruit.create(req.body)
    res.json(newFruit)
})
// edit - GET - form

// update - PUT/PATCH
router.put("/:id", async (req, res)=> {
    const updateFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body)
    res.json(updateFruit)
})
// destroy - DELETE
router.delete('/:id', async (req, res)=> {
    const deleteFruit = await Fruit.findByIdAndDelete(req.params.id)
    res.json(deleteFruit)
})


module.exports = router;
