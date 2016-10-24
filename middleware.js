const bodyParser = require('body-parser'),
  morgan = require('morgan'),
  cors = require('cors'),
  router = require('./router.js');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json({ type: '*/*' }));
  router(app);
}