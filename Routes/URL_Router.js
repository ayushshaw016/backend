const express = require("express");

const urlrouter = express.Router();
const {
  createshortid,
  redirectURL,
  getthevisithistory,
} = require("../Controllers/URL_controller");

// URL TO CREATE THE SHORTID
urlrouter.post("/", createshortid);

urlrouter.get("/:shortid", redirectURL);
urlrouter.get("/analytics/:shortid", getthevisithistory);
module.exports = {
  urlrouter,
};
