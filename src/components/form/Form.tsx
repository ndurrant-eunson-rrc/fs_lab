import { useState } from "react";
import type { Department, Employee } from "../types";
import "./Form.css";

interface Props {
	departments: Department[];
	setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

export default function Form({ departments, setDepartments }: Props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [selectedDept, setSelectedDept] = useState("");
	const [errors, setErrors] = useState({ firstName: "", department: "" });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({ firstName: "", department: "" });

		const newErrors = { firstName: "", department: "" };

		if (firstName.trim().length < 3)
			newErrors.firstName = "First name must be at least 3 characters.";

		if (!selectedDept)
			newErrors.department = "Please select a department.";

		setErrors(newErrors);
		if (newErrors.firstName || newErrors.department) return;

		const newEmployee: Employee = { firstName: firstName.trim(), lastName: lastName.trim() || undefined };

		setDepartments((prev) =>
			prev.map((dept) =>
				dept.name === selectedDept ? { ...dept, employees: [...dept.employees, newEmployee] } : dept
			)
		);

		setFirstName("");
		setLastName("");
		setSelectedDept("");
	};

	return (
		<section className="form-section">
			<h2>Add New Employee</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					{errors.firstName && <p className="error">{errors.firstName}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name (optional)</label>
					<input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<div className="form-group">
					<label htmlFor="department">Department</label>
					<select id="department" value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
						<option value="">-- Select a Department --</option>
						{departments.map((dept, index) => (
							<option key={index} value={dept.name}>{dept.name}</option>
						))}
					</select>
					{errors.department && <p className="error">{errors.department}</p>}
				</div>
				<button type="submit">Add Employee</button>
			</form>
		</section>
	);
}