const express = require("express");
const signUpController = require("../controller/SignUp");

const router = express.Router();

router.post("/register", signUpController.createUser);

module.exports = router;