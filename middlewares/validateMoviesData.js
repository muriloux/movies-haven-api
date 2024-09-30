const Joi = require("joi");

const movieSchema = Joi.string().required();

const validateMoviesData = (req, res, next) => {
  console.log("Incoming request body:", req.body);

  const movies = req.body;

  if (!Array.isArray(movies)) {
    return res
      .status(400)
      .json({ error: "Please provide an array of movie titles." });
  }

  if (movies.length === 0) {
    return res
      .status(400)
      .json({ error: "The array of movie titles cannot be empty." });
  }

  for (let i = 0; i < movies.length; i++) {
    const { error } = movieSchema.validate(movies[i]);
    if (error) {
      return res.status(400).json({
        error: `Error in movie at index ${i}: ${error.details[0].message}`,
      });
    }
  }

  next();
};

module.exports = validateMoviesData;
