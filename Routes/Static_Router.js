const express = require("express");
const staticRouter = express.Router();
const urlschema = require("../Models/URL_Models");

staticRouter.get("/", async (req, res) => {
  const allurls = await urlschema.find({});
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
