import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { Context } from "../types/Context";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  const token = context.req.headers["authorization"];

  if (!token) {
    throw new Error("Token must be sent");
  }

  try {
    console.log(token);
    const payload = verify(token, "secretKey");
    console.log(payload);
  } catch (err) {
    console.log(err);
    throw new Error("Not authenticated");
  }
  return next();
};
