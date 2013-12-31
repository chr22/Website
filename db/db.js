var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/website');

module.exports = mongoose.connection;

