import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import type { Role } from "../data/types";
import { useFormInput } from "./useFormInput";
import * as RoleService from "../services/roleService";
 
export function useRoleForm(): {
    firstName: ReturnType<typeof useFormInput>;
    lastName: ReturnType<typeof useFormInput>;
    role: ReturnType<typeof useFormInput>;
    roles: Role[];
    isLoading: boolean;
    handleSubmit: (e: React.SubmitEvent) => void;
} {
    const { getToken } = useAuth();
    const queryClient = useQueryClient();
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const role = useFormInput("");
 
    // useQuery fetches and caches departments
    const { data: roles = [], isLoading } = useQuery({
        queryKey: ["roles"],
        queryFn: RoleService.getRoles,
    });
 
    // useMutation handles POST requests, invalidates cache on success
    const mutation = useMutation({
        mutationFn: async ({ firstName, lastName, role }: { firstName: string; lastName: string; role: string }) => {
            const token = await getToken();
            if (!token) throw new Error("Not authenticated.");
            return RoleService.createRole(firstName, lastName, role, token);
        },
        onSuccess: () => {
            // invalidates and fetches roles after a new role is added
            queryClient.invalidateQueries({ queryKey: ["roles"] });
            firstName.reset();
            lastName.reset();
            role.reset();
        },
        onError: (error) => {
            if (error instanceof Error) {
                role.setMessage(error.message);
            }
        },
    });
 
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
 
        const firstNameValid = firstName.validate(
            (value) => value.trim().length < 3 ? "First name must be at least 3 characters." : ""
        );
 
        const roleValid = role.validate(
            (value) => !value.trim() ? "Please enter a role." : ""
        );
 
        if (!firstNameValid || !roleValid) return;
 
        mutation.mutate({
            firstName: firstName.value,
            lastName: lastName.value,
            role: role.value,
        });
    };
 
    return { firstName, lastName, role, roles, isLoading, handleSubmit };
}