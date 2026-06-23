import { AppSidebar } from "./app-sidebar";
import Navbar from "./navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}