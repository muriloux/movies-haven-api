require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const routes = require("./routes");
const connectDB = require("./db/db");
const app = express();

connectDB();
routes(app);

app.listen(port, () => {
  console.log("Server running on " + port);
});
