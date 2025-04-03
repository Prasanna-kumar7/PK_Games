const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  }
});

const Signup = mongoose.model("user", SignupSchema);
// here user is singular form of collection name
module.exports = Signup;