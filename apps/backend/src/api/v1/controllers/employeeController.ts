import { Request, Response } from "express";
import * as EmployeeService from "../services/employeeService";
 
export async function getDepartments(req: Request, res: Response): Promise<void> {
    try {
        const departments = await EmployeeService.getDepartments();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: "Failed to get departments." });
    }
}
 
export async function createEmployee(req: Request, res: Response): Promise<void> {
    try {
        const { firstName, lastName, deptName } = req.body;
        const updated = await EmployeeService.createEmployee(firstName, lastName, deptName);
        res.status(201).json(updated);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Failed to create employee." });
        }
    }
}
