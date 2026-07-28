import type { Role } from "../data/types";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1/roles`;
 
export async function getRoles(): Promise<Role[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch roles.");
    return response.json();
}
 
export async function createRole(firstName: string, lastName: string, role: string, token: string): Promise<Role[]> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName, role }),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }
    return response.json();
}