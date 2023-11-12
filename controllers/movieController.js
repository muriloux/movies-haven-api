const MovieService = require("../services/movieService");

class MovieController {
  static async getMovies(req, res) {
    try {
      const movies = await MovieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error("Error getting movies:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async postMovie(req, res) {
    try {
      const { title, curatorName } = req.body;

      if(!title || !curatorName){
        return res
          .status(400)
          .json({ error: "Please provide 'title' and 'curatorName' fields." });
      }

      const postMovieResponse = await MovieService.postMovie(
        title,
        curatorName
      );

      if (postMovieResponse.success) {
        res.status(201).json({
          message: postMovieResponse.message,
          movie: postMovieResponse.movie,
        });
      } else {
        res.status(400).json({ error: postMovieResponse.message });
      }
    } catch (error) {
      console.error("Error posting movie:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async searchMovie(req, res) {
    try {
      const { title } = req.query;

      if (!title) {
        return res
          .status(400)
          .json({ error: "Please provide a title for the search." });
      }
      const searchMovieResponse = await MovieService.searchMovie(title);

      if (searchMovieResponse.success) {
        res.status(200).json({
          movies: searchMovieResponse.movies,
        });
      } else {
        res.status(400).json({ error: searchMovieResponse.message });
      }
    } catch (error) {
      console.error("Error searching movie:", error);
    }
  }
}

module.exports = MovieController;
