var http = require('http'),
	db = require('./db/db.js'),
	app = require('./app.js')(db);

// Start Server
http.createServer(app).listen(8888, function () {
  console.log('Express server listening on port ' + 8888);
});