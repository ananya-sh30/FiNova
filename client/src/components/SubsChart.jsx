import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", planned: 50, actual: 70 },
  { month: "Feb", planned: 120, actual: 90 },
  { month: "Mar", planned: 80, actual: 160 },
  { month: "Apr", planned: 150, actual: 100 },
  { month: "May", planned: 110, actual: 190 },
  { month: "Jun", planned: 180, actual: 130 },
];

const SubscriptionBudgetChart = () => {
  const screenWidth = window.innerWidth;

  return (
    <div style={{ width: "96%", height: screenWidth < 600 ? "50px" : "300px", padding: "5px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={data} 
          margin={{ top: 10, right: 10, left: 5, bottom: 5 }}
        >
          <defs>
           
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(30, 88, 204, 0.5)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgba(0, 13, 39, 0.51)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="month" 
            tickLine={false} 
            axisLine={false} 
            tick={{ fontSize: screenWidth < 600 ? 8 : 12 }} 
          />
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            tick={{ fontSize: screenWidth < 600 ? 8 : 12 }}
          />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: screenWidth < 600 ? "8px" : "12px" }} />

          <Area 
            type="monotone" 
            dataKey="planned" 
            stroke="rgba(74, 115, 169, 0.9)" 
            strokeWidth={screenWidth < 600 ? 1 : 2} 
            fill="url(#colorPlanned)" 
            fillOpacity={0.5} 
          />

          <Area 
            type="monotone" 
            dataKey="actual" 
            stroke="#007bff" 
            strokeWidth={screenWidth < 600 ? 2 : 4} 
            fill="url(#colorActual)" 
            fillOpacity={0.5} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionBudgetChart;
