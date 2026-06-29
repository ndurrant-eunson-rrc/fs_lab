import { Department, Employee } from "../data/types";
import departments from "../data/department-data";

 
export function validateFirstName(firstName: string): string {
    if (firstName.trim().length < 3) {
        return "First name must be at least 3 characters.";
    }
    return "";
}
 
export function getDepartments(): Department[] {
    return [...departments];
}
 
export function createEmployee(firstName: string, lastName: string | undefined, deptName: string): Department[] {
    const firstNameError = validateFirstName(firstName);
    if (firstNameError) throw new Error(firstNameError);
 
    const foundDeptIndex = departments.findIndex((dept) => dept.name === deptName);
    if (foundDeptIndex === -1) {
        throw new Error("Please select a valid department.");
    }
 
    const newEmployee: Employee = { firstName: firstName.trim(), lastName: lastName?.trim() || undefined };
 
    departments[foundDeptIndex] = {
        ...departments[foundDeptIndex],
        employees: [...departments[foundDeptIndex].employees, newEmployee],
    };
 
    return [...departments];
}