var app = require('./app');
var mongoose = require('mongoose');

var port = 3001;

app.listen(port, function() {
	console.log("Listening on port " + port);
});
