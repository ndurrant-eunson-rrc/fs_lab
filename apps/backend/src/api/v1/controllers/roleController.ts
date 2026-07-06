import { Request, Response } from "express";
import * as RoleService from "../services/roleService";
 
export function getRoles(req: Request, res: Response): void {
  try {
    const roles = RoleService.getRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: "Failed to get roles." });
  }
}
 
export function createRole(req: Request, res: Response): void {
  try {
    const { firstName, lastName, role } = req.body;
 
    if (!firstName || !role) {
      res.status(400).json({ message: "firstName and role are required." });
      return;
    }
 
    const updated = RoleService.createRole(firstName, lastName, role);
    res.status(201).json(updated);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Failed to create role." });
    }
  }
}