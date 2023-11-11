const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  ip: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userJoiSchema = {
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  ip: Joi.string().required(),
  createdAt: Joi.date(),
};

const User = mongoose.model("User", userSchema, "User");

module.exports = User;
