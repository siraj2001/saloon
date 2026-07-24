import { Bell, Search, User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-30">
      
      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
        <Search size={18} className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search bookings, customers..." 
          className="bg-transparent border-none outline-none w-full text-sm text-black"
        />
      </div>
      
      {/* Spacer for mobile */}
      <div className="md:hidden"></div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-black transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-black">Admin User</p>
            <p className="text-xs text-gray-500">Manager</p>
          </div>
          <div className="w-10 h-10 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-black font-bold">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
