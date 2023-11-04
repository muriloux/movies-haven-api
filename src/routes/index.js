const apiRoutes = require("./api");
const htmlRoutes = require("./html");

function routes(app) {
  htmlRoutes(app);
  apiRoutes(app);
}

module.exports = routes;
