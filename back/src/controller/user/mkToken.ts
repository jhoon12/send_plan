import * as dotenv from "dotenv";
import { Request } from "express";
dotenv.config();
const jwt = require("jsonwebtoken");

const YOUR_SECRET_KEY = process.env.SECRET_KEY || "sss";
interface UserInterface {
  email: string;
  password: string;
}
export const mkAccess = async (req: Request, user: UserInterface) => {
  const email = user?.email;
  const token = await jwt.sign(
    {
      email,
    },
    YOUR_SECRET_KEY,
    {
      expiresIn: "10m",
    }
  );
  return token;
};

export const mkRefresh = async (req: Request, user: UserInterface) => {
  const email = user?.email;
  const token = await jwt.sign(
    {
      email,
    },
    YOUR_SECRET_KEY,
    {
      expiresIn: "1w",
    }
  );
  return token;
};
