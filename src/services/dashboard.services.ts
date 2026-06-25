import type { DashboardStats } from "@/types/dashboardstats";
import api from "./api";

export async function getDashboardStats(): Promise<DashboardStats> {
    try {
        const res = await api.get("/dashboards");

        return res.data;
    } catch (error) {
        console.log(error);
    }
}
