require("dotenv").config();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;

const express = require("express");
const routes = require("./routes");
const connectDB = require("./db/db");

const app = express();

connectDB();
app.use(bodyparser.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server running on " + port);
});
