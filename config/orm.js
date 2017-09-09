// Connect to the connection.js file ======================================================================================
var connection = require("./connection.js");

// A variable to hold the Object Relational Models ========================================================================
var orm = {
	
// An ORM that selects all of the table info ==============================================================================
	selectAll: function(burgers, show){
		var queryString = "SELECT * FROM " + burgers + ";"
		
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			show(result);
		});
	},

// An ORM that inserts data into on table entry ===========================================================================	
	insertOne: function(burgers, columns, insertIt, show){
		var queryString += "INSERT INTO " + burgers;
		
		queryString += "(";
		queryString += columns.toString();
		queryString += ") ";
		queryString += "VALUES ";
		queryString += insertIt;
		queryString += ") ";

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
      		};
      		show(result);
      	});
	},

// An ORM that updates one table entry ===================================================================================
	updateOne: function(burgers, oneValue, change, show) {
    	var queryString = "UPDATE " + burgers;

	    queryString += " SET ";
	    queryString += objToSql(onValue);
	    queryString += " WHERE ";
	    queryString += change;

    	connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
      		}
      		show(result);
    	});
	}
};

// Export the Object Relational Models ===================================================================================
module.exports = orm;