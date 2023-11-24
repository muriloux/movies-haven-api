const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["user"],
  },
  ip: {
    type: String,
    required: true,
    default: null,
  },
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
