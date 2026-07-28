import { Router } from "express";
import * as RoleController from "../controllers/roleController";
import { validateCreateRole } from "../validation/employeeValidation";
import { requireAuth } from "../middleware/clerkAuth";
 
const router = Router();
 
router.get("/", RoleController.getRoles);
router.post("/", requireAuth, validateCreateRole, RoleController.createRole);
 
export default router;