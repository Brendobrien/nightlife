const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const api = require('./controllers/api')
const bar = require('./controllers/bar')

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // User
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  // Bars
  app.get('/bars', function (req,res) {bar.listBars(req,res)})
  app.post('/going', requireAuth, function (req,res) {bar.goingToBar(req,res)})

  // API
  app.get('/api/yelp', function (req, res) {api.yelp(req,res)});
}