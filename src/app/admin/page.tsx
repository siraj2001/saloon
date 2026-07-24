import DashboardStats from "@/components/admin/DashboardStats";
import RevenueChart from "@/components/admin/RevenueChart";
import BookingPieChart from "@/components/admin/BookingPieChart";
import RecentAppointments from "@/components/admin/RecentAppointments";
import { Plus } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-black">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Add Customer
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-black text-[var(--color-brand-gold)] px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg">
            <Plus size={18} />
            New Booking
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <BookingPieChart />
        </div>
      </div>

      {/* Recent Appointments Table */}
      <RecentAppointments />
      
    </div>
  );
}
