const express = require("express");
const routes = express.Router();

const apiRouter = require("./api");
const htmlRouter = require("./html");

routes.use("/api", apiRouter);
routes.use("/", htmlRouter);

module.exports = routes;
