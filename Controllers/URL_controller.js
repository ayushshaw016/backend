const urlschema = require("../Models/URL_Models");
const shortid = require("shortid");
async function createshortid(req, res) {
  const inputurl = req.body.url;
  if (!inputurl) {
    return res.status(200).json({ msg: "Error URL is missing" });
  }
  const SHORTID = shortid();
  const data = await urlschema.create({
    RedirectURL: inputurl,
    shortID: SHORTID,
    visithistory: [],
  });
  const allurls = await urlschema.find({});
  res.render("home", {
    id: SHORTID,
    url: allurls,
  });
  //   return res.status(200).json({ shortid: SHORTID });
}
async function redirectURL(req, res) {
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
  if (!data) {
    return res.status(400).json({ msg: "Error No url finded" });
  }
  return res.redirect(data.RedirectURL);
}

async function getthevisithistory(req, res) {
  const SHORTID = req.params.shortid;
  const data = await urlschema.findOne({
    shortID: SHORTID,
  });
  if (!data) {
    return res.status(200).json({ msg: "Incorrect ID" });
  }
  return res
    .status(200)
    .json({ Clicks: data.visithistory.length, Analytics: data.visithistory });
}
module.exports = {
  createshortid,
  redirectURL,
  getthevisithistory,
};
