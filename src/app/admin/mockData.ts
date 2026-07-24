export const mockStylists = [
  {
    id: "1",
    name: "Mustafah",
    role: "Master Stylist",
    specialization: "Signature Looks & Precision Cuts",
    availability: "Available",
    todayBookings: 6,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Farooq",
    role: "Color Expert",
    specialization: "Creative Coloring & Advanced Spa",
    availability: "Busy",
    todayBookings: 8,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Malik 3",
    role: "Senior Barber",
    specialization: "Classic Fades & Hot Towel Shaves",
    availability: "On Leave",
    todayBookings: 0,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=200&auto=format&fit=crop"
  }
];

export const mockServices = [
  { id: "1", name: "Classic Haircut", price: 120, duration: "30 min", bookingCount: 145 },
  { id: "2", name: "Premium Fade", price: 150, duration: "45 min", bookingCount: 98 },
  { id: "3", name: "Beard Trim & Shape", price: 80, duration: "20 min", bookingCount: 112 },
  { id: "4", name: "Luxury Hot Towel Shave", price: 100, duration: "30 min", bookingCount: 75 },
  { id: "5", name: "Hair Coloring", price: 400, duration: "90 min", bookingCount: 42 },
  { id: "6", name: "Keratin Treatment", price: 800, duration: "120 min", bookingCount: 18 }
];

export const mockAppointments = [
  { id: "APT-001", customer: "John Doe", service: "Classic Haircut", stylist: "Mustafah", time: "10:00 AM", status: "Completed", date: "Today" },
  { id: "APT-002", customer: "Michael Smith", service: "Premium Fade", stylist: "Farooq", time: "11:30 AM", status: "In Progress", date: "Today" },
  { id: "APT-003", customer: "David Wilson", service: "Beard Trim & Shape", stylist: "Mustafah", time: "01:00 PM", status: "Upcoming", date: "Today" },
  { id: "APT-004", customer: "James Brown", service: "Hair Coloring", stylist: "Farooq", time: "02:30 PM", status: "Upcoming", date: "Today" },
  { id: "APT-005", customer: "Chris Evans", service: "Classic Haircut", stylist: "Mustafah", time: "04:00 PM", status: "Cancelled", date: "Today" },
];

export const mockRecentCustomers = [
  { id: "C-001", name: "Robert Taylor", phone: "+91 9876543210", lastVisit: "2 days ago", totalVisits: 12 },
  { id: "C-002", name: "William Davis", phone: "+91 8765432109", lastVisit: "1 week ago", totalVisits: 5 },
  { id: "C-003", name: "Richard Miller", phone: "+91 7654321098", lastVisit: "2 weeks ago", totalVisits: 3 },
  { id: "C-004", name: "Joseph Garcia", phone: "+91 6543210987", lastVisit: "1 month ago", totalVisits: 1 }
];

export const mockRevenueData = [
  { name: "Mon", revenue: 4200 },
  { name: "Tue", revenue: 3800 },
  { name: "Wed", revenue: 5100 },
  { name: "Thu", revenue: 4900 },
  { name: "Fri", revenue: 7500 },
  { name: "Sat", revenue: 9200 },
  { name: "Sun", revenue: 8800 }
];

export const mockBookingStats = [
  { name: "Completed", value: 145, color: "#10b981" }, // Emerald 500
  { name: "Pending", value: 32, color: "#f59e0b" },    // Amber 500
  { name: "Cancelled", value: 12, color: "#ef4444" }   // Red 500
];

export const mockStats = {
  totalBookings: 189,
  bookingsTrend: "+12%",
  todaysAppointments: 24,
  appointmentsTrend: "+4",
  totalRevenue: 43500,
  revenueTrend: "+18%",
  activeStylists: 3,
  stylistsTrend: "All present"
};
