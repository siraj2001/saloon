import { Calendar, Users, DollarSign, TrendingUp } from "lucide-react";
import { mockStats } from "@/app/admin/mockData";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Bookings",
      value: mockStats.totalBookings,
      trend: mockStats.bookingsTrend,
      icon: Calendar,
      trendUp: true
    },
    {
      title: "Today's Appointments",
      value: mockStats.todaysAppointments,
      trend: mockStats.appointmentsTrend,
      icon: Calendar,
      trendUp: true
    },
    {
      title: "Total Revenue",
      value: `₹${mockStats.totalRevenue.toLocaleString()}`,
      trend: mockStats.revenueTrend,
      icon: DollarSign,
      trendUp: true
    },
    {
      title: "Active Stylists",
      value: mockStats.activeStylists,
      trend: mockStats.stylistsTrend,
      icon: Users,
      trendUp: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Icon className="text-[var(--color-brand-gold)]" size={24} />
              </div>
              <span className={`text-sm font-semibold flex items-center gap-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trendUp && <TrendingUp size={14} />}
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold font-serif text-black">{stat.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
