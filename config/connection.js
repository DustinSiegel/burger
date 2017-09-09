// Connect to mysql ===================================================================================================
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

// Check to see if there is a connection and if not set one up ========================================================
if (process.env.burger_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "burger_db"
  })
}

// Carry out the connection and console log the result ================================================================
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection file ==============================================================================================
module.exports = connection;