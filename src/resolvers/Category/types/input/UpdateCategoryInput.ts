import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCategoryInput {
  @Field()
  id!: number;

  @Field()
  @Length(1, 100)
  name!: string;
}
