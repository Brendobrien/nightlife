const express = require('express'),
  app = express();

app.route('/')
.get((req, res)=> res.sendFile(process.cwd() + '/index.html'));


var port = process.env.PORT || 3003;
// const server = http.createServer(app);
var server = app.listen(port, function(){
  console.log("Server listening on port "+port);
});