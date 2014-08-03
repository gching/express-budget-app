var express = require('express');
var app = express();
var path = require('path');

var budget = require('./routes/budget');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', budget)
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
