var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var responseBuffer = fs.readFileSync('index.html');
var bufferToString = responseBuffer.toString();

app.get('/', function(request, response) {
  response.send(bufferToString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
