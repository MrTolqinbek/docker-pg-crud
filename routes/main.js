const express = require('express');
const Main = require('../controllers/main');
const MainRouter = express.Router();

MainRouter.route('/').get(Main.get);

module.exports = MainRouter;
