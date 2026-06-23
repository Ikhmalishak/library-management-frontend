import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  History, 
  Settings, 
  LogOut, 
  Library, 
  TrendingUp 
} from "lucide-react";
import { useState, useEffect } from "react";

export function AppSidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "Alex Mercer", email: "admin@library.com", role: "Chief Librarian" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard", active: true },
    { name: "Books Catalog", icon: BookOpen, path: "#", active: false },
    { name: "Members Directory", icon: Users, path: "#", active: false },
    { name: "Transactions History", icon: History, path: "#", active: false },
    { name: "System Analytics", icon: TrendingUp, path: "#", active: false },
    { name: "Settings", icon: Settings, path: "#", active: false },
  ];

  return (
    <Sidebar className="border-r border-slate-100 bg-white">
      {/* Sidebar Header */}
      <SidebarHeader className="h-20 flex items-center px-6 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-600 rounded-lg text-white">
            <Library className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg text-slate-800 tracking-tight">
            Zeus Library
          </span>
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="px-3 py-4 space-y-6">
        <SidebarGroup>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 block mb-3">
            Core Menu
          </span>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.name} className="mb-1">
                <SidebarMenuButton 
                  isActive={item.active}
                  onClick={() => item.path !== "#" && navigate(item.path)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm ${
                    item.active 
                      ? "bg-purple-50 text-purple-700 font-semibold" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${item.active ? "text-purple-600" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden">
            {/* User Avatar Initials */}
            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm shrink-0">
              {user.name ? user.name.split(" ").map(n => n[0]).join("") : "U"}
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-[10px] text-slate-500 truncate">{user.role}</p>
            </div>
          </div>
          
          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}