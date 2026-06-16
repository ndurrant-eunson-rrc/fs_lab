import type { Role } from "../data/types";
import orgData from "../data/organization-data";

const roles: Role[] = [...orgData];

export function getRoles(): Role[] {
    return [...roles];
}

export function createRole(firstName: string, lastName: string, role: string): Role[] {
    const foundRole = roles.find((r) => r.role === role);
    if (foundRole) {
        throw new Error(`The role "${role}" is already occupied.`);
    }

    roles.push({ firstName, lastName, role });
    return [...roles];
}
