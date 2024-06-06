const mongoose = require("mongoose");
const { type } = require("os");

const URL_schema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    RedirectURL: {
      type: String,
      required: true,
    },
    // visit history is going to be the collection of objects
    visithistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const urlschema = mongoose.model("url", URL_schema);
module.exports = urlschema;
