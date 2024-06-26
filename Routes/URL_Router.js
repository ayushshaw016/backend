const express = require("express");

const urlrouter = express.Router();
const {
  createshortid,
  getthevisithistory,
} = require("../Controllers/URL_controller");

// URL TO CREATE THE SHORTID
urlrouter.post("/", createshortid);

urlrouter.get("/analytics/:shortid", getthevisithistory);
module.exports = {
  urlrouter,
};
