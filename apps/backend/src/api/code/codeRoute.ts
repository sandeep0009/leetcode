import { Router } from "express";
import { allCodes, codeById, codeSubmit, checkCode } from "./codeController";

const router:Router = Router();

router.get("/", allCodes);
router.get("/:id", codeById);
router.post("/submit", codeSubmit);
router.get("/check-problem/:id", checkCode);

export default router;