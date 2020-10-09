const mongoose = require("mongoose")

var movieSchema = new mongoose.Schema({
  movie: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }, 
  description: {
    type: String,
    required: true
  }
  
},
  {timestamps:true}
)

module.exports = mongoose.model("Movie", movieSchema)