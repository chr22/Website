module.exports = function (db) {
	var express = require('express'),
		MongoStore = require('connect-mongo')(express),
		passport = require('./auth'),
		routes = require('./routes'),
		posts = require('./routes/posts'),
		schedules = require('./routes/schedules'),
		reports = require('./routes/reports'),
		comments = require('./routes/comments'),		
		path = require('path'),				
		app = express();
	
	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon(path.join(__dirname + "/public/images/favicon.png")));
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.session({
		secret: 'verySecret',
		store: new MongoStore({
			mongoose_connection: db
		})
	}));
	app.use(passport.initialize());
	app.use(passport.session());	
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(function(req, res, next){
		res.set('X-Powered-By', 'Svejstrups Playground');
		next();
	});
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
	
	
	// development only
	if (app.get('env') === 'development') {
		app.use(express.errorHandler());
	}
	
	// production only
	if (app.get('env') === 'production') {
		// TODO
	}
	
	// Routes
	
	// Serve index and view partials
	app.get('/', routes.index);
	app.get('/partials/:name', routes.partials);
	app.get('/partials/posts/:name', routes.posts);
	app.get('/partials/schedules/:name', routes.schedules);
	app.get('/partials/reports/:name', routes.reports);
	app.get('/partials/comments/:name', routes.comments);
	
	//login
	app.get('/login', routes.login);
	/*app.post('/login', passport.authenticate('local', {
		failureRedirect: '/partials/header',
		successRedirect: '/'
	}));*/
	app.post('/login', passport.authenticate('local'), function(req, res) {
		console.log(req.user);		
		res.json("true");
	});
	app.get('/user', routes.user);
	
	// JSON API
	
	// Posts
	app.get('/posts/posts', posts.posts);	
	app.get('/posts/post/:id', posts.post);
	app.post('/posts/post', posts.addPost);
	app.put('/posts/post/:id', posts.editPost);
	app.delete('/posts/post/:id', posts.deletePost);
	
	// Reports
	app.get('/reports/reports', reports.reports);
	app.get('/reports/reportsWithComments', reports.reportsWithComments);
	app.get('/reports/report/:id', reports.report);
	app.get('/reports/reportWithComments/:id', reports.report);	
	app.post('/reports/addReport', reports.addReport);
	app.put('/reports/editReport', reports.editReport);
	app.delete('/reports/deleteReport', reports.deleteReport);
	app.delete('/reports/deleteReports', reports.deleteReports);
	
	return app;
};


