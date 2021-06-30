'use strict';

const express = require('express');

const foodModel = require('../models/food.js');
const DataCollection = require('../models/data-collection-class');
// const validator = require('../middleware/validator');


const router = express.Router();

const foods = new DataCollection(foodModel);

// routes
router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

async function getFood(req, res, next) {
  try {

    const resObj = await foods.read(req.params.id);
    res.json(resObj);

  }

  catch (e) {
    next(e);
  }
}

async function createFood(req, res, next) {
  try {
    const resObj = await foods.create(req.body);
    res.status(201).json(resObj);
  }
  catch (e) {
    next(e);
  }
}
async function updateFood(req, res, next) {
  try {
    const resObj = await foods.update(req.params.id, req.body);
    res.json(resObj);
  }
  catch (e) {
    next(e);
  }
}


async function deleteFood(req, res, next) {
  try {
    const resObj = await foods.delete(req.params.id);
    res.json(resObj);
  }
  catch (e) {
    next(e);
  }
}

module.exports = router;

