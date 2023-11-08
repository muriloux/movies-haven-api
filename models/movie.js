const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  curatorName: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema, "Movie");

module.exports = Movie;
