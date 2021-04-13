import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class GetCategoryInput {
  @Field()
  id!: number;
}

@InputType()
export class GetCategoriesInput {
  @Field()
  @Length(1, 100)
  name?: string;
}