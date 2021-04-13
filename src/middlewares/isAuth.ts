import { MiddlewareFn } from "type-graphql";
import jwt_decode from "jwt-decode";
import { verify } from "jsonwebtoken";
import { Context } from "../types/Context";
import { Token } from "../types/Token";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  const token = context.req.headers["authorization"];

  if (!token) {
    throw new Error("Token must be sent");
  }

  try {
    console.log(token);
    const payload = verify(token, "secretKey");
    console.info("Token payload", payload);
    const decoded = jwt_decode<Token>(token);
    console.info("token decoded", decoded);
    const { userId } = decoded;
    context.userId = userId;
  } catch (err) {
    console.log(err);
    throw new Error("Not authenticated");
  }
  return next();
};
