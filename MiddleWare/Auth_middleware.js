const { getuser } = require("../Service/Authentication");

async function restrictToLoginUserOnly(req, res, next) {
  //   console.log(req);
  const isuserId = req.cookies?.uid;
  //   console.log(isuserId);
  const isuser = getuser(isuserId);
  if (!isuser) {
    return res.redirect("/login");
  }
  req.user = isuser;
  next();
}

async function checkAuth(req, res, next) {
  //   console.log(req);
  const isuserId = req.cookies?.uid;
  //   console.log(isuserId);
  const isuser = getuser(isuserId);
  req.user = isuser;
  next();
}
module.exports = { restrictToLoginUserOnly, checkAuth };
