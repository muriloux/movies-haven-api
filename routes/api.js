const Movie = require("../models/movie");
const express = require("express");
const requestIp = require("request-ip");
const UserController = require("../controllers/userController");
const UserService = require("../services/userService");
const MovieController = require("../controllers/movieController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});
router.get("/movies", MovieController.getMovies);
router.post("/movies", MovieController.postMovie);
router.get("/movies/search", MovieController.searchMovie);
router.post("/user/register", UserController.registerUser);

module.exports = router;
