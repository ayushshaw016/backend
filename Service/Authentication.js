const sessionIdToUserMap = new Map();

function setuser(id, user) {
  sessionIdToUserMap.set(id, user);
}

function getuser(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = { setuser, getuser };
