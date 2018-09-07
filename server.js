var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.listen(PORT, function() {
  console.log(`Listening to PORT ${PORT}`);
});
