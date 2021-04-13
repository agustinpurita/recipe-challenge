import { Resolver, Arg, UseMiddleware, Ctx, Query } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import { User } from "../../entity/User";
import { isAuth } from "../../middlewares/isAuth";
import { Context } from "../../types/Context";
import { GetRecipeInput, GetRecipesInput } from "./types/input/GetRecipeInput";

@Resolver()
export class GetRecipeResolver {
  @Query(() => Recipe)
  @UseMiddleware(isAuth)
  async getRecipe(
    @Arg("input", () => GetRecipeInput)
    input: GetRecipeInput
  ) {
    {
      const { id } = input;
      return await Recipe.findOne({
        where: {
          id,
        },
      });
    }
  }

  @Query(() => [Recipe])
  @UseMiddleware(isAuth)
  async getRecipes(
    @Arg("input", () => GetRecipesInput, { nullable: true })
    input: GetRecipesInput
  ) {
    const where = input || {};
    if (where.ingredients?.length) {
      const ingredientsArray = where.ingredients;
      // Convert array to a comma separated string because postgres stores this way
      where.ingredients = ingredientsArray.join() as any;
    }
    console.log(where);
    const recipes = await Recipe.find({
      where,
    });
    console.log(recipes);
    return recipes;
  }

  @Query(() => [Recipe])
  @UseMiddleware(isAuth)
  async getMyRecipes(@Ctx() ctx: Context) {
    const { userId } = ctx;
    const user = await User.findOne({
      relations: ["recipes"],
      where: {
        id: userId,
      },
    });
    const userRecipes = user?.recipes;
    return userRecipes;
  }
}
