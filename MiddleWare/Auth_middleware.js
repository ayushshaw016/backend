const { getuser } = require("../Service/Authentication");

async function restrictToLoginUserOnly(req, res, next) {
  //   console.log(req);
  // const isuserId = req.cookies?.uid;
  const isuserId = req.headers["Authorization"];
  // now removing the bearer word
  // split krne k bad jo hai na wo ek array banjayega aur array ke 1 index pe token hoga
  const token = isuserId.split("Bearer ")[1];
  const isuser = getuser(token);
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
