import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { SignUpResolver, LoginResolver } from "./resolvers/User";
import {
  CreateCategoryResolver,
  DeleteCategoryResolver,
  UpdateCategoryResolver,
  GetCategoryResolver,
} from "./resolvers/Category";
import {
  CreateRecipeResolver,
  DeleteRecipeResolver,
  GetRecipeResolver,
  UpdateRecipeResolver,
} from "./resolvers/Recipe";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [
      SignUpResolver,
      LoginResolver,
      CreateCategoryResolver,
      GetCategoryResolver,
      UpdateCategoryResolver,
      DeleteCategoryResolver,
      CreateRecipeResolver,
      GetRecipeResolver,
      UpdateRecipeResolver,
      DeleteRecipeResolver,
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
