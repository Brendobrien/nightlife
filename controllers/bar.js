const jwt = require('jwt-simple');
const Bar = require('../models/barDB');
require('dotenv').load();

module.exports.listBars = function(req, res) {
  Bar.find({},function (err, bars) {
      if (err) throw err;

      res.json(bars);
  })
}

module.exports.goingToBar = function(req, res) {
  var query = { email: req.query.email, barid: req.query.barid };
  var update = {
      // TODO: use a $ property
      // going: !going
      $inc: { going: 1 }
  }
  var options = {"new": true};
  var callback = function (err, myBar) {
      if (err) throw error;

      console.log(myBar);
      if(myBar === null){
        var newBar = {
          barid: req.query.barid,  
          email: req.query.email
        }
        Bar.create(newBar, function (err, barReturn) {
            if (err) throw error;

            res.json(barReturn);
        }) 
      }
      else {
        res.json(myBar);
      }
  };

  // res.json(req.query.barid);
  Bar.findOneAndUpdate(query, update, options, callback);
}