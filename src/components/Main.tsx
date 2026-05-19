import type { Department } from "./types";
import DepartmentSection from "./DepartmentSection";

interface Props {
    departments: Department[];
}

export default function Main({ departments }: Props) {
    return (
        <main>
            {departments.map((department: Department, index: number) => (
                <DepartmentSection key={index} department={department} />
            ))}
        </main>
    );
}