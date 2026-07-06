import prisma from "../../../lib/prisma";
import { Department } from "../types";
 
export async function getDepartments(): Promise<Department[]> {
    const departments = await prisma.department.findMany({
        include: {
            employees: true,
        },
    });
 
    return departments.map((dept) => ({
        name: dept.name,
        employees: dept.employees.map((emp) => ({
            firstName: emp.firstName,
            lastName: emp.lastName ?? undefined,
        })),
    }));
}
 
export async function createEmployee(firstName: string, lastName: string | undefined, deptName: string): Promise<Department[]> {
    const department = await prisma.department.findUnique({
        where: { name: deptName },
    });
 
    if (!department) {
        throw new Error(`Department not found: ${deptName}`);
    }
 
    await prisma.employee.create({
        data: {
            firstName,
            lastName,
            departmentId: department.id,
        },
    });
 
    return getDepartments();
}