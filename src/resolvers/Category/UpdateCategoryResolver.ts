import { Arg, Mutation, Resolver } from "type-graphql";
import { Category } from "../../entity/Category";
import { UpdateCategoryInput } from "./types/input/UpdateCategoryInput";
import { UpdateCategoryResponse } from "./types/response/UpdateCategoryResponse";

@Resolver()
export class UpdateCategoryResolver {
  @Mutation(() => UpdateCategoryResponse)
  async updateCategory(
    @Arg("input", () => UpdateCategoryInput) input: UpdateCategoryInput
  ) {
    const { id } = input;
    const categoryUpdated = await Category.update(id, input);

    return {
      updated: !!categoryUpdated.affected,
    };
  }
}
