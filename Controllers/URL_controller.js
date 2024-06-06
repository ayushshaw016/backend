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
    createdby: req.user._id,
  });
  const allurls = await urlschema.find({});

  return res.redirect("home", {
    id: SHORTID,
    url: allurls,
  });
  //   return res.status(200).json({ shortid: SHORTID });
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
  getthevisithistory,
};
