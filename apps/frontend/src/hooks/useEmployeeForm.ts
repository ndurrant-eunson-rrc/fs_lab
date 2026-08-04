import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import type { Department } from "../data/types";
import { useFormInput } from "./useFormInput";
import * as EmployeeService from "../services/employeeService";
 
export function useEmployeeForm(): {
    firstName: ReturnType<typeof useFormInput>;
    lastName: ReturnType<typeof useFormInput>;
    department: ReturnType<typeof useFormInput>;
    departments: Department[];
    isLoading: boolean;
    handleSubmit: (e: React.SubmitEvent) => void;
} {
    const { getToken } = useAuth();
    const queryClient = useQueryClient();
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const department = useFormInput("");
 
    // useQuery fetches and caches departments
    const { data: departments = [], isLoading } = useQuery({
        queryKey: ["departments"],
        queryFn: EmployeeService.getDepartments,
    });
 
    // useMutation handles POST requests, invalidates cache on success
    const mutation = useMutation({
        mutationFn: async ({ firstName, lastName, department }: { firstName: string; lastName: string; department: string }) => {
            const token = await getToken();
            if (!token) throw new Error("Not authenticated.");
            return EmployeeService.createEmployee(firstName, lastName, department, token);
        },
        onSuccess: () => {
            // invalidates and fetches departments after a new employee is added
            queryClient.invalidateQueries({ queryKey: ["departments"] });
            firstName.reset();
            lastName.reset();
            department.reset();
        },
        onError: (error) => {
            if (error instanceof Error) {
                department.setMessage(error.message);
            }
        },
    });
 
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
 
        const firstNameValid = firstName.validate(
            (value) => value.trim().length < 3 ? "First name must be at least 3 characters." : ""
        );
 
        const deptValid = department.validate(
            (value) => !value ? "Please select a department." : ""
        );
 
        if (!firstNameValid || !deptValid) return;
 
        mutation.mutate({
            firstName: firstName.value,
            lastName: lastName.value,
            department: department.value,
        });
    };
 
    return { firstName, lastName, department, departments, isLoading, handleSubmit };
}