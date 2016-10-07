const express = require('express'),
  app = express(),
  // api = require('./controllers/api'),
  bodyParser = require('body-parser');
  
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router.js');

// DB Setup
// mongoose.connect(process.env.MONGO_URI);
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
require('dotenv').load(),
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Front-End 
app.use(express.static('public'));

var port = process.env.PORT || 3003;
var server = app.listen(port, function(){
  console.log("Server listening on port "+port);
});