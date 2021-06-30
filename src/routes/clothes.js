'use strict';

const express = require('express');

const clothesModels = require('../models/clothes');
const DataCollection = require('../models/data-collection-class');
// const validator = require('../middleware/validator');

const router = express.Router();

const clothes = new DataCollection(clothesModels);



// routes
router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', createCloth);
router.put('/:id', updateCloth);
router.delete('/:id', deleteCloth);

async function getClothes(req, res, next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj);
  }

  catch (e) {
    next(e);
  }
}

async function createCloth(req, res, next) {
  try {
    const resObj = await clothes.create(req.body);
    res.status(201).json(resObj);
  }
  catch (e) {
    next(e);
  }
}

async function updateCloth(req, res, next) {
  try {
    const resObj = await clothes.update(req.params.id, req.body);
    res.json(resObj);
  }
  catch (e) {
    next(e);
  }
}
async function deleteCloth(req, res, next) {
  try {
    const resObj = await clothes.delete(req.params.id);
    res.json(resObj);
  }
  catch (e) {
    next(e);
  }
}

module.exports = router;

