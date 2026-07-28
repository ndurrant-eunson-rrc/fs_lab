import { useEmployeeForm } from "../../hooks/useEmployeeForm";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Main from "./Main";
import Form from "../forms/Form";
import LoginPrompt from "../layout/Login";

export default function EmployeesPage() {
    const employeeForm = useEmployeeForm();

    return (
        <>
            <Main departments={employeeForm.departments} />
            <SignedIn>
                <Form employeeForm={employeeForm} />
            </SignedIn>
            <SignedOut>
                <LoginPrompt />
            </SignedOut>
        </>
    );
}