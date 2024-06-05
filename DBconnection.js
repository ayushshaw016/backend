const mongoose = require("mongoose");

const DBconnection = mongoose
  .connect("mongodb://127.0.0.1:27017/backend5")
  .then(() => {
    console.log("Database Connected Successfully");
  });

module.exports = {
  DBconnection,
};
