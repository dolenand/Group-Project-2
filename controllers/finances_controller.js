const { json } = require("express");
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var finances = require("../models/finances.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  finances.allExpenses(function(data) {
    var hbsObject = {
      finances: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/chart", function(req, res) {
  finances.allExpenses(function(data) {
    var hbsObject = {
      finances: data
    };
    console.log(hbsObject);
    res.render("chart", hbsObject);
  });
});

router.get("/accounts", function(req, res) {
  finances.allAccounts(function(data) {
    var hbsObject = {
      finances: data
    };
    console.log(hbsObject);
    res.render("accounts", hbsObject);
  });
});

router.post("/api/expenses", function(req, res) {
  finances.createExpenses([
    "expense_type", "ex_amount"
  ], [
    req.body.expense_type, req.body.ex_amount
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.get("/api/expenses", function(req, res) {
  finances.allExpenses(function(data) {
    res.json({
      expense_type: req.expense_type,
      ex_amount: req.ex_amount
    })

  });
});

router.post("/api/accounts", function(req, res) {
  finances.createAccounts([
    "action_type", "amount"
  ], [
    req.body.action_type, req.body.amount
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/expenses/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  finances.updateExpenses({
    ex_amount: req.body.ex_amount
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/accounts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  finances.updateAccounts({
    amount: req.body.amount
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;



