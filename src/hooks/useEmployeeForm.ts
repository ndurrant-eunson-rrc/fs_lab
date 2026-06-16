import { useState } from "react";
import type { Department } from "../data/types";
import { useFormInput } from "./useFormInput";
import * as EmployeeService from "../services/employeeService";

export function useEmployeeForm(): {
    firstName: ReturnType<typeof useFormInput>;
    lastName: ReturnType<typeof useFormInput>;
    department: ReturnType<typeof useFormInput>;
    departments: Department[];
    handleSubmit: (e: React.SubmitEvent) => void;
} {
    const [departments, setDepartments] = useState<Department[]>(EmployeeService.getDepartments());
    const firstName = useFormInput("");
    const lastName = useFormInput("");
    const department = useFormInput("");

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const firstNameValid = firstName.validate(
            (value) => value.trim().length < 3 ? "First name must be at least 3 characters." : ""
        );

        const deptValid = department.validate(
            (value) => !value ? "Please select a department." : ""
        );

        if (!firstNameValid || !deptValid) return;

        try {
            const updated = EmployeeService.createEmployee(firstName.value, lastName.value, department.value);
            setDepartments(updated);
            firstName.reset();
            lastName.reset();
            department.reset();
        } catch (error) {
            if (error instanceof Error) {
                department.setMessage(error.message);
            }
        }
    };

    return { firstName, lastName, department, departments, handleSubmit };
}