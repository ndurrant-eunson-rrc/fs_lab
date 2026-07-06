import * as EmployeeRepo from "../repositories/employeeRepo";
import { Department } from "../types";
 
export function validateFirstName(firstName: string): string {
    if (firstName.trim().length < 3) {
        return "First name must be at least 3 characters.";
    }
    return "";
}
 
export async function getDepartments(): Promise<Department[]> {
    return EmployeeRepo.getDepartments();
}
 
export async function createEmployee(firstName: string, lastName: string | undefined, deptName: string): Promise<Department[]> {
    const firstNameError = validateFirstName(firstName);
    if (firstNameError) throw new Error(firstNameError);
 
    const departments = await EmployeeRepo.getDepartments();
    const deptExists = departments.some((dept) => dept.name === deptName);
    if (!deptExists) {
        throw new Error("Please select a valid department.");
    }
 
    return EmployeeRepo.createEmployee(firstName.trim(), lastName?.trim() || undefined, deptName);
}
