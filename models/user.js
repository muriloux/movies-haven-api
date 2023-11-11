const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // hash and salt the password for security
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userJoiSchema = {
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  createdAt: Joi.date(),
};

const User = mongoose.model("User", userSchema, "User");

module.exports = {
  User,
  userJoiSchema,
};
