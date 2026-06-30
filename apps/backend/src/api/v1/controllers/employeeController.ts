import { Request, Response } from "express";
import * as EmployeeService from "../services/employeeService";

export function getDepartments(req: Request, res: Response): void {
  try {
    const departments = EmployeeService.getDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: "Failed to get departments." });
  }
}
 
export function createEmployee(req: Request, res: Response): void {
  try {
    const { firstName, lastName, deptName } = req.body;
 
    if (!firstName || !deptName) {
      res.status(400).json({ message: "firstName and deptName are required." });
      return;
    }
 
    const updated = EmployeeService.createEmployee(firstName, lastName, deptName);
    res.status(201).json(updated);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Failed to create employee." });
    }
  }
}
 