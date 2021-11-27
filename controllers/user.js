const UserModel = require('../models/user');

class User {
	async getAll(req, res, next) {
		try {
			const all = await UserModel.findAll();
			return res.status(200).json(all);
		} catch (error) {
			next(error);
		}
	}
	async getOne(req, res, next) {
		try {
			const user = await UserModel.findByPk(req.params.id);
			return res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
	async createOne(req, res, next) {
		try {
			const usermodel = {
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
			};
			const user = await UserModel.create(usermodel);
			return res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
	async updateOne(req, res, next) {
		const usermodel = {
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		};
		try {
			const user = UserModel.update(usermodel, {
				where: { id: req.params.id },
			});

			return res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
	async deleteOne(req, res, next) {
		try {
			const user = await UserModel.destroy({ where: { id: req.params.id } });
			return res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
}
module.exports = new User();
