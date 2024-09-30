const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const MovieController = require("../controllers/movieController");
const validateMovieData = require("../middlewares/validateMovieData");
const authenticateToken = require("../middlewares/authenticateToken");
const validateUserData = require("../middlewares/validateUserData");
const isAdmin = require("../middlewares/isAdmin");

const adminRoute = process.env.ADMIN_ROUTE || "/admin";
const postMoviesRoute = process.env.POST_MOVIES_ROUTE || "/movies";

router.get("/", (req, res) => {
  res.send({ message: "This is an API." });
});

router.get(adminRoute, authenticateToken, isAdmin, (req, res) => {
  res.send({ message: "You are an admin." });
});

router.get("/movies", authenticateToken, MovieController.getMovies);
router.post(
  postMoviesRoute,
  authenticateToken,
  isAdmin,
  validateMovieData,
  MovieController.postMovie
);
router.get("/movies/search", authenticateToken, MovieController.searchMovie);

router.post("/user/login", UserController.loginUser);
router.post("/user/register", validateUserData, UserController.registerUser);

module.exports = router;
