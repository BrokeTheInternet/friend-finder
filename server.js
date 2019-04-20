var bodyParser = require ('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//setting static folder
app.use(express.static('app/public'));

//bringing in routes
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

//server listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});