const jwt = require('jwt-simple');
const Bar = require('../models/barDB');
require('dotenv').load();

module.exports.listBars = function(req, res) {
  Bar.find({},function (err, bars) {
      if (err) throw err;

      res.json(bars);
  })
}