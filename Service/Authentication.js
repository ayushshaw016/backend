const webtoken = require("jsonwebtoken");
const secret = "ayush@123";
function setuser(user) {
  return webtoken.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getuser(token) {
  if (!token) {
    return null;
  }
  return webtoken.verify(token, secret);
}

// const sessionIdToUserMap = new Map();
// function setuser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }

// function getuser(id) {
//   return sessionIdToUserMap.get(id);
// }
module.exports = { setuser, getuser };
