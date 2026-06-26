import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell, Plus, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (e) {
        console.error(e);
        return { name: "Alex Mercer", role: "Chief Librarian" };
      }
    }
    return { name: "Alex Mercer", role: "Chief Librarian" };
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="w-full bg-white border-b border-slate-100 px-6 font-sans">
      <div className="flex justify-between h-20 items-center">
        {/* Left Side: Sidebar Trigger & Search Bar */}
        <div className="flex items-center space-x-6 flex-1 max-w-md">
          <SidebarTrigger className="text-slate-600 hover:text-slate-900 cursor-pointer" />
          <div className="relative w-full hidden md:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              type="text" 
              placeholder="Search books, authors, members..."
              className="w-full h-10 pl-10 pr-12 text-sm bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:ring-1 focus:ring-purple-500 rounded-xl transition-all outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <kbd className="text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded-md shadow-xs">
                ⌘K
              </kbd>
            </span>
          </div>
        </div>

        {/* Right Side: Notifications & Profile */}
        <div className="flex items-center space-x-4">
          {/* Quick Issue Button */}
          <button className="hidden sm:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm px-4 py-2 rounded-xl transition-all shadow-md shadow-purple-100 hover:shadow-lg cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>Issue Book</span>
          </button>

          {/* Notifications Center */}
          <button className="relative p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
          </button>

          <div className="h-6 w-px bg-slate-200" />

          {/* User Profile Info */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm">
              {user.name ? user.name.split(" ").map((n: string) => n[0]).join("") : "U"}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">
                {user.name}
              </p>
              <p className="text-[10px] text-slate-400">
                {user.role}
              </p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors hidden md:block" />
          </div>

          {/* Logout Button */}
          <button onClick={handleLogout} className="p-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-red-100">
            <LogOut className="w-5 h-5" />
          </button>
        </div>

      </div>
    </nav>
  );
}