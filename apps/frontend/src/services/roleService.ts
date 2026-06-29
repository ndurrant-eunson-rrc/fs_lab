import { Role } from "../data/types";
import { validateFirstName } from "./employeeService";
import organizationData from "../data/organization-data";
 
export function getRoles(): Role[] {
    return [...organizationData];
}
 
export function createRole(firstName: string, lastName: string, role: string): Role[] {
    const firstNameError = validateFirstName(firstName);
    if (firstNameError) throw new Error(firstNameError);
 
    if (!role.trim()) throw new Error("Please enter a role.");
 
    const foundRole = organizationData.find((r) => r.role === role);
    if (foundRole) throw new Error(`The role "${role}" is already occupied.`);
 
    organizationData.push({ firstName: firstName.trim(), lastName: lastName.trim(), role: role.trim() });
    return [...organizationData];
}