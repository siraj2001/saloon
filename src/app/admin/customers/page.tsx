import { mockRecentCustomers } from "@/app/admin/mockData";
import { Plus, Search, MoreHorizontal, UserCircle, Phone } from "lucide-react";

export default function AdminCustomers() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-black">Manage Customers</h1>
          <p className="text-gray-500 mt-1">View client history and contact information.</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-[var(--color-brand-gold)] px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg">
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-black font-medium">
            <UserCircle size={18} className="text-[var(--color-brand-gold)]" />
            <span>Client Directory</span>
          </div>
          <div className="flex items-center bg-white rounded-lg px-3 py-1.5 border border-gray-200 w-full sm:w-64">
            <Search size={16} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="bg-transparent border-none outline-none w-full text-sm text-black"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-gray-500 text-sm">
                <th className="px-6 py-4 font-medium">Customer Name</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Last Visit</th>
                <th className="px-6 py-4 font-medium text-center">Total Visits</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockRecentCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-black">{customer.name}</div>
                    <div className="text-xs text-gray-500">{customer.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-700">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      {customer.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {customer.lastVisit}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-brand-gold)]/20 text-black font-bold text-sm">
                      {customer.totalVisits}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
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
