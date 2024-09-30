const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const MovieController = require("../controllers/movieController");
const validateMovieData = require("../middlewares/validateMovieData");
const authenticateToken = require("../middlewares/authenticateToken");
const validateUserData = require("../middlewares/validateUserData");
const isAdmin = require("../middlewares/isAdmin");
const validateMoviesData = require("../middlewares/validateMoviesData");

const adminRoute = process.env.ADMIN_ROUTE || "/admin";
const postMovieRoute = process.env.POST_MOVIE_ROUTE || "/movies/post/one";
const postMoviesRoute = process.env.POST_MOVIES_ROUTE || "/movies/post/many";

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});

router.get(adminRoute, authenticateToken, isAdmin, (req, res) => {
  res.send({ message: "You are an admin." });
});

router.get("/movies", authenticateToken, MovieController.getMovies);
router.post(
  postMovieRoute,
  authenticateToken,
  isAdmin,
  validateMovieData,
  MovieController.postMovie
);

router.post(
  postMoviesRoute,
  authenticateToken,
  isAdmin,
  validateMoviesData,
  MovieController.postMoviesBulk
);
router.get("/movies/search", authenticateToken, MovieController.searchMovie);

router.post("/user/login", UserController.loginUser);
router.post("/user/register", validateUserData, UserController.registerUser);

module.exports = router;
