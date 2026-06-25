import { useEffect, useState } from "react";
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
import type { Book } from "@/types/book";
import type { Loan } from "@/types/loan";
import type { DashboardStats } from "@/types/dashboardstats";
import { getBooks } from "@/services/book.services";
import { getLoans } from "@/services/loan.services";
import { getDashboardStats } from "@/services/dashboard.services";


function Dashboard() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [stats, setStats] = useState<DashboardStats>();
  const cards = stats
    ? [
      {
        title: "Total Books",
        value: stats.totalBooks,
        desc: "Available books",
        icon: BookOpen,
        text: "text-purple-600",
      },
      {
        title: "Active Borrows",
        value: stats.totalLoan,
        desc: "Current loans",
        icon: BookMarked,
        text: "text-blue-600",
      },
      {
        title: "Overdue Books",
        value: stats.overdueLoan,
        desc: "Requires attention",
        icon: AlertTriangle,
        text: "text-red-600",
      },
      {
        title: "Active Members",
        value: stats.totalUser,
        desc: "Registered members",
        icon: Users,
        text: "text-emerald-600",
      },
    ]
    : [];

  useEffect(() => {
    fetchBooks();
    fetchLoans();
    fetchDashboardStats();
  }, []);

  async function fetchBooks() {
    try {
      console.log("fetching booksss...");

      const data = await getBooks();

      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchLoans() {
    try {
      console.log("fetching booksss...");

      const data = await getLoans();

      setLoans(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDashboardStats() {
    try {
      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {
      console.log(error);
    }
  }

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
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((stat, idx) => (
            <Card key={idx} className="border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardHeader className="flex flex-row items-center justify-between py-3 px-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                <div className={`p-2 rounded-xl bg-slate-50 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors ${stat.text}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</div>
                <p className="text-xs text-slate-500 font-medium mt-1">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Chart & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Lists of Books Table */}
          <Card className="lg:col-span-2 border border-slate-100 shadow-xs rounded-2xl overflow-hidden">
            <CardHeader className="px-6 pt-6 pb-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-lg font-bold text-slate-800">Books Catalog</CardTitle>
                  <CardDescription className="text-xs text-slate-400">Quick status check and quick loan checkout controls.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto max-h-[40vh] overflow-y-auto">
                  <table className="w-full border-collapse text-left text-sm text-slate-600">
                  <thead className="bg-slate-50/20 text-xs font-bold text-slate-400 uppercase border-b border-slate-100">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-semibold">Book Title</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Author</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Isbn</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Quantity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 border-t border-slate-100">
                    {books.map((book) => (
                      <tr key={book.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 flex items-center space-x-4">
                          <div className="font-semibold text-slate-900">{book.title}</div>

                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700">
                            {book.author}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-700">
                          {book.isbn}
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-700">
                          {book.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card className="border border-slate-100 shadow-xs rounded-2xl">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-lg font-bold text-slate-800">Recent Activity</CardTitle>
              <CardDescription className="text-xs text-slate-400">Latest operations in the system</CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 max-h-[40vh] overflow-y-auto">
              <div className="flow-root mt-4">
                <ul className="-my-5 divide-y divide-slate-100">
                  {loans.map((loan) => (
                    <li key={loan.id} className="py-4 flex items-start space-x-3 text-sm">
                      <div className="mt-0.5">
                        {loan.status === "returned" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : loan.status === "borrowed" ? (
                          <BookOpen className="w-4 h-4 text-purple-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 truncate">{loan.book_title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{loan.user_name}</p>
                      </div>
                      <div className="text-[10px] font-medium text-slate-400 shrink-0 whitespace-nowrap">
                        <p>{new Date(loan.borrowed_at).toLocaleDateString("en-MY")}</p>
                        <p>{loan.status}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;