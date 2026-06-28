import { useEmployeeForm } from "../../hooks/useEmployeeForm";
import Main from "./Main";
import Form from "../forms/Form";

export default function EmployeesPage() {
	const employeeForm = useEmployeeForm();

	return (
		<>
		<Main departments= { employeeForm.departments } />
		<Form employeeForm={ employeeForm } />
			</>
  );
}