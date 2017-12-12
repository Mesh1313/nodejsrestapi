var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: { type: String, default: 'n/a' },
	description: { type: String, default: 'n/a' },
	timeStamp: { type: Number }
});
TaskSchema.pre('save', function(next) {
	this.timeStamp = new Date().getTime();
	next();
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;