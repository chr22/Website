(function() {
	'use strict';
	
	var mongoskin = require('mongoskin');
	
	var db = mongoskin.db('localhost:27017/website', {safe:true});
	var posts = db.collection('posts');
	
	// GET all
	exports.posts = function (req, res) {
		console.log("in posts");
		posts.find().toArray(function(err, result) {
			if(err) throw err;		
			res.json({
				posts: result
			});
		});
	};
	
	// GET single
	exports.post = function (req, res) {	
		posts.findById(db.ObjectID.createFromHexString(req.params.id), function(err, result) {
			if(err) throw err;		
			res.json({
				post: result
			});
		});
	};
	
	// POST
	exports.addPost = function (req, res) {
		posts.insert(req.body, null, function(err, result) {
			if(err) throw err;
			res.json(result);
		});
	};
	
	// PUT
	exports.editPost = function (req, res) {	
		delete req.body._id;
		posts.updateById(db.ObjectID.createFromHexString(req.params.id), {$set: req.body}, {safe:true, multi:false}, function(err, success, result) {
			if(err) throw err;
			console.log(req.body);
			res.json(result);
		});
	};
	
	// DELETE
	exports.deletePost = function (req, res) {	
		posts.removeById(db.ObjectID.createFromHexString(req.params.id), function(err, result) {
			if(err) throw err;
			res.json(true);
		});
	};	
}());
