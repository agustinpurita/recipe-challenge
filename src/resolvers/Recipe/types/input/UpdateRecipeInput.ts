import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateRecipeInput {
  @Field()
  id!: number;

  @Field(() => String, { nullable: true })
  @Length(1, 100)
  name?: string;

  @Field(() => String, { nullable: true })
  @Length(1, 100)
  description?: string;

  @Field(() => [String], { nullable: true })
  ingredients?: string[];

  @Field(() => String, { nullable: true })
  categoryId?: number;
}
