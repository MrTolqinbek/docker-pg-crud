class Main {
	async get(req, res, next) {
		return res.status(200).send('<h1>Hello World</h1>');
	}
}
module.exports = new Main();
