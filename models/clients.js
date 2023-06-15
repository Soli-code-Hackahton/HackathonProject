const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const ClientsSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "User must have a name"],
  },
  city: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: [true, "User must have an email!"],
    unique: [true, "Email already in use"],
    lowercase: true,
  },
  address: {
    type: String
  },
  rating: {
    type: Number,
    min: [1, "You must enter the rating between 1 and 5"],
    max: [5, "You must enter the rating between 1 and 5"],
  },
  cin: {
    type: String,
    required: [true, "You have to insert a client's CIN"]
  },
  birthday: {
    type: Date
  },
  agencyId: {
    type: Schema.Types.ObjectId,
    ref: "agencies"
  }
});


module.exports = mongoose.model("clients", ClientsSchema);


  // ! contracts:
  // ! paymentMethod:  
  // ! notifications: 