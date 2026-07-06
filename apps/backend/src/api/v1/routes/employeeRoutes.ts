import { Router } from "express";
import * as EmployeeController from "../controllers/employeeController";
 
const router = Router();
 
router.get("/", EmployeeController.getDepartments);
router.post("/", EmployeeController.createEmployee);
 
export default router;
