require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const PORT = process.env.PORT || 3000;
require("./db");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(function ({ url }) {
  console.log(`App listening on ${url}`);
});
