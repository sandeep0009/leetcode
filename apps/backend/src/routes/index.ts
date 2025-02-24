import { Router } from "express";
import userRouter from "../api/user/userRoute";
import codeRouter from "../api/code/codeRoute";

const router:Router = Router();

router.use(userRouter);
router.use(codeRouter);
export default router;