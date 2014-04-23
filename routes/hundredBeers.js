(function() {
	'use strict';
	
	var db = require('../db/db.js'),
		Beer = require('../db/schemas/hundredBeers');
	
	exports.status = function (req, res) {		
		Beer.find(function (err, result) {
			if (err) throw err;
			res.json({
				status: result
			});
		});
	};
	
	// POST
	exports.addPerson = function (req, res) {		
		var person = new Beer({
			Name: req.body.Name,
			Beers: req.body.Beers
		});

		person.save(function(err, result) {
			if(err) throw err;
			res.json(result);
		});
	};
	
	exports.addBeer = function(req, res) {
		var id = req.body._id;
		delete req.body._id;
		if(typeof req.body.Beers === 'number') {
			req.body.Beers++;	
		} else {
			req.body.Beers = 0;
		}
		
		
		Beer.findOneAndUpdate({_id: id}, req.body, function(err, result) {
			if (err) throw err;
			res.json({
				person: result
			});
		});
	};
	
	exports.subtractBeer = function(req, res) {
		var id = req.body._id;
		delete req.body._id;
		if(typeof req.body.Beers === 'number') {
			req.body.Beers--;	
		} else {
			req.body.Beers = 0;
		}
		
		Beer.findOneAndUpdate({_id: id}, req.body, function(err, result) {
			if (err) throw err;
			res.json({
				person: result
			});
		});
	};
	
	exports.deletePerson = function(req, res) {
		Beer.remove({_id: req.params.id}, function(err) {
			if (err) throw err;
			res.json(true);
		});
	};
	
}());