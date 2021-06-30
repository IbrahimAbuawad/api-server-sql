'use strict';

const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
  name:{type:String ,required:true},
  price:{type:String},
});

const foodModel = mongoose.model('foods',foodSchema);

module.exports = foodModel;

