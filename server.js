// load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// set up express server
var app = express();
var PORT = 8080;

// expose public directory
app.use(express.static(path.join(__dirname, 'app/public')));

// middleware for parsing incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// routing
require(path.join(__dirname, 'app/routing/htmlRoutes'))(app);
require(path.join(__dirname, 'app/routing/apiRoutes'))(app);

// start listening on PORT
app.listen(PORT, function() {
  console.log(`Listening to PORT ${PORT}`);
});
