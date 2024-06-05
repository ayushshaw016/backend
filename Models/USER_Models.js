const mongoose = require("mongoose");

const USER_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userschema = mongoose.model("user", USER_schema);

module.exports = {
  userschema,
};
