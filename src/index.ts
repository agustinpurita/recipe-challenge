import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { SignUpResolver } from "./resolvers/User/SignUpResolver";
import { LoginResolver } from "./resolvers/User/LoginResolver";
import { CreateCategoryResolver } from "./resolvers/Category/CreateCategoryResolver";
import { GetCategoryResolver } from "./resolvers/Category/GetCategoryResolver";
import { UpdateCategoryResolver } from "./resolvers/Category/UpdateCategoryResolver";
import { DeleteCategoryResolver } from "./resolvers/Category/DeleteCategoryResolver";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [
      LoginResolver,
      SignUpResolver,
      CreateCategoryResolver,
      GetCategoryResolver,
      UpdateCategoryResolver,
      DeleteCategoryResolver,
    ],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");
  });
};

main();
