const express = require("express");
const { handlelogin, handlesignup } = require("../Controllers/USER_controller");

const userrouter = express.Router();

userrouter.post("/signup", handlesignup);
userrouter.post("/login", handlelogin);

module.exports = { userrouter };
