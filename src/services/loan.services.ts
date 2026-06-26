import type { Loan } from "@/types/loan";
import api from "./api";

export async function getLoans(): Promise<Loan[]> {
    try {
        const result = await api.get("/loans");
        return result.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}