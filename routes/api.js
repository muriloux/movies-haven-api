const Movie = require("../models/movie");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log("Movies:", movies);
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/movies/search', async (req, res) => {
  try {
    const searchQuery = req.query.title;

    if (!searchQuery) {
      return res.status(400).json({ error: 'Please provide a search query' });
    }

    const movies = await Movie.find({ title: { $regex: new RegExp(searchQuery, 'i') } });

    res.json(movies);
  } catch (error) {
    console.error('Error searching for movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
