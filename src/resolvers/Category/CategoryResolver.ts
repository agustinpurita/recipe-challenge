import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  Query,
  InputType,
  Field,
} from "type-graphql";
import { Category } from "../../entity/Category";

@InputType()
class CreateCategoryInput {
  @Field()
  name!: string;
}

@InputType()
class UpdateCategoryInput {
  @Field()
  id!: number;

  @Field()
  name!: string;
}

@InputType()
class DeleteCategoryInput {
  @Field()
  id!: number;
}

@Resolver()
export class CategoryResolver { 
  @Mutation(() => Category)
  async createCategory(
    @Arg("input", () => CreateCategoryInput) input: CreateCategoryInput
  ) {
    const newCategory = Category.create(input);
    return await newCategory.save();
  }

  @Mutation(() => Boolean)
  async deleteProduct(
    @Arg("input", () => DeleteCategoryInput) input: DeleteCategoryInput
  ) {
    await Category.delete(input.id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("input", () => UpdateCategoryInput) input: UpdateCategoryInput
  ) {
    await Category.update(input.id, input);
    return true;
  }

  @Query(() => [Category])
  categories() {
    return Category.find();
  }
}
