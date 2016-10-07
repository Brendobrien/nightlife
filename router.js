const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const api = require('./controllers/api')

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/testy', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' });
  });
  app.post('/test', requireAuth, function(req, res) {
    res.send(req.body.barid);
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/api/yelp', function (req, res) {api.yelp(req,res)});
}