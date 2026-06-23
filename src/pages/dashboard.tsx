import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Layout from "@/layouts/layout"
import { 
  BookOpen, 
  Users, 
  Clock, 
  Activity, 
  CheckCircle2, 
  AlertTriangle,
  BookMarked
} from "lucide-react";

function Dashboard() {
  const [stats] = useState([
    { title: "Total Books", value: "12,450", desc: "+120 this month", icon: BookOpen, text: "text-purple-600" },
    { title: "Active Borrows", value: "482", desc: "+18 today", icon: BookMarked, text: "text-blue-600" },
    { title: "Overdue Books", value: "27", desc: "Requires attention", icon: AlertTriangle, text: "text-red-600" },
    { title: "Active Members", value: "3,212", desc: "+84 new members", icon: Users, text: "text-emerald-600" },
  ]);

  const [activities] = useState([
    { member: "Sarah Connor", action: "Borrowed 'Dune'", time: "10 mins ago", status: "borrowed" },
    { member: "Marcus Wright", action: "Returned 'Clean Code'", time: "45 mins ago", status: "returned" },
    { member: "John Connor", action: "Overdue fine paid ($5.00)", time: "2 hours ago", status: "paid" },
    { member: "Kyle Reese", action: "Borrowed 'Neuromancer'", time: "4 hours ago", status: "borrowed" },
  ]);

  const [popularBooks, setPopularBooks] = useState([
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", rating: "4.9", status: "Available", color: "from-amber-500 to-orange-600" },
    { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self-Help", rating: "4.8", status: "Checked Out", color: "from-cyan-500 to-blue-600" },
    { id: 3, title: "Zero to One", author: "Peter Thiel", category: "Business", rating: "4.7", status: "Available", color: "from-purple-500 to-indigo-600" },
    { id: 4, title: "Deep Work", author: "Cal Newport", category: "Productivity", rating: "4.8", status: "Available", color: "from-emerald-500 to-teal-600" },
  ]);

  const handleBorrowToggle = (id: number) => {
    setPopularBooks(prev => prev.map(book => {
      if (book.id === id) {
        return {
          ...book,
          status: book.status === "Available" ? "Checked Out" : "Available"
        };
      }
      return book;
    }));
  };

  return (
    <Layout>
      <div className="space-y-8 max-w-7xl mx-auto w-full p-1 font-sans">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Console Overview
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Real-time analytics and book inventory dashboard.
            </p>
          </div>
          <div className="flex items-center space-x-3 text-xs bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-xs text-slate-600 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Database Connected</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="flex flex-row items-center justify-between pb-3 pt-6 px-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                <div className={`p-2 rounded-xl bg-slate-50 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors ${stat.text}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</div>
                <p className="text-xs text-slate-500 font-medium mt-1">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Chart & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Custom SVG Chart Card */}
          <Card className="lg:col-span-2 border border-slate-100 shadow-xs rounded-2xl">
            <CardHeader className="px-6 pt-6 pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg font-bold text-slate-800">Circulation Trends</CardTitle>
                  <CardDescription className="text-xs text-slate-400">Weekly checkout and borrowing statistics</CardDescription>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Live Feed</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-4">
              <div className="relative h-60 w-full flex items-end">
                {/* SVG Area Chart */}
                <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9333ea" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#9333ea" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="500" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Area Path */}
                  <path 
                    d="M 0 170 C 50 140, 100 160, 150 100 C 200 40, 250 80, 300 120 C 350 160, 400 100, 450 60 C 500 20, 500 200, 0 200 Z" 
                    fill="url(#chartGrad)" 
                  />

                  {/* Line Path */}
                  <path 
                    d="M 0 170 C 50 140, 100 160, 150 100 C 200 40, 250 80, 300 120 C 350 160, 400 100, 450 60 C 500 20" 
                    fill="none" 
                    stroke="#9333ea" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />
                  
                  {/* Data Point Circles */}
                  <circle cx="150" cy="100" r="5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
                  <circle cx="250" cy="80" r="5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
                  <circle cx="450" cy="60" r="5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
                </svg>

                {/* X-Axis Labels */}
                <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-400 font-bold px-1 select-none">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card className="border border-slate-100 shadow-xs rounded-2xl">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-lg font-bold text-slate-800">Recent Activity</CardTitle>
              <CardDescription className="text-xs text-slate-400">Latest operations in the system</CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="flow-root mt-4">
                <ul className="-my-5 divide-y divide-slate-100">
                  {activities.map((act, idx) => (
                    <li key={idx} className="py-4 flex items-start space-x-3 text-sm">
                      <div className="mt-0.5">
                        {act.status === "returned" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : act.status === "borrowed" ? (
                          <BookOpen className="w-4 h-4 text-purple-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 truncate">{act.member}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{act.action}</p>
                      </div>
                      <div className="text-[10px] font-medium text-slate-400 shrink-0 whitespace-nowrap">
                        {act.time}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Books Table */}
        <Card className="border border-slate-100 shadow-xs rounded-2xl overflow-hidden">
          <CardHeader className="px-6 pt-6 pb-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div>
                <CardTitle className="text-lg font-bold text-slate-800">Trending Books Catalog</CardTitle>
                <CardDescription className="text-xs text-slate-400">Quick status check and quick loan checkout controls.</CardDescription>
              </div>
              <div className="text-xs font-semibold text-slate-500">
                Displaying 4 active selections
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-slate-600">
                <thead className="bg-slate-50/20 text-xs font-bold text-slate-400 uppercase border-b border-slate-100">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">Book Info</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Category</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Rating</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Availability</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 border-t border-slate-100">
                  {popularBooks.map((book) => (
                    <tr key={book.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 flex items-center space-x-4">
                        {/* Book Cover Indicator */}
                        <div className={`w-10 h-14 bg-gradient-to-br ${book.color} rounded-lg shadow-xs shrink-0 flex items-center justify-center text-white font-bold text-[9px] p-1 text-center leading-tight`}>
                          {book.title.substring(0, 5)}..
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{book.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{book.author}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700">
                          {book.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-700">
                        ★ {book.rating}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          book.status === "Available" 
                            ? "bg-emerald-50 text-emerald-700" 
                            : "bg-amber-50 text-amber-700"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            book.status === "Available" ? "bg-emerald-500" : "bg-amber-500"
                          }`} />
                          <span>{book.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleBorrowToggle(book.id)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                            book.status === "Available"
                              ? "border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 hover:border-purple-300"
                              : "border-slate-200 text-slate-600 bg-slate-50 hover:bg-slate-100"
                          }`}
                        >
                          {book.status === "Available" ? "Check Out" : "Check In"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </Layout>
  );
}

export default Dashboard;