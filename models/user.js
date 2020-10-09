const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }, 
  password: {
    type: String,
    required: true
  },
  salt: String
},

  {timestamps:true}
)
userSchema.pre("save", function(next) {
  if(!this.isModified("password")) {
      return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model("User", userSchema)