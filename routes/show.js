const express = require('express')
var router = express.Router()

const { isSignedIn } = require('../controller/auth')
const { getshow, addshow} = require ('../controller/shows')

router.param("/getshow", getshow)
router.post("/addshow", isSignedIn, addshow)


module.exports=router