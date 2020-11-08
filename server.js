// M
const mongoose = require('mongoose');
require('dotenv').load();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDb'))
  .catch((err) => console.error(err));

// E
const express = require('express');
const app = express();
const middleware = require('./middleware.js');
middleware(app);

// A
app.use(express.static('public'));

// N
var port = process.env.PORT || 3003;
var server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
