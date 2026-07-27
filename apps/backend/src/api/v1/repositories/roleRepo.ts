import prisma from "../../../lib/prisma";
import { Role } from "../types";

export async function getRoles(): Promise<Role[]> {
    const roles = await prisma.role.findMany({
        include: {
            employee: true,
        },
    });

    return roles
        .filter((r) => r.employee !== null)
        .map((r) => ({
            firstName: r.employee!.firstName,
            lastName: r.employee!.lastName ?? "",
            role: r.title,
        }));
}

export async function createRole(firstName: string, lastName: string, role: string): Promise<Role[]> {
    const existingRole = await prisma.role.findUnique({
        where: { title: role },
    });

    if (existingRole) {
        throw new Error(`The role "${role}" is already occupied.`);
    }

    let employee = await prisma.employee.findFirst({
        where: { firstName, lastName },
    });

    if (!employee) {
        const defaultDept = await prisma.department.findFirst();
        employee = await prisma.employee.create({
            data: {
                firstName,
                lastName,
                departmentId: defaultDept!.id,
            },
        });
    }

    await prisma.role.create({
        data: {
            title: role,
            employeeId: employee.id,
        },
    });

    return getRoles();
}