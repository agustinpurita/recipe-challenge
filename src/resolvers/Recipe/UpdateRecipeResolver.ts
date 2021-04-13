import { Arg, Mutation, Resolver } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import { UpdateRecipeInput } from "./types/input/UpdateRecipeInput";
import { UpdateRecipeResponse } from "./types/response/UpdateRecipeResponse";

@Resolver()
export class UpdateRecipeResolver {
  @Mutation(() => UpdateRecipeResponse)
  async updateRecipe(
    @Arg("input", () => UpdateRecipeInput) input: UpdateRecipeInput
  ) {
    const { id } = input;
    const recipeUpdated = await Recipe.update(id, input);

    return {
      updated: !!recipeUpdated.affected,
    };
  }
}
