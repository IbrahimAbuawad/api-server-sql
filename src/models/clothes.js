'use strict';

const mongoose = require('mongoose');


const clothesSchema = mongoose.Schema({
  name:{type:String ,required:true},
  price:{type:String},
});

const clotheModel = mongoose.model('person',clothesSchema);

module.exports = clotheModel;

