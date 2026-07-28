import { useEffect, useState } from "react";
import type { Role } from "../data/types";
import { useFormInput } from "./useFormInput";
import * as RoleService from "../services/roleService";
import { useAuth } from "@clerk/clerk-react";

export function useRoleForm(): {
    firstName: ReturnType<typeof useFormInput>;
    lastName: ReturnType<typeof useFormInput>;
    role: ReturnType<typeof useFormInput>;
    data: Role[];
    handleSubmit: (e: React.SubmitEvent) => void;
} {
    const { getToken } = useAuth();
    const [data, setData] = useState<Role[]>([]);
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const role = useFormInput("");

    useEffect(() => {
        RoleService.getRoles()
            .then(setData)
            .catch((error) => console.error(error));
    }, []);

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const firstNameValid = firstName.validate(
            (value) => value.trim().length < 3 ? "First name must be at least 3 characters." : ""
        );

        const roleValid = role.validate(
            (value) => !value.trim() ? "Please enter a role." : ""
        );

        if (!firstNameValid || !roleValid) return;

        getToken().then((token) => {
            if (!token) throw new Error("Not authenticated.");
            return RoleService.createRole(firstName.value, lastName.value, role.value, token);
        })
            .then((updated) => {
                setData(updated);
                firstName.reset();
                lastName.reset();
                role.reset();
            })
            .catch((error) => {
                if (error instanceof Error) {
                    role.setMessage(error.message);
                }
            });
    };

    return { firstName, lastName, role, data, handleSubmit };
}