import { mockAppointments } from "@/app/admin/mockData";
import { Plus, MoreHorizontal, Calendar as CalendarIcon, Filter } from "lucide-react";

export default function AdminBookings() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-black">Manage Bookings</h1>
          <p className="text-gray-500 mt-1">View and manage all customer appointments.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-black text-[var(--color-brand-gold)] px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg">
            <Plus size={18} />
            New Booking
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-black font-medium">
            <CalendarIcon size={18} className="text-[var(--color-brand-gold)]" />
            <span>Today's Schedule</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-gray-500 text-sm">
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Stylist</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockAppointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-black">{apt.customer}</div>
                    <div className="text-xs text-gray-500">{apt.id}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{apt.service}</td>
                  <td className="px-6 py-4 text-gray-700">{apt.stylist}</td>
                  <td className="px-6 py-4">
                    <div className="text-gray-700 font-medium">{apt.time}</div>
                    <div className="text-xs text-gray-500">{apt.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      apt.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' :
                      apt.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      apt.status === 'Upcoming' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-black transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination mock */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-white">
          <span>Showing 1 to {mockAppointments.length} of {mockAppointments.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-black text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
