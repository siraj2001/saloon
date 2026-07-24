import { Save, Store, Globe, Bell, Lock } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-serif text-black">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your salon preferences and configurations.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Settings Navigation */}
        <div className="flex border-b border-gray-100 overflow-x-auto">
          <button className="flex items-center gap-2 px-6 py-4 border-b-2 border-black font-medium text-black">
            <Store size={18} />
            General
          </button>
          <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
            <Globe size={18} />
            Website
          </button>
          <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
            <Bell size={18} />
            Notifications
          </button>
          <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
            <Lock size={18} />
            Security
          </button>
        </div>

        {/* Settings Form Content */}
        <div className="p-8 space-y-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black border-b border-gray-100 pb-2">Salon Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Salon Name</label>
                <input 
                  type="text" 
                  defaultValue="MALIK Hair Point" 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-black"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="text" 
                  defaultValue="06398474536" 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-black"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Address</label>
                <input 
                  type="text" 
                  defaultValue="90 Mg nagar part 2, Kalidsan street, west, Urapakkam, Chennai" 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-black"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black border-b border-gray-100 pb-2">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Opening Time</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-black">
                  <option>09:00 AM</option>
                  <option selected>10:00 AM</option>
                  <option>11:00 AM</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Closing Time</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-black">
                  <option>08:00 PM</option>
                  <option selected>09:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button className="flex items-center gap-2 bg-black text-[var(--color-brand-gold)] px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg">
              <Save size={18} />
              Save Changes
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
