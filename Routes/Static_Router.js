const express = require("express");
const staticRouter = express.Router();
const urlschema = require("../Models/URL_Models");

staticRouter.get("/", async (req, res) => {
  const allurls = await urlschema.find({});
  res.render("home", {
    url: allurls,
  });
});

module.exports = { staticRouter };
