require('dotenv').config();
const neo4j = require('neo4j-driver').v1;
const lookupRolesForUser = require('../auth/lookupRolesForUser');

// update context
const context = ({ req }) => {
  //add driver to context
  let driver;
  if (!driver){
    driver = neo4j.driver(
      process.env.NEO4J_URI || "bolt://localhost:7687",
      neo4j.auth.basic(process.env.NEO4J_USERNAME || "neo4j",
      process.env.NEO4J_PASSWORD || "password"))
  }
  //add user object to context
  const user = req.user
  const roles = lookupRolesForUser(user);

  return { user, roles, driver }
};

module.exports = context;
