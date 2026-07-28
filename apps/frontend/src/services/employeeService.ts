import type { Department } from "../data/types";
import * as EmployeeRepo from "../apis/employeeRepo";

export function validateFirstName(firstName: string): string {
    if (firstName.trim().length < 3) {
        return "First name must be at least 3 characters.";
    }
    return "";
}
 
export async function getDepartments(): Promise<Department[]> {
    return EmployeeRepo.getDepartments();
}
 
export async function createEmployee(firstName: string, lastName: string | undefined, deptName: string, token: string): Promise<Department[]> {
    const firstNameError = validateFirstName(firstName);
    if (firstNameError) throw new Error(firstNameError);
 
    if (!deptName) throw new Error("Please select a valid department.");
 
    return EmployeeRepo.createEmployee(firstName.trim(), lastName?.trim() || undefined, deptName, token);
}