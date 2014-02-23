(function() {
	'use strict';
	
	var db = require('../db/db.js'),
		Report = require('../db/schemas/reports'),
		Comment = require('../db/schemas/comments');
	
	exports.reports = function (req, res) {		
		Report.find(function (err, result) {
			if (err) throw err;
			res.json({
				reports: result
			});
		});
	};
	
	exports.reportsWithComments = function (req, res) {
		Report.find()
			.populate('comments')
			.exec(function(err, result) {
				if (err) throw err;
				res.json({
					reports: result
				});
			});
	};
	
	exports.report = function (req, res) {	
		Report.findById(req.params.id, function(err, result) {
			if (err) throw err;
			res.json({
				report: result
			});
		});
	};
	
	exports.reportWithComments = function (req, res) {
		Report.findById(req.params.id)
			.populate('comments')
			.exec(function(err, result) {
				if (err) throw err;
				res.json({
					report: result
				});
			});
	};
	
	exports.addReport = function (req, res) {	
		var report = new Report({		
			Subject: req.body.Subject,
			Title: req.body.Title,
			Text: req.body.Text,		
			LastUpdated: req.body.LastUpdated,
			State: req.body.State, 
			Comments: req.body.CommentIds
		});
		
		report.save(function(err, result){
			if (err) throw err;
			res.json({
				report: result
			});
		});
	};
	
	exports.editReport = function(req, res) {
		var id = req.body._id;
		delete req.body._id;
		Report.findOneAndUpdate({_id: id}, req.body, function(err, result) {
			if (err) throw err;
			res.json({
				report: result
			});
		});
	};
	
	exports.deleteReport = function(req, res) {
		Report.remove({_id: req.params.id}, function(err) {
			if (err) throw err;
			res.json(true);
		});
	};
	
	//for dev
	exports.deleteReports = function (req, res) {
		Report.remove({}, function (err) {
			if (err) throw err;
			Comment.remove({}, function (err) {
				if (err) throw err;
				res.json(true);
			});		
		}); 
	};

}());