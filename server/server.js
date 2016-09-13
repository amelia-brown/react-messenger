var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();
var port = 8080;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({extended: true}));
require('./router')(app, express);

app.listen(port, function(err, data) {
  if (err) { throw err; };
  console.log('Server now listening on port ', port);
});
