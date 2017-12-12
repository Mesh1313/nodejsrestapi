var mongoose = require('mongoose');

function initDb() {
	mongoose.connect('mongodb://ovsiannnikov:Jack1991@ds044787.mlab.com:44787/ovsdb1', {
		useMongoClient: true
	});

	mongoose.Promise = global.Promise;
	mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = {
	initDb: initDb
};