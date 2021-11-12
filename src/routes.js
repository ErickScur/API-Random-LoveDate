const express = require('express');
const routes = express.Router();
const DateController = require('./DateController');

routes.get('/randomDate', DateController.randomDate);

module.exports = routes;