import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DeleteRecipeResponse {
  @Field()
  deleted: boolean;
}
