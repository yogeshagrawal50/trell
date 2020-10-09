const express = require('express')
var router = express.Router()

const { isSignedIn } = require('../controller/auth')
const { getmovie, addmovie} = require ('../controller/movie')
 
router.post("/addmovie", isSignedIn, addmovie)

module.exports=router