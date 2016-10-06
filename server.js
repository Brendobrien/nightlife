const express = require('express'),
  app = express(),
  api = require('./controllers/api'),
  bodyParser = require('body-parser');
  
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
// mongoose.connect('mongodb://127/auth');

// App Setup
require('dotenv').load(),
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
// router(app);

app.route('/api/yelp')
.get((req, res) => api.yelp(req,res));

app.use(express.static('public'));
app.use(express.static('public/views'));

var port = process.env.PORT || 3003;
var server = app.listen(port, function(){
  console.log("Server listening on port "+port);
});