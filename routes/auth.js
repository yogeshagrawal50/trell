const express = require('express')
var router = express.Router()
const {check} = require('express-validator')

const { signIn, signUp, isSignedIn, signOut } = require('../controller/auth')

router.post("/signin",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({min:6})
  ], 
  signIn
)


router.post("/signup",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({min:6})
  ], 
  signUp
)

router.get("/signOut", signOut)


module.exports=router