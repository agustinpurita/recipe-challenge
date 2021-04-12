import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { SignUpResolver } from "./resolvers/User/SignUpResolver";
import { LoginResolver } from "./resolvers/User/LoginResolver";

export const startServer = async () => {
  const app = express();

  const schema = await buildSchema({
    resolvers: [LoginResolver, SignUpResolver],
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
};
