const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');

// GET all data
router.get('/', async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// POST new data
router.post('/', async (req, res) => {
    const newData = new Data(req.body);
    try {
      const savedData = await newData.save();
      res.json(savedData);
    } catch (error) {
      res.json({ message: error.message });
    }
  });
  
  // PUT update data
  router.put('/:id', async (req, res) => {
    try {
      const updatedData = await Data.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(updatedData);
    } catch (error) {
      res.json({ message: error.message });
    }
  });

  // DELETE data
router.delete('/:id', async (req, res) => {
    try {
      const removedData = await Data.deleteOne({ _id: req.params.id });
      res.json(removedData);
    } catch (error) {
      res.json({ message: error.message });
    }
  });
  
  module.exports = router;