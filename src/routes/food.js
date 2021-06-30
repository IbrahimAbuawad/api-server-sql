'use strict';

const express = require('express');

const foodModels = require('../models/food');
const Interface = require('../models/data-collection-class');
// const validator = require('../middleware/validator');

const clothes = new Interface(foodModels);


const router = express.Router();

// routes
router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id',  deleteFood);

async function getFood(req, res, next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj);
  }

  catch (e) {
    next(e);
  }
}

function createFood(req, res, next) {
  try {
    const resObj = clothes.create(req.body);
    res.status(201).json(resObj);
  }
  catch (e) {
    next(e);
  }
}
async function updateFood(req, res, next) {
  try {
    const resObj = await clothes.update(req.params.id, req.body);
    res.json(resObj);
  }
  catch (e) {
    next(e);
  }
}


async function deleteFood(req, res, next) {
  try {
    const resObj = await clothes.delete(req.params.id);
    res.json(resObj);
  }
  catch (e) {
    next(e);
  }
}

module.exports = router;

