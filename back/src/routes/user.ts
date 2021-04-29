import { Router } from "express";
import * as userController from "../controller/user/user";
import * as emailController from "../controller/email";
import * as auth from "../middlewares/auth";
const router = Router();

router.post("/login", userController.Login);
router.post("/signUp", userController.SignUp);
router.get("/refresh", auth.refreshMiddleware, userController.refresh);
router.post("/email", emailController.sendEmail);
router.post("/emailCode", emailController.CertifyEmail)
export default router;
