import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteRecipeInput {
  @Field()
  id!: number;
}
