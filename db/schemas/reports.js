var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = mongoose.model('Reports', {	
	Subject: String,  //What project is it about
	Title: String,
	Text: String,
	DateCreated: { type: Date, default: Date.now },
	LastUpdated: Date,
	State: String,  //not seen, acknowledged, being worked on, fixed
	Comments: [{type: String, ref: 'Comments'}]
});