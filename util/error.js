module.exports = (err, req, res, next) => {
	res.status(400).send(err.message);
};
