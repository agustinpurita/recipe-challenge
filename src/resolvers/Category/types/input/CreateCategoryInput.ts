import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCategoryInput {
  @Field()
  @Length(1, 100)
  name!: string;
}
