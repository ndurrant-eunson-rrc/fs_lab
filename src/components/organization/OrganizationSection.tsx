import type { Role } from "../../data/types";
import organizationData from "../../data/organization-data";
 
export default function Organization() {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {organizationData.map((person: Role, index: number) => (
            <tr key={index}>
              <td>{person.firstName} {person.lastName}</td>
              <td>{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}