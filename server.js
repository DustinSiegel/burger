// Dependencies ============================================================================================================
var express = require("express");
var bodyParser = require("body-parser"); 
var methodOverride = require('method-override');
var app = express();	
var PORT = process.env.PORT || 4000; 

// BodyParser types =======================================================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with the X-HTTP-Method-Override header in the request =========================================================
app.use(methodOverride('_method'));

// Points the server to the route files ===================================================================================
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// App listener with an alert =============================================================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});