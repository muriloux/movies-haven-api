const express = require('express');
const router = express.Router();

// Define API routes
router.get('/', (req, res) => {
  res.send({message: "This is an API."})
});

// Add more API routes as needed

module.exports = router;
