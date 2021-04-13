import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UpdateRecipeResponse {
  @Field()
  updated: boolean;
}
