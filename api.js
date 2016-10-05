var request = require("request");

module.exports.yelp = function(req,res) {
  var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: { term: 'bar', location: 'Dallas', limit: '9' },
  headers: 
   { 'postman-token': '3aa99da9-cb88-0451-193e-d0ab04e5a40c',
     'cache-control': 'no-cache',
     authorization: 'Bearer 04j_jr5avF7wL43fyKU00SxvliXA9672KocecDCWu8PDxXv-bUgaXcjdNL8sMDFG19HWjWhhIkhi42GtY_k547zAtx6KLGB1NSkvliyWjYAdH57V5FaIKtX_HbnzV3Yx',
     'content-type': 'application/json' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
}