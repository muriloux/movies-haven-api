const path = require("node:path");

function htmlRoutes(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "..", "views/index.html"));
  });
}

module.exports = htmlRoutes;
