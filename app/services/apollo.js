import ApolloClient, { InMemoryCache, HttpLink } from "apollo-boost";
import { onError } from "apollo-link-error";

import { typeDefs, resolvers } from "./resolvers";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://172.18.10.134:4000/graphql",
  cache: cache,
  typeDefs,
  resolvers
});

export default client;
