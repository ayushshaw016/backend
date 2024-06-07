const { userschema } = require("../Models/USER_Models");
const urlschema = require("../Models/URL_Models");

// IMPORTING THE UUID
const { v4: uuidv4 } = require("uuid");

const { setuser } = require("../Service/Authentication");
async function handlesignup(req, res) {
  const data = req.body;
  if (!data) {
    return res.render("signup");
  }
  const reqname = data.name;
  const reqemail = data.email;
  const reqpassword = data.password;
  const result = await userschema.create({
    name: reqname,
    email: reqemail,
    password: reqpassword,
  });
  console.log(result);
  return res.render("login");
}

async function handlelogin(req, res) {
  const data = req.body;
  if (!data) {
    return res.json({ msg: "No data" });
  }
  const reqemail = data.email;

  const result = await userschema.findOne({ email: reqemail });
  if (!result) {
    return res.json({ msg: "No account founded" });
  }
  const reqpassword = data.password;
  if (reqpassword === result.password) {
    const allurls = await urlschema.find({});
    const token = setuser(result);
    // res.cookie("uid", token);
    // return res.render("home", { url: allurls });
    return res.json({ token });
  }
  return res.json({ msg: "Erro" });
}

module.exports = {
  handlesignup,
  handlelogin,
};
