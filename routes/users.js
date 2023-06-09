import { Router } from "express";
const router = Router();
import { login, register, current } from "../controllers/users.js";
import { auth } from "../middleware/auth.js";

/* /api/user/login */
router.post("/login", login);

/* /api/user/register */
router.post("/register", register);

/* /api/user/current */
router.get("/current", auth, current);

export default router;
