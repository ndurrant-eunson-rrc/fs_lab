import { Request, Response, NextFunction } from "express";
 
export function validateCreateEmployee(req: Request, res: Response, next: NextFunction): void {
    const { firstName, deptName } = req.body;
 
    if (!firstName || !deptName) {
        res.status(400).json({ message: "firstName and deptName are required." });
        return;
    }
 
    next();
}
 
export function validateCreateRole(req: Request, res: Response, next: NextFunction): void {
    const { firstName, role } = req.body;
 
    if (!firstName || !role) {
        res.status(400).json({ message: "firstName and role are required." });
        return;
    }
 
    next();
}