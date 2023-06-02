const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

// api requests
route.post('/api/currency', controller.create);
route.get('/api/currency', controller.find);

module.exports = route