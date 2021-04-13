import { Resolver, Mutation, Arg } from "type-graphql";
import { Category } from "../../entity/Category";
import { CreateCategoryInput } from "./types/input/CreateCategoryInput";

@Resolver()
export class CreateCategoryResolver {
  @Mutation(() => Category)
  async createCategory(
    @Arg("input", () => CreateCategoryInput) input: CreateCategoryInput
  ) {
    const newCategory = Category.create(input);
    return await newCategory.save();
  }
}
