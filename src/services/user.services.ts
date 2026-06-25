import type { User } from "@/types/user";
import axios from "axios";

export async function getUsers(): Promise<User[]> {
    try {
        const res = await axios.get("http://localhost:3000/api/members");
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}