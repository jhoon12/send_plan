import { Router } from "express";
import { User } from "../models/user";

const router = Router();

router.post("/create", (req, res, next) => {
  User.create({
    email: "testEmail",
    password: "testPW",
  });
  res.send("완료");
});

export default router;
