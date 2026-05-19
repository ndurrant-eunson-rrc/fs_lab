import type { Department, Employee } from "./types";

interface Props {
    department: Department;
}

export default function DepartmentSection({ department }: Props) {
    return (
        <section>
            <h2>{department.name}</h2>
            <ul>
                {department.employees.map((employee: Employee, index: number) => (
                    <li key={index}>
                        {employee.firstName} {employee.lastName}
                    </li>
                ))}
            </ul>
        </section>
    );
}