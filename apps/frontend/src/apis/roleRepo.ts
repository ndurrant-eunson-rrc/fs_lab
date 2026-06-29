import { Role } from "../data/types";

const BASE_URL = "http://localhost:3000/api/v1/roles";
 
export async function getRoles(): Promise<Role[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch roles.");
    return response.json();
}
 
export async function createRole(firstName: string, lastName: string, role: string): Promise<Role[]> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, role }),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }
    return response.json();
}