'use strict';

const express = require('express');

const clothesModels = require('../models/clothes');
const Interface = require('../models/data-collection-class');
const validator = require('../middleware/validator');

const clothes = new Interface(clothesModels);


const router = express.Router();

// routes
router.get('/', getClothes);
router.get('/:id', validator, getClothes);
router.post('/', createCloth);
router.put('/:id', validator, updateCloth);
router.delete('/:id', validator, deleteCloth);

async function getClothes(req, res, next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.status(200).json(resObj);
  }

  catch (e) {
    next(e);
  }
}

function createCloth(req, res, next) {
  try {
    const resObj = clothes.create(req.body);
    res.status(200).json(resObj);
  }
  catch (e) {
    next(e);
  }
}
function updateCloth(req, res, next) {
  try {
    const resObj = clothes.update(req.params.id, req.body);
    res.status(200).json(resObj);
  }
  catch (e) {
    next(e);
  }
}
function deleteCloth(req, res, next) {
  try {
    const resObj = clothes.delete(req.params.id);
    res.status(204).json(resObj);
  }
  catch (e) {
    next(e);
  }
}

module.exports = router;

