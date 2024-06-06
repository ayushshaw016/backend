const express = require("express");
const staticRouter = express.Router();
const urlschema = require("../Models/URL_Models");

staticRouter.get("/", async (req, res) => {
  const isuser = req.user;
  if (!isuser) {
    return res.render("login");
  }
  const allurls = await urlschema.find({ createdby: req.user._id });
  res.render("home", {
    url: allurls,
  });
});
staticRouter.get("/signup", (req, res) => {
  return res.render("signup");
});
staticRouter.get("/login", (req, res) => {
  return res.render("login");
});
module.exports = { staticRouter };
