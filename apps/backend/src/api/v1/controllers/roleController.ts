import { Request, Response } from "express";
import * as RoleService from "../services/roleService";
 
export async function getRoles(req: Request, res: Response): Promise<void> {
    try {
        const roles = await RoleService.getRoles();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: "Failed to get roles." });
    }
}
 
export async function createRole(req: Request, res: Response): Promise<void> {
    try {
        const { firstName, lastName, role } = req.body;
        const updated = await RoleService.createRole(firstName, lastName, role);
        res.status(201).json(updated);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Failed to create role." });
        }
    }
}
