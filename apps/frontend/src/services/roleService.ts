import * as RoleRepo from "../apis/roleRepo";
import type { Role } from "../data/types";

export function getRoles(): Role[] {
	return RoleRepo.getRoles();
}

export function createRole(firstName: string, lastName: string, role: string): Role[] {
	if (firstName.trim().length < 3) {
		throw new Error("First name must be at least 3 characters.");
	}

	return RoleRepo.createRole(firstName.trim(), lastName.trim(), role.trim());
}