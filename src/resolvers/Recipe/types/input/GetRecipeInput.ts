import { Length } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class GetRecipeInput {
  @Field()
  id!: number;
}

@InputType()
export class GetRecipesInput {
  @Field(() => String, { nullable: true })
  @Length(1, 100)
  name?: string;

  @Field(() => String, { nullable: true })
  @Length(1, 500)
  description?: string;

  @Field(() => [String], { nullable: true })
  ingredients?: string[];

  @Field(() => Int, { nullable: true })
  categoryId?: number;
}
