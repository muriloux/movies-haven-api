const express = require("express");
const htmlRoutes = require("./routes/html");
const apiRoutes = require("./routes/api");

const app = express();

htmlRoutes(app);
apiRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on " + port);
});
