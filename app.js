const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const morgan = require('morgan');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')


app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.set('view engine', 'ejs');

const authRoutes = require("./routes/auth")
const movieRoutes = require("./routes/movie")
const showRoutes = require("./routes/show")
const orderRoutes = require("./routes/order")


mongoose.connect(process.env.database, {
  useUnifiedTopology: true ,
  useNewUrlParser: true,
})
  .then(() => {
  console.log("DB connected")
  }).catch((err) => {
  console.log(err)
  })

app.get('/', function(req, res) {
  res.render('pages/index');
});
app.use("", authRoutes)
app.use("", movieRoutes)
app.use("", showRoutes)
app.use("", orderRoutes)

const port = 5000
app.listen(port, () => {
console.log("Server is up")
})