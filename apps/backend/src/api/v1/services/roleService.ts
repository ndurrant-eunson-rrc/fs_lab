import * as RoleRepo from "../repositories/roleRepo";
import { validateFirstName } from "./employeeService";
import { Role } from "../types";

export async function getRoles(): Promise<Role[]> {
    return RoleRepo.getRoles();
}
 
export async function createRole(firstName: string, lastName: string, role: string): Promise<Role[]> {
    const firstNameError = validateFirstName(firstName);
    if (firstNameError) throw new Error(firstNameError);
 
    if (!role.trim()) throw new Error("Please enter a role.");
 
    return RoleRepo.createRole(firstName.trim(), lastName.trim(), role.trim());
}
