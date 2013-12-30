
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log("was here");
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
