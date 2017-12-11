const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const appRouter = require('./modules/app-router.module');
const dbConnectionModule = require('./modules/db-connection.module');

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

dbConnectionModule.initDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));


// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/client/src/index.html');
// });
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/api/v1', appRouter);

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;