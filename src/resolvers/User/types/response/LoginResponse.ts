import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoginResponse {
  @Field()
  authenticated: boolean;

  @Field()
  accessToken: string;
}
