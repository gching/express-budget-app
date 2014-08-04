var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  var db = req.db;
  var collection = db.get("productcollection");
  collection.find({},{},function(e,products_coll){
        res.render('budget', {
            title : "Current Product list",
            products : products_coll
        });
    });
});


module.exports = router;
