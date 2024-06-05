const { userschema } = require("../Models/USER_Models");

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
    return res.render("home");
  }
  //   return res.render("login");
}

module.exports = {
  handlesignup,
  handlelogin,
};
