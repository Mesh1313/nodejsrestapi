var errorHandler = require('./db-error-handler.module');
var Task = require('../dbSchemas/task.schema');

function addTask(taskObj, successCallback, errorCallback) {
	var newTask = new Task(taskObj);

	newTask.save(function (err, user) {
		if (err) {
			errorHandler(err);
			errorCallback(err);
			return
		}
		successCallback(user);
	});
}

function getTasks(successCallback, errorCallback) {
	Task.find({}, function(err, users) {
		if (err) {
			errorHandler(err);
			errorCallback(err);
			return
		}
		successCallback(users);
	});
}

module.exports = {
	addTask: addTask,
	getTasks: getTasks
};