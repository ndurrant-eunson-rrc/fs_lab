import * as EmployeeRepo from "../apis/employeeRepo";
import type { Department } from "../data/types";

export function getDepartments(): Department[] {
    return EmployeeRepo.getDepartments();
}

export function createEmployee(firstName: string, lastName: string | undefined, deptName: string): Department[] {
    if (firstName.trim().length < 3) {
        throw new Error("First name must be at least 3 characters.");
    }

    const deptExists = EmployeeRepo.getDepartments().some((dept) => dept.name === deptName);
    if (!deptExists) {
        throw new Error("Please select a valid department.");
    }

    return EmployeeRepo.createEmployee(firstName.trim(), lastName?.trim() || undefined, deptName);
}