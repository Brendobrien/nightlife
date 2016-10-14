'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barSchema = new Schema({
  createdAt: { type: Date, expires: 3600, default: Date.now },
  email: String,
  barid: String,
  going: { type: Number, default: 1 }
})

// Create the model class
const ModelClass = mongoose.model('bar', barSchema);

// Export the model
module.exports = ModelClass;