var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

// Creating routes
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    console.log(data);
    var handleBarObj = {
      burgers: data
    };
    console.log(handleBarObj);
    res.render("index", handleBarObj);
  });
});

router.post("/burgers", function(req, res) {
  burgers.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect("/");
  });
      console.log(req.body);
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});


module.exports = router;