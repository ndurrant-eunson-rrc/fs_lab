import { Router } from "express";
import * as EmployeeController from "../controllers/employeeController";
import { validateCreateEmployee } from "../validation/employeeValidation";
import { requireAuth } from "../middleware/clerkAuth";
 
const router = Router();
 
router.get("/", EmployeeController.getDepartments);
router.post("/", requireAuth, validateCreateEmployee, EmployeeController.createEmployee);
 
export default router;