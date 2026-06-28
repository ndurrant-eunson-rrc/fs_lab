import { useState } from "react";
import type { Role } from "../data/types";
import { useFormInput } from "./useFormInput";
import * as RoleService from "../services/roleService";

export function useRoleForm(): {
    firstName: ReturnType<typeof useFormInput>;
    lastName: ReturnType<typeof useFormInput>;
    role: ReturnType<typeof useFormInput>;
    roles: Role[];
    handleSubmit: (e: React.SubmitEvent) => void;
} {
    const [roles, setRoles] = useState<Role[]>(RoleService.getRoles());
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const role = useFormInput("");

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const firstNameValid = firstName.validate(
            (value) => value.trim().length < 3 ? "First name must be at least 3 characters." : ""
        );

        const roleValid = role.validate(
            (value) => !value.trim() ? "Please enter a role." : ""
        );

        if (!firstNameValid || !roleValid) return;

        try {
            const updated = RoleService.createRole(firstName.value, lastName.value, role.value);
            setRoles(updated);
            firstName.reset();
            lastName.reset();
            role.reset();
        } catch (error) {
            if (error instanceof Error) {
                role.setMessage(error.message);
            }
        }
    };

    return { firstName, lastName, role, roles, handleSubmit };
}