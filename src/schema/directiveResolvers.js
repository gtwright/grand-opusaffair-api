const { ForbiddenError, AuthenticationError } = require('apollo-server');

const directiveResolvers = {
  isAuthenticated: (next, source, args, ctx) => {
    const user = ctx.user
    if (user) return next()
    throw AuthenticationError("You must be logged in to see this");
  },
  hasRole: (next, source, { role }, ctx) => {
    const user = ctx.user
    if (user){
      const roles = ctx.roles
      if (roles.includes(role)) return next()
      throw ForbiddenError(`Must have ${role} permissions to view this field`)
    }
    throw AuthenticationError(`Must be logged in as ${role} to view this field`)
  }
}

module.exports = directiveResolvers;
