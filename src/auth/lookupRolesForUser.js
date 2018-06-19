// get roles for user...to be changed later
function lookupRolesForUser(user){
  var roles = []
  if (user){
    roles = user.roles
  }
  return roles
}

module.exports = lookupRolesForUser;
