const User = require('../models/user')
const {checker, validationResult } = require('express-validator')
var jwt = require('jsonwebtoken')
var expJwt = require('express-jwt')

exports.signUp = async (req, res) => {
  try {
      var user = new User(req.body);
      var result = await user.save();
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
}


exports.signIn = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error:errors.array()[0].msg
    })
  }
  try {
    var user = await User.findOne({ email: req.body.user }).exec();
    if(!user) {
        return res.status(400).send({ message: "The username does not exist" });
    }
    user.comparePassword(request.body.password, (error, match) => {
        if(!match) {
            return response.status(400).send({ message: "The password is invalid" });
        }
    });
    response.send({ message: "The username and password combination is correct!" });
} catch (error) {
    response.status(500).send(error);
}
    const token = jwt.sign({ _id: user._id }, process.env.secret)
    return res.json({token, user:{_id, email}})
  }

exports.signOut = (req, res) => {
  res.clearCookie("token")
}

exports.isSignedIn = expJwt({
  secret: process.env.secret,
  algorithms: ['sha1'],
  userProperty: 'auth'
})
