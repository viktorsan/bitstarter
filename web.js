var fs = require('fs');
var express = require('express');

var buffer = new Buffer(fs.readFileSync('index.html',"utf-8");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
