import { useRoleForm } from "../../hooks/useRoleForm";
import RoleForm from "../forms/RoleForm";

export default function Organization() {
	const roleForm = useRoleForm();

	return (
		<>
		<main>
		<table>
		<thead>
		<tr>
		<th>Name </th>
		< th > Role </th>
		</tr>
		</thead>
		<tbody>
            {
		roleForm.roles.map((person, index) => (
			<tr key= { index } >
			<td>{ person.firstName } { person.lastName } </td>
			< td > { person.role } </td>
		</tr>
		))
	}
	</tbody>
		</table>
		</main>
		< RoleForm roleForm = { roleForm } />
			</>
  );
}