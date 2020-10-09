const Movie = require("../models/movie")

exports.getMovie = (req, res, next, id) => {
  Movie.findById(id)
    .populate("shows")
    .exec((err, movie) => {
      if (err) {
        return res.status(400).json({
          error:"Movie not found"
        })
      }
      req.movie = movie;
      next()
    })
}

exports.addMovie = (req, res) => {
  const movie = new Movie(req.body)
  movie.save((err, movie) => {
    if (err) {
      return res.status(400).json({
        err
      })
    }
    res.json(movie)
  })
}


