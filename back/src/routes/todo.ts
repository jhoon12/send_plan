import { Router } from "express";
import * as auth from "../middlewares/auth";
import * as todo from "../controller/todo";
const router = Router();

router.post("/addToDo", auth.verifyToken, todo.addToDo);

export default router;
