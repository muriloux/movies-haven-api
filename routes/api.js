const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const MovieController = require("../controllers/movieController");
const validateMovieData = require("../middlewares/validateMovieData");
const { authenticateToken } = require("../middlewares/authenticateToken");
const validateUserData = require("../middlewares/validateUserData");

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});
router.get("/movies", authenticateToken, MovieController.getMovies);
router.post(
  "/movies",
  authenticateToken,
  validateMovieData,
  MovieController.postMovie
);
router.get("/movies/search", authenticateToken, MovieController.searchMovie);
router.post("/user/register", validateUserData, UserController.registerUser);

module.exports = router;
