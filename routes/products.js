var express = require('express');
var router = express.Router();


router.get('/add', function(req, res){
  res.render("add", {title: "Add New Product"});
});


router.get('/:id', function(req, res){
  var db = req.db;
  var collection = db.get('productcollection');
  collection.findById(req.params.id,function(err, doc){
    res.send(doc);
  });
});

router.post('/', function(req, res){
  // Set our internal DB variable
  var db = req.db;
  var collection = db.get('productcollection');
  var prod = req.body.product_name
  var price =  req.body.price

  collection.insert({
        "name" : prod,
        "price" : price
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("/");
            // And forward to success page
            res.redirect("/");
        }
    });
})


module.exports = router;
