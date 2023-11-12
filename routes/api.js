const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const MovieController = require("../controllers/movieController");
const validateMovieData = require("../middlewares/validateMovieData");

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});
router.get("/movies", MovieController.getMovies);
router.post("/movies", validateMovieData, MovieController.postMovie);
router.get("/movies/search", MovieController.searchMovie);
router.post("/user/register", UserController.registerUser);

module.exports = router;
