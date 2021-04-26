import { Router } from "express";
import * as controller from "../controller/user/user";
import * as auth from '../middlewares/auth'
const router = Router();

router.post("/login", controller.Login);
router.post("/signUp", controller.SignUp);
router.get('/refresh', auth.refreshMiddleware, controller.refresh)
export default router;
