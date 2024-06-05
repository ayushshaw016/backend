const express = require("express");
const { urlrouter } = require("./Routes/URL_Router");
const { DBconnection } = require("./DBconnection");
const path = require("path");
const app = express();
const port = 8000;
const { staticRouter } = require("./Routes/Static_Router");
app.listen(port, () => console.log("Server is running on port", port));
app.use(express.urlencoded({ extended: false }));
// CONNECTING THE DATABASE
DBconnection;

// Setting my view engine as the ejs
app.set("view engine", "ejs");
// All my views are in the ./views
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use("/url", urlrouter);
app.use("/", staticRouter);
