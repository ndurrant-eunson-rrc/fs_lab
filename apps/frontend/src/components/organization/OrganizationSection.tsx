import { useRoleForm } from "../../hooks/useRoleForm";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import type { Role } from "../../data/types";
import RoleForm from "../forms/RoleForm";
import LoginPrompt from "../layout/Login";

export default function Organization() {
	const roleForm = useRoleForm();
	const roles = (roleForm.data ?? []) as Role[];

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
		roles.map((person, index) => (
			<tr key= { index } >
			<td>{ person.firstName } { person.lastName } </td>
			< td > { person.role } </td>
		</tr>
		))
	}
	</tbody>
		</table>
		</main>
		< SignedIn >
		<RoleForm roleForm={ roleForm } />
			</SignedIn>
			< SignedOut >
			<LoginPrompt />
			</SignedOut>
			</>
    );
}