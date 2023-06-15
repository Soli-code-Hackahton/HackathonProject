const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const NewsletterSchema = new Schema({
  administratorId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  content: {
    type: String
  }
});



module.exports = mongoose.model("newsletters", NewsletterSchema);