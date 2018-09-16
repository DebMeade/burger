var express = require ("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    // console.log("in callback");
    res.json({ id: result.insertId });
  });
});

router.put("/api/devoured/:id", function(req, res) {
  var condition = "id =" + req.params.id;
  console.log("insideRoute",req.params);
  burger.updateOne({
    devoured: req.body.devoured
  },condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.put('/burgers/updateOne/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.updateOne({ devoured: req.body.devoured }, condition, function() {
//       res.redirect('/burgers');
//   });
// });

module.exports = router;