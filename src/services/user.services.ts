import type { User } from "@/types/user";
import api from "./api";

export async function getUsers(): Promise<User[]> {
    try {
        const res = await api.get("/members");
        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}