var mongoose = require('mongoose');

module.exports = mongoose.model('Reports', {
	subject: String,
	title: String,
	text: String,
	dateCreated: { type: Date, default: Date.now },
	lastUpdate: Date,
	state: String,
	comments: {
		title: String,
		text: String,
		name: String,
		dateCreated: {type: Date, default: Date.now }
	}
})

//var Schema = mongoose.Schema;
//	//ObjectId = Schema.ObjectId;
//
//var reports = new Schema({
//	subject: String,
//	title: String,
//	text: String,
//	dateCreated: { type: Date, default: Date.now },
//	lastUpdate: Date,
//	state: String,
//	comments: {
//		title: String,
//		text: String,
//		name: String,
//		dateCreated: {type: Date, default: Date.now }
//	}	
//});