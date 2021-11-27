const express = require('express');
const User = require('../controllers/user');
const UserRouter = express.Router();

UserRouter.get('/', User.getAll)
	.get('/:id', User.getOne)
	.post('/', User.createOne)
	.put('/:id', User.updateOne)
	.delete('/:id', User.deleteOne);

module.exports = UserRouter;
