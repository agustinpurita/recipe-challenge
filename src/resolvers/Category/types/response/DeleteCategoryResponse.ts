import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DeleteCategoryResponse {
  @Field()
  deleted: boolean;
}
