var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/express-budget-app');
var helpers = require('express-helpers')(app);

var budget = require('./routes/budget');
var products = require('./routes/products');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded());

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', budget);
app.use('/products', products);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
