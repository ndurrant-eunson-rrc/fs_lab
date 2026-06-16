import type { Role } from "../../data/types";
import RoleForm from "../forms/RoleForm";

interface Props {
	roles: Role[];
	setRoles: (roles: Role[]) => void;
}

export default function Organization({ roles, setRoles }: Props) {
	return (
		<>
			<main>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{roles.map((person: Role, index: number) => (
							<tr key={index}>
								<td>{person.firstName} {person.lastName}</td>
								<td>{person.role}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
			<RoleForm setRoles={setRoles} />
		</>
	);
}