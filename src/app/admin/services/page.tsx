import { mockServices } from "@/app/admin/mockData";
import { Plus, Edit2, Trash2, Clock, IndianRupee } from "lucide-react";

export default function AdminServices() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-black">Manage Services</h1>
          <p className="text-gray-500 mt-1">View and configure salon services and pricing.</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-[var(--color-brand-gold)] px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg">
          <Plus size={18} />
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="px-6 py-4 font-medium">Service Name</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium">Bookings (All Time)</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockServices.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-black">{service.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-black font-medium">
                      <IndianRupee size={16} className="text-gray-400 mr-1" />
                      {service.price}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="text-gray-400 mr-2" />
                      {service.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                      {service.bookingCount} times
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-lg transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
