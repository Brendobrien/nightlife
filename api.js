var request = require("request");

module.exports.yelp = function(req,res) {
  var bars = {
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    qs: { term: 'bar', location: req.query.city, limit: '21' },
    headers: { 
      'authorization': 'Bearer 04j_jr5avF7wL43fyKU00SxvliXA9672KocecDCWu8PDxXv-bUgaXcjdNL8sMDFG19HWjWhhIkhi42GtY_k547zAtx6KLGB1NSkvliyWjYAdH57V5FaIKtX_HbnzV3Yx',
      'content-type': 'application/json'
    } 
  };

  request(bars, function (error, response, body) {
    if (error) throw new Error(error);

    var json = JSON.parse(body);
    res.send(json.businesses);
  });
}