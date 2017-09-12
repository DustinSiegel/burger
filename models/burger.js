// Connect to the Object Relational Model ===============================================================================
var orm = require("../config/orm.js");

// A variable to hold of the connections ================================================================================
var burgers = {
	
// Uses the orm to connect and manipulate the data ======================================================================
	selectAll: function(show) {
    	orm.selectAll("burgers", function(res) {
      	show(res);
    	});
  	},

  	insertOne: function(columns, insertIt, show) {
    	orm.insertOne("burgers", columns, insertIt, function(res) {
      	show(res);
    	});
  	},
  	updateOne: function(values, condition, show) {
    	orm.updateOne("burgers", values, condition, function(res) {
      	show(res);
    	});
  	},
};

// Exports the burger varaible ==========================================================================================
module.exports = burgers;