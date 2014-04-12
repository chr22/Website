(function() {
	'use strict';
	
	exports.index = function (req, res){			
		res.render('index');		
	};
	
	exports.partials = function (req, res) {		
		var name = req.params.name;			
		res.render('partials/' + name);
	};
	
	exports.posts = function (req, res) {	
		var name = req.params.name;
		res.render('partials/posts/' + name);	
	};
	
	exports.schedules = function (req, res) {	
		var name = req.params.name;
		res.render('partials/schedules/' + name);
	};
	
	exports.reports = function (req, res) {	
		var name = req.params.name;
		res.render('partials/reports/' + name);
	};
	
	exports.comments = function (req, res) {	
		var name = req.params.name;
		res.render('partials/comments/' + name);
	};
	
	exports.stopwatch = function (req, res) {	
		var name = req.params.name;
		res.render('partials/stopwatch/' + name);
	};
	
	exports.hundredBeers = function (req, res) {	
		var name = req.params.name;
		res.render('partials/hundredBeers/' + name);
	};
	
	exports.login = function (req, res) {			
		res.render('partials/login');
	};
	
	exports.user = function (req, res) {		
		if (req.session.passport.user === undefined) {
			res.redirect('/login');
			//res.render('/partials/login');
			//res.json(false);
		} else {
			/*res.render('partials/user', {
				title: 'Welcome!',
				user: req.user
			});*/
			//res.json(true);
			res.render('partials/' + name);
		}
	};
}());