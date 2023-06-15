const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users"); //UsersController is the class (controller)

/* GET users listing. */
router.route("/").get(UsersController.sayHello);

module.exports = router;