import { Resolver, Mutation, Arg, Query, UseMiddleware, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../../entity/User";
import { LoginInput } from "./types/input/LoginInput";
import { LoginResponse } from "./types/response/LoginResponse";
import { isAuth } from "../../middlewares/isAuth";
import { Context } from "../../types/Context";

@Resolver()
export class LoginResolver {
  @Query(() => String)
  @UseMiddleware(isAuth)
  async Me(@Ctx() ctx: Context) {
    return `Your user token is : ${ctx.req.headers.authorization}`;
  }
  @Mutation(() => LoginResponse)
  async login(
    @Arg("input")
    { email, password }: LoginInput
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Could not find user");
    }

    const verify = await bcrypt.compare(password, user.password);

    if (!verify) {
      throw new Error("Bad password");
    }

    const accessToken = jwt.sign({ userId: user.id }, "secretKey", {
      expiresIn: "1d",
    });

    return {
      accessToken,
      authenticated: true,
    };
  }
}
