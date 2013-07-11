var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var bufToPrint = fs.readFileSync('index.html');
var textToPrint = bufToPrint.toString(); 

app.get('/', function(request, response) {
  response.send(textToPrint);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
