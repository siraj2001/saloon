import { mockAppointments } from "@/app/admin/mockData";
import { MoreHorizontal } from "lucide-react";

export default function RecentAppointments() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-xl font-bold font-serif text-black">Today's Appointments</h3>
        <button className="text-[var(--color-brand-gold)] font-medium text-sm hover:underline">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Service</th>
              <th className="px-6 py-4 font-medium">Stylist</th>
              <th className="px-6 py-4 font-medium">Time</th>
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
                <td className="px-6 py-4 text-gray-700 font-medium">{apt.time}</td>
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
    </div>
  );
}
