import type { Role } from "../../data/types";
import { useFormInput } from "../../hooks/useFormInput";
import * as RoleService from "../../services/roleService";
import "./form.css";

interface Props {
	setRoles: (roles: Role[]) => void;
}

export default function RoleForm({ setRoles }: Props) {
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
				role.validate(() => error.message);
			}
		}
	};

	return (
		<section className="form-section">
			<h2>Add New Role</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="roleFirstName">First Name</label>
					<input id="roleFirstName" type="text" value={firstName.value} onChange={firstName.onChange} />
					{firstName.message && <p className="error">{firstName.message}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="roleLastName">Last Name</label>
					<input id="roleLastName" type="text" value={lastName.value} onChange={lastName.onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="role">Role</label>
					<input id="role" type="text" value={role.value} onChange={role.onChange} />
					{role.message && <p className="error">{role.message}</p>}
				</div>
				<button type="submit">Add Role</button>
			</form>
		</section>
	);
}