'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  email: String,
  city: String
})

// Create the model class
const ModelClass = mongoose.model('city', citySchema);

// Export the model
module.exports = ModelClass;