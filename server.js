var express = require('express');
var app = express();
var appRouter = require('./modules/app-router.module');
var dbConnectionModule = require('./modules/db-connection.module');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

dbConnectionModule.initDb();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1', appRouter);

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;