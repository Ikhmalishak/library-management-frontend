import type { Book } from "@/types/book";
import api from "./api";

export async function getBooks(): Promise<Book[]> {
    try {
        const res = await api.get("/books");
        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}