const Movie = require("../models/movie");

class MovieService {
  static async getMovies() {
    try {
      const movies = await Movie.find({});
      return { success: true, movies };
    } catch (error) {
      console.error("Error getting movies:", error);
      return { success: false, message: "Failed getting movies." };
    }
  }

  static async postMovie(title, curatorName) {
    try {
      const movieExists = await Movie.findOne({ title });
      if (movieExists) {
        return { success: false, message: "This movie already exists." };
      }

      const newMovie = new Movie({
        title,
        curatorName,
      });

      await newMovie.save();

      return {
        success: true,
        message: "Movie posted successfully",
        movie: newMovie,
      };
    } catch (error) {
      console.error("Error posting movie:", error);
      return { success: false, message: "Failed posting movie." };
    }
  }

  static async searchMovie(title) {
    try {
      const movies = await Movie.find({ title: new RegExp(title, "i") });
      if (!movies) {
        return { success: false, message: "No movies found." };
      } else {
        return { success: true, movies };
      }
    } catch (error) {
      console.error("Error searching for movies:", error);
      return { success: false, message: "Failed searching for movies." };
    }
  }
}

module.exports = MovieService;
