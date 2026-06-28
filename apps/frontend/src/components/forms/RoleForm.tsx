import { useRoleForm } from "../../hooks/useRoleForm";
import "./form.css";

interface Props {
	roleForm: ReturnType<typeof useRoleForm>;
}

export default function RoleForm({ roleForm }: Props) {
	const { firstName, lastName, role, handleSubmit } = roleForm;

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