const express = require("express");
const { DBconnection } = require("./DBconnection");
const path = require("path");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const { urlrouter } = require("./Routes/URL_Router");
const { staticRouter } = require("./Routes/Static_Router");
const { userrouter } = require("./Routes/USER_Router");
const {
  restrictToLoginUserOnly,
  checkAuth,
} = require("./MiddleWare/Auth_middleware");
const { redirectURL } = require("./Controllers/URL_controller");
const urlschema = require("./Models/URL_Models");
app.listen(port, () => console.log("Server is running on port", port));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// CONNECTING THE DATABASE
DBconnection;

// Setting my view engine as the ejs
app.set("view engine", "ejs");
// All my views are in the ./views
app.set("views", path.resolve("./views"));
app.use("/url", restrictToLoginUserOnly, urlrouter);
app.use("/", checkAuth, staticRouter);
app.use("/user", userrouter);

//isko alag se isliye banaya hai kyunki iska login logout se koi mtlb nhi h
app.get("/urls/:shortid", async (req, res) => {
  const inputshortid = req.params.shortid;
  const data = await urlschema.findOneAndUpdate(
    { shortID: inputshortid },
    {
      $push: {
        visithistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (data) {
    return res.redirect(data.RedirectURL);
  }
  return res.status(400).json({ msg: "Error No url finded" });
});
