const { getMovies, postMovie } = require("../services/movieServices.js");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los datos",
        error: error.message,
      });
    }
  },

  postMovie: async (req, res) => {
    try {
      const {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
        description,
      } = req.body;
      const savedMovie = await postMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
        description,
      });
      res.status(200).json(savedMovie);
    } catch (error) {
      res.status(500).json({
        messaje: "Error al obtener los datos",
        error: error.message,
      });
    }
  },
};
