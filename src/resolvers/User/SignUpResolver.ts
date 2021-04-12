import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";

import { User } from "../../entity/User";
import { SignUpInput } from "./types/SignUpInput";

@Resolver()
export class SignUpResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async signUp(
    @Arg("input")
    {firstName, lastName, email, password }: SignUpInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    return user;
  }
}
