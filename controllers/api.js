var request = require("request");

module.exports.yelp = function(req,res) {
  var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: { term: 'bar', location: req.query.city, limit: '21' },
  headers: 
   { 
     authorization: 'Bearer '+process.env.ACCESS_TOKEN,
     'content-type': 'application/json' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });
}