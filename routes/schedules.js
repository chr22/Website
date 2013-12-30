//not done

var mongoskin = require('mongoskin');

var db = mongoskin.db('localhost:27017/schedules', {safe:true});
var schedules = db.collection('schedules');

// GET all
exports.schedules = function(req, res) {
	schedules.find().toArray(function(err, result) {
		if(err) throw err;		
		res.json({
			posts: result
		});
	});
};

// GET single
exports.schedule = function (req, res) {	
	schedules.findById(db.ObjectID.createFromHexString(req.params.id), function(err, result) {
		if(err) throw err;		
		res.json({
			post: result
		});
	});
};

// POST
exports.addSchedule = function (req, res) {
	posts.insert(req.body, null, function(err, result) {
		if(err) throw err;
		res.json(result);
	});
};

// PUT
exports.editSchedule = function (req, res) {	
	delete req.body._id;
	posts.updateById(db.ObjectID.createFromHexString(req.params.id), {$set: req.body}, {safe:true, multi:false}, function(err, success, result) {
		if(err) throw err;
		res.json(result);
	});
};

// DELETE
exports.deleteSchedule = function (req, res) {	
    posts.removeById(db.ObjectID.createFromHexString(req.params.id), function(err, result) {
		if(err) throw err;
		res.json(true);
	});
};