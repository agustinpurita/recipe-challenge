import { Arg, Mutation, Resolver } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import { DeleteRecipeInput } from "./types/input/DeleteRecipeInput";
import { DeleteRecipeResponse } from "./types/response/DeleteRecipeResponse";

@Resolver()
export class DeleteRecipeResolver {
  @Mutation(() => DeleteRecipeResponse)
  async deleteRecipe(
    @Arg("input", () => DeleteRecipeInput) input: DeleteRecipeInput
  ) {
    const { id } = input;

    const categoryDeleted = await Recipe.delete(id);
    console.log(categoryDeleted);
    return {
      deleted: !!categoryDeleted.affected,
    };
  }
}
