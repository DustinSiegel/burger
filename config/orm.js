// Connect to the connection.js file ======================================================================================
var connection = require("./connection.js");

// creates and array that finds the end of the table data and sets the next set of data there =============================
function putInData(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function sendObject(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

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
			console.log("Result", result)
		});
	},

// An ORM that inserts data into one table entry ===========================================================================	
	insertOne: function(burgers, columns, insertIt, show){
		var queryString = "INSERT INTO " + burgers;		
		queryString += "(";
		queryString += columns.toString();
		queryString += ") ";
		queryString += "VALUES ";
		queryString += putInData(insertIt.length);
		queryString += ") ";

		console.log("queryString", queryString)
		connection.query(queryString, insertIt, function(err, result) {
			if (err) {
				throw err;
      		};
      		show(result);
      	});
	},

// An ORM that updates one table entry ===================================================================================
	updateOne: function(burgers, values, condition, show) {
    	var queryString = "UPDATE " + burgers;
	    queryString += " SET ";
	    queryString += sendObject(values);
	    queryString += " WHERE ";
	    queryString += condition;

	    console.log("queryString", queryString)
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