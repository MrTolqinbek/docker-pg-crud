const express = require('express');
const MainRouter = require('../routes/main');
const UserRouter = require('../routes/user');
const sequelize = require('../util/db');
const error = require('../util/error');
const app = express();
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET',
		'POST',
		'DELETE',
		'PUT',
		'PATCH'
	);
	next();
});
const port = 5000;
app.use('/', MainRouter);

app.use('/users', UserRouter);

async function start() {
	try {
		await sequelize.sync({
			force: false,
		});
		app.listen(port, () => {
			console.log('Server started');
		});
	} catch (e) {
		console.log(e);
	}
}
app.use(error);
start();
