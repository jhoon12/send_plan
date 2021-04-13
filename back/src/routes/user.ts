import { Router } from "express";
import { User } from "../models/user";
import auth from '../controller/user';
const router = Router();

router.post('/signUp', (req, res, next)=>{

})

router.post("/create", (req, res, next) => {
  User.create({
    email: "testEmsdaasail",
    password: "testPW",
  });
  res.send("완료");
});

export default router;
