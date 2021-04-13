import { Resolver, Mutation, Arg } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import { CreateRecipeInput } from "./types/input/CreateRecipeInput";

@Resolver()
export class CreateRecipeResolver {
  @Mutation(() => Recipe)
  async createRecipe(
    @Arg("input", () => CreateRecipeInput) input: CreateRecipeInput
  ) {
    const newRecipe = Recipe.create(input);
    return await newRecipe.save();
  }
}
