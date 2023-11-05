const express = require('express');
const path = require("path");
const router = express.Router();

// Define HTML routes
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views/index.html"))
});

// Add more HTML routes as needed

module.exports = router;
