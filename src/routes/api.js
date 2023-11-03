function apiRoutes(app) {
  app.get("/api", (req, res) => {
    res.json({ message: "This is an API." });
  });
}

module.exports = apiRoutes;
