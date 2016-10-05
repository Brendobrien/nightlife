const express = require('express'),
  app = express();

app.route('/')
.get((req, res)=> res.sendFile(process.cwd() + '/index.html'));

app.route('/signin')
.get((req, res)=> res.sendFile(process.cwd() + '/signin.html'));

app.route('/signup')
.get((req, res)=> res.sendFile(process.cwd() + '/signup.html'));

var port = process.env.PORT || 3003;
// const server = http.createServer(app);
var server = app.listen(port, function(){
  console.log("Server listening on port "+port);
});