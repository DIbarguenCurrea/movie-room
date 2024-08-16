const Movie = require("../models/movieModels.js");

module.exports = {
  getMovies: async () => {
    const allMovies = await Movie.find();
    return allMovies;
  },
  postMovie: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
  },
};
