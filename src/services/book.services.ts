import type { Book } from "@/types/book";
import axios from "axios";

export async function getBooks(): Promise<Book[]>{
    try {
        const res = await axios.get("http://localhost:3000/api/books");
        return res.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}