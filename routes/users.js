const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");
const servicesController = require("../controllers/servicesController"); 

/* GET users listing. */
router.route("/").get(UsersController.sayHello);
router.route("/createService").post(servicesController.createService)

module.exports = router;