import { Router } from "express";
import * as auth from "../middlewares/auth";
import multer from "multer";
import * as todo from "../controller/todo";
const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/addToDo", auth.verifyToken, todo.addToDo);
router.get("/readToDo", auth.verifyToken, todo.readToDo);
router.post(
  "/addImage",
  auth.verifyToken,
  upload.single("image"),
  todo.addImage
);

export default router;
