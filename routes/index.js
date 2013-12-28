
/*
 * GET home page.
 */

exports.index = function(req, res){
  	res.render('index');
};

exports.partials = function (req, res) {
	console.log(req.params);
  	var name = req.params.name;
  	res.render('partials/' + name);
};

/*exports.posts = function (req, res) {
	console.log(req.params);
  	var name = req.params.name;
  	res.render('partials/posts/' + name);
};*/