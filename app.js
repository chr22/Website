var express = require('express'),
  	routes = require('./routes'),
  	posts = require('./routes/posts'),
	schedules = require('./routes/schedules'),
	reports = require('./routes/reports'),
	comments = require('./routes/comments'),
  	http = require('http'),
	path = require('path');	

var app = module.exports = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};

// Routes

// Serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/partials/posts/:name', routes.posts);
app.get('/partials/schedules/:name', routes.schedules);
app.get('/partials/reports/:name', routes.reports);
app.get('/partials/comments/:name', routes.comments);

// JSON API

// Posts
app.get('/posts/posts', posts.posts);

app.get('/posts/post/:id', posts.post);
app.post('/posts/post', posts.addPost);
app.put('/posts/post/:id', posts.editPost);
app.delete('/posts/post/:id', posts.deletePost);

// Schedule
//app.get('/schedule/schedules', schedules.schedules);
//app.get('/schedule/schedule/:id', schedules.schedule);

// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);

// Start Server
http.createServer(app).listen(8888, function () {
  console.log('Express server listening on port ' + 8888);
});
