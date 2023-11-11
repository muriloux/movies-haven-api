const Movie = require("../models/movie");
const express = require("express");
const UserService = require("../services/userService");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});

router.post("/register", async (req, res) =>{

  try {
  const {username, email} = req.body;
  const ip = req.ip;
  const registrationResponse = await UserService.registerUser(username, email, ip);

  if(registrationResponse.success){
    res.status(201).json({ message: registrationResponse.message, token: registrationResponse.token });
  } else {
    res.status(400).json({ error: registrationResponse.message });
  } 
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

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
