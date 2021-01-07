// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var finance = {
  allExpenses: function(cb) {
    orm.all("expenses", function(res) {
      cb(res);
    });
  },
  allAccounts: function(cb) {
    orm.all("accounts", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createExpenses: function(cols, vals, cb) {
    orm.create("expenses", cols, vals, function(res) {
      cb(res);
    });
  },
  createAccounts: function(cols, vals, cb) {
    orm.create("accounts", cols, vals, function(res) {
      cb(res);
    });
  },
  updateExpenses: function(cols, vals, cb) {
    orm.update("expenses", cols, vals, function(res) {
      cb(res);
    });
  },
  updateAccounts: function(cols, vals, cb) {
    orm.update("accounts", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = finance;
