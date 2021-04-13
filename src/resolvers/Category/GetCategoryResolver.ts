import { Resolver, Mutation, Arg, UseMiddleware } from "type-graphql";
import { Category } from "../../entity/Category";
import { isAuth } from "../../middlewares/isAuth";
import {
  GetCategoriesInput,
  GetCategoryInput,
} from "./types/input/GetCategoryInput";

@Resolver()
export class GetCategoryResolver {
  @Mutation(() => [Category])
  @UseMiddleware(isAuth)
  async getCategories(
    @Arg("input", () => GetCategoriesInput, { nullable: true })
    input: GetCategoriesInput
  ) {
    const where = input || {};
    console.log("where", where);
    return await Category.find({
      where,
    });
  }

  @Mutation(() => Category)
  @UseMiddleware(isAuth)
  async getCategory(
    @Arg("input", () => GetCategoryInput, { nullable: false })
    input: GetCategoryInput
  ) {
    const { id } = input;
    return await Category.findOne({
      where: {
        id,
      },
    });
  }
}
