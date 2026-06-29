import { Department } from "../data/types";

const BASE_URL = "http://localhost:3000/api/v1/employees";
 
export async function getDepartments(): Promise<Department[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch departments.");
    return response.json();
}
 
export async function createEmployee(firstName: string, lastName: string | undefined, deptName: string): Promise<Department[]> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, deptName }),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }
    return response.json();
}