"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { mockBookingStats } from "@/app/admin/mockData";

export default function BookingPieChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[400px]">
      <h3 className="text-xl font-bold font-serif mb-6 text-black">Booking Statistics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={mockBookingStats}
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {mockBookingStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
