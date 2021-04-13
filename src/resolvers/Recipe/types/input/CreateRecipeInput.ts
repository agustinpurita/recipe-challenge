import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateRecipeInput {
  @Field()
  @Length(1, 100)
  name: string;

  @Field()
  @Length(1, 500)
  description: string;

  @Field(() => [String])
  ingredients: string[];

  @Field()
  userId: number;

  @Field()
  categoryId: number;
}
