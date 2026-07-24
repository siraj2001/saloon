import { mockStylists } from "@/app/admin/mockData";
import { Plus, Edit2, Trash2, Star, User } from "lucide-react";

export default function AdminStylists() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-black">Manage Stylists</h1>
          <p className="text-gray-500 mt-1">View and manage your salon professionals.</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-[var(--color-brand-gold)] px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg">
          <Plus size={18} />
          Add Stylist
        </button>
      </div>

      {/* Stylist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockStylists.map((stylist) => (
          <div key={stylist.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-6 flex-1 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full mb-4 border-2 border-gray-100 bg-gray-50 flex items-center justify-center">
                <User size={36} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">{stylist.name}</h3>
              <p className="text-[var(--color-brand-gold)] font-medium text-sm mb-3">{stylist.role}</p>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{stylist.specialization}</p>
              
              <div className="w-full mt-auto space-y-3">
                <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                  <span className="text-gray-500">Status</span>
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                    stylist.availability === 'Available' ? 'bg-green-50 text-green-700' :
                    stylist.availability === 'Busy' ? 'bg-amber-50 text-amber-700' :
                    'bg-red-50 text-red-700'
                  }`}>
                    {stylist.availability}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Today's Bookings</span>
                  <span className="font-medium text-black">{stylist.todayBookings}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-medium text-black flex items-center gap-1">
                    <Star size={14} className="fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
                    {stylist.rating}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end gap-2">
              <button className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-lg transition-colors">
                <Edit2 size={18} />
              </button>
              <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
