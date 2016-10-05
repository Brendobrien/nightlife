const express = require('express'),
  app = express(),
  path = require('path')
  api = require('./api')

app.route('/api')
.get((req, res)=> api.yelp(req,res));

app.use(express.static('public'));
app.use(express.static('public/views'));

var port = process.env.PORT || 3003;
var server = app.listen(port, function(){
  console.log("Server listening on port "+port);
});