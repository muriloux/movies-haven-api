const Joi = require("joi");

const movieSchema = Joi.object({
  title: Joi.string().required(),
  curatorName: Joi.string().required(),
});

const validateMovieData = (req, res, next) => {
  const { error } = movieSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = validateMovieData;
