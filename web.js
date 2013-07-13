var fs = require('fs');
var infile = "index.html";
var txt = fs.readFileSync(infile);
var buf = new Buffer(txt);
var txtreplace=buf.toString('utf-8');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(txtreplace);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
