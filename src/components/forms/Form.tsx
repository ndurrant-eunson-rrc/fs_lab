import type { Department } from "../../data/types";
import { useFormInput } from "../../hooks/useFormInput";
import * as EmployeeService from "../../services/employeeService";
import "./Form.css";

interface Props {
	departments: Department[];
	setDepartments: (departments: Department[]) => void;
}

export default function Form({ departments, setDepartments }: Props) {
	const firstName = useFormInput("");
	const lastName = useFormInput("");
	const department = useFormInput("");

	const handleSubmit = (e: React.FormEvent) => {
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
			console.error(error);
		}
	};

	return (
		<section className= "form-section" >
		<h2>Add New Employee </h2>
			< form onSubmit = { handleSubmit } >
				<div className="form-group" >
					<label htmlFor="firstName" > First Name </label>
						< input id = "firstName" type = "text" value = { firstName.value } onChange = { firstName.onChange } />
							{ firstName.message && <p className="error"> { firstName.message } </p> }
							</div>
							< div className = "form-group" >
								<label htmlFor="lastName" > Last Name(optional) </label>
									< input id = "lastName" type = "text" value = { lastName.value } onChange = { lastName.onChange } />
										</div>
										< div className = "form-group" >
											<label htmlFor="department" > Department </label>
												< select id = "department" value = { department.value } onChange = { department.onChange } >
													<option value="" > Select a Department </option>
	{
		departments.map((dept, index) => (
			<option key= { index } value = { dept.name } > { dept.name } </option>
		))
	}
	</select>
	{ department.message && <p className="error" > { department.message } </p> }
	</div>
		< button type = "submit" > Add Employee </button>
			</form>
			</section>
  );
}