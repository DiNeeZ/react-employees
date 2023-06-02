import { Router } from "express";
import { add, edit, getAll, getOne, remove } from "../controllers/employees.js";
const router = new Router();
import { auth } from "../middleware/auth.js";

/* /api/employees */
router.get("/", auth, getAll);

/* /api/employees/:id */
router.get("/:id", auth, getOne);

/* /api/employees/add */
router.post("/add", auth, add);

/* /api/employees/remove/:id */
router.delete("/remove/:id", auth, remove);

/* /api/employees/edit/:id */
router.put("/edit/:id", auth, edit);

export default router;
