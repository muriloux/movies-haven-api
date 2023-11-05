const express = require('express');
const apiRouter = require('./api');
const htmlRouter = require('./html');

const routes = express.Router();

// API routes
routes.use('/api', apiRouter);

// HTML routes
routes.use('/', htmlRouter);

module.exports = routes;
