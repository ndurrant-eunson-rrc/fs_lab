import type { Department, Employee } from "../data/types";
import initialDepartments from "../data/department-data";

const departments: Department[] = [...initialDepartments];

export function getDepartments(): Department[] {
    return departments;
}

export function createEmployee(firstName: string, lastName: string | undefined, deptName: string): Department[] {
    const newEmployee: Employee = { firstName, lastName };

    const foundDeptIndex = departments.findIndex((dept) => dept.name === deptName);
    if (foundDeptIndex === -1) {
        throw new Error();
    }

    departments[foundDeptIndex] = {
        ...departments[foundDeptIndex],
        employees: [...departments[foundDeptIndex].employees, newEmployee],
    };

    return departments;
}