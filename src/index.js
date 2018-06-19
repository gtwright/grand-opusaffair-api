import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { v1 as neo4j } from "neo4j-driver";
import dotenv from "dotenv";

import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
import context from './schema/context';
import directiveResolvers from './schema/directiveResolvers';

//To add: auth, cors?

dotenv.config();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers
});

const server = new ApolloServer({
  context,
  schema
});

server.listen().then(({ url }) => {
  console.log(`GraphQL API read at ${url}`);
});
