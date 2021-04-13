import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UpdateCategoryResponse {
  @Field()
  updated: boolean;
}
