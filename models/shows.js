const mongoose = require("mongoose")

var showSchema = new mongoose.Schema({
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movie'
  }, 
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  },
  totalTickets: {
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  }
},
  {timestamps:true}
)

module.exports = mongoose.model("Show", showSchema)