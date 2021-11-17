const express = require('express');
const routes = express.Router();
const DateController = require('./DateController');

routes.get('/randomDate/:qtd?', DateController.randomDate);

module.exports = routes;