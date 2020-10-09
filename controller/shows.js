const Show = require("../models/show")

exports.addshow = (req, res) => {
  const show = new Show(req.body)
  show.save((err, show) => {
    if (err) {
      return res.status(400).json({
        err
      })
    }
    res.json(show)
  })
}

exports.getShow = (req, res, next, id) => {
  Show.findById(id)
    .populate("movie")
    .exec((err, show) => {
      if (err) {
        return res.status(400).json({
          error:"show not found"
        })
      }
      req.show = show;
      next()
    })
}
