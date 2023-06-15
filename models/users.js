const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;


const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "User must have an email!"],
    unique: [true, "Email already in use"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valide email!"],
  },
  password: {
    type: String,
    // required: [true, "User must have a password"],
    minlength: 8,
    select: false, // this step is important
  },
  passwordConfirm: {
    type: String,
    // required: [true, "Please confirm your password!"],
    validate: {
      // The only works on SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords Are Not The Same!",
    },
  },
  agencyId: {
    type: Schema.Types.ObjectId,
    ref: "agencies",
  },
});

module.exports = mongoose.model("users", UsersSchema);
