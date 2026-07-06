import prisma from "../../../lib/prisma";
import { Role } from "../types";

export async function getRoles(): Promise<Role[]> {
    const roles = await prisma.role.findMany({
        include: {
            person: true,
        },
    });

    return roles
        .filter((r) => r.person !== null)
        .map((r) => ({
            firstName: r.person!.firstName,
            lastName: r.person!.lastName,
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

    await prisma.role.create({
        data: {
            title: role,
            person: {
                create: {
                    firstName,
                    lastName,
                },
            },
        },
    });

    return getRoles();
}