import { Arg, Mutation, Resolver } from "type-graphql";
import { Category } from "../../entity/Category";
import { DeleteCategoryInput } from "./types/input/DeleteCategoryInput";
import { DeleteCategoryResponse } from "./types/response/DeleteCategoryResponse";

@Resolver()
export class DeleteCategoryResolver {
  @Mutation(() => DeleteCategoryResponse)
  async deleteCategory(
    @Arg("input", () => DeleteCategoryInput) input: DeleteCategoryInput
  ) {
    const { id } = input;

    const categoryDeleted = await Category.delete(id);
    console.log(categoryDeleted);
    return {
      deleted: !!categoryDeleted.affected,
    };
  }
}
