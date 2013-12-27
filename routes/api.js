var mongoskin = require('mongoskin');

var db = mongoskin.db('localhost:27017/blog', {safe:true});
var posts = db.collection('posts');

// GET all
exports.posts = function (req, res) {
	posts.find().toArray(function(err, result) {
		if(err) throw err;
		console.log(result);
		console.log("development");
		res.json({
			posts: result
		});
	});
};

// GET single
exports.post = function (req, res) {
	console.log("get single");
	posts.findById(db.ObjectID.createFromHexString(req.params.id), function(err, result) {
		if(err) throw err;
		console.log(result);
		res.json({
			post: result
		});
	});
};

// POST
exports.addPost = function (req, res) {
	posts.insert(req.body, null, function(err, result) {
		if(err) throw err;
		console.log("addpost");
		console.log(result);
		res.json(result);
	});
};

// PUT
exports.editPost = function (req, res) {
	console.log("edit");
	delete req.body._id;
	posts.updateById(db.ObjectID.createFromHexString(req.params.id), {$set: req.body}, {safe:true, multi:false}, function(err, success, result) {
		if(err) throw err;
		res.json(result);
	});
};

// DELETE
exports.deletePost = function (req, res) {
	console.log("delete");
    posts.removeById(db.ObjectID.createFromHexString(req.params.id), function(err, result) {
		if(err) throw err;
		res.json(true);
	});
};
