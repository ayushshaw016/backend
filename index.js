const express = require("express");
const { urlrouter } = require("./Routes/URL_Router");
const { DBconnection } = require("./DBconnection");
const app = express();
const port = 8000;
app.listen(port, () => console.log("Server is running on port", port));
// CONNECTING THE DATABASE
DBconnection;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlrouter);
