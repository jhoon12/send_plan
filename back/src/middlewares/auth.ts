import jwt from "jsonwebtoken";
import { Response, Request } from "express";

const YOUR_SECRET_KEY = process.env.SECRET_KEY || "sss";

export const verifyToken = async (req: Request, res: Response, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    res.status(403).json({ message: "token required" });
  }
  try {
    await jwt.verify(token.toString(), YOUR_SECRET_KEY, (err, decoded) => {
      if (err) throw new Error(err.message);
      req["decoded"] = decoded;
      next();
    });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};

export const refreshMiddleware = async (req: Request, res: Response, next) => {
  console.log("리플");
  const token = req.headers["refresh-token"];
  if (!token) {
    res.status(403).json({ message: "token required" });
  }
  try {
    await jwt.verify(token.toString(), YOUR_SECRET_KEY, (err, decoded) => {
      if (err) throw new Error(err.message);
      req["decoded"] = decoded;
      next();
    });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};
