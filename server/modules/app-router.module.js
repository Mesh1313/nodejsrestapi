var express = require('express');
var router = express.Router();
var taskDataAccess = require('./task-data-access.module');

router.get('/tasks', function(req, res) {
	taskDataAccess.getTasks(
		function(tasks) {
			console.log(tasks);
			res.status(200).json(tasks);
		},
		function(err) {
			res.status(503).json(err);
		}
	);
});

router.post('/tasks', function(req, res) {
	var newTask = req.body;

	taskDataAccess.addTask(newTask,
		function(task) {
			res.status(200).json(task);
		},
		function(err) {
			res.status(503).json(err);
		}
	);
});

module.exports = router;