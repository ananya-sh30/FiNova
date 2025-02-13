import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Custom Bar shape for rounded corners
const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 10; // Adjust this value for more/less curve
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius}
      ry={radius}
    />
  );
};

const expenseTrendData = [
  { month: "Jan", Entertainment: 20, Productivity: 15, Others: 10 },
  { month: "Feb", Entertainment: 30, Productivity: 20, Others: 15 },
  { month: "Mar", Entertainment: 25, Productivity: 18, Others: 12 },
  { month: "Apr", Entertainment: 35, Productivity: 25, Others: 20 },
];

const SubscriptionExpenseChart = () => {
  return (
    <div style={{ width: "100%", height: 300, marginTop: "20px" }}>
     
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={expenseTrendData}>
          {/* Horizontal grid lines only */}
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#d6e4ff" />
          <XAxis dataKey="month" stroke="#007bff" />
          <YAxis stroke="#007bff" />
          <Tooltip
            contentStyle={{ backgroundColor: "#e6f2ff", border: "none" }}
            itemStyle={{ color: "#007bff" }}
          />
          <Legend wrapperStyle={{ color: "#007bff" }} />
          {/* Bars with custom rounded shape */}
          <Bar dataKey="Entertainment" fill="#007bff" barSize={37} shape={<CustomBar />} />
          <Bar dataKey="Productivity" fill="#0056b3" barSize={37} shape={<CustomBar />} />
          <Bar dataKey="Others" fill="#003d80" barSize={37} shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionExpenseChart;
