import { Request, Response, NextFunction } from "express";
 
export function validateCreateEmployee(req: Request, res: Response, next: NextFunction): void {
    const { firstName, deptName } = req.body;
 
    if (!firstName || !deptName) {
        res.status(400).json({ message: "First Name and Department Name are required." });
        return;
    }
 
    next();
}
 
export function validateCreateRole(req: Request, res: Response, next: NextFunction): void {
    const { firstName, role } = req.body;
 
    if (!firstName || !role) {
        res.status(400).json({ message: "First Name and Role are required." });
        return;
    }
 
    next();
}