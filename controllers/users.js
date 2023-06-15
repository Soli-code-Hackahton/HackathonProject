const users = require("../models/users");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { findById } = require("../models/users");
const bcrypt = require("bcryptjs");
const validator = require("validator");

exports.sayHello = (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Say Hello"
    })
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
