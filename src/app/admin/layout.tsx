import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - fixed on desktop, hidden/drawer on mobile */}
      <AdminSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <AdminNavbar />
        <main className="flex-1 p-6 text-black">
          {children}
        </main>
      </div>
    </div>
  );
}
