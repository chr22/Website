var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = mongoose.model('Comments', {	
	Title: String,
	Text: String,
	UserId: String,
	Page: String,  //which side to be displayed on
	DateCreated: {type: Date, default: Date.now },
	ReportId: {type: String, ref: 'Reports'}
});