const Joi = require("joi");

const userJoiSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

function validateUser(req, res, next) {
  const { error } = userJoiSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

module.exports = { validateUser };
