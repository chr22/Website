var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = mongoose.model('HundredBeers', {	
	Name: String,
	Beers: Number	
});