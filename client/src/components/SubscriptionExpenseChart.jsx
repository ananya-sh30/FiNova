import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Custom Bar shape for rounded corners
const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 6;
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

// Updated dataset with more months
const expenseTrendData = [
  { month: "Jan", Entertainment: 20, Productivity: 15, Others: 10 },
  { month: "Feb", Entertainment: 30, Productivity: 20, Others: 15 },
  { month: "Mar", Entertainment: 25, Productivity: 18, Others: 12 },
  { month: "Apr", Entertainment: 35, Productivity: 25, Others: 20 },
  { month: "May", Entertainment: 28, Productivity: 22, Others: 18 },
  { month: "Jun", Entertainment: 40, Productivity: 30, Others: 25 },
  { month: "Jul", Entertainment: 50, Productivity: 35, Others: 30 },
  { month: "Aug", Entertainment: 45, Productivity: 40, Others: 28 },
  { month: "Sep", Entertainment: 38, Productivity: 32, Others: 22 },
  { month: "Oct", Entertainment: 48, Productivity: 36, Others: 26 },
  
];

// Custom Tooltip showing percentage contributions
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + entry.value, 0);
    return (
      <div
        style={{
          backgroundColor: "#f9fbff",
          border: "1px solid #d6e4ff",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>{`Month: ${label}`}</p>
        {payload.map((entry) => (
          <p
            key={entry.name}
            style={{ margin: 0, color: entry.color }}
          >{`${entry.name}: ${entry.value} (${(
            (entry.value / total) *
            100
          ).toFixed(1)}%)`}</p>
        ))}
      </div>
    );
  }

  return null;
};

const SubscriptionExpenseChart = () => {
  return (
    <div style={{ width: "100%", height: 400, marginTop: "20px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={expenseTrendData}>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
            stroke="#d6e4ff"
          />
          <XAxis
            dataKey="month"
            stroke="#4a4a4a"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="#4a4a4a" style={{ fontSize: "12px" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ color: "#4a4a4a", fontSize: "12px" }}
          />
          <Bar
            dataKey="Entertainment"
            fill="url(#colorEntertainment)"
            barSize={20}
            shape={<CustomBar />}
          />
          <Bar
            dataKey="Productivity"
            fill="url(#colorProductivity)"
            barSize={20}
            shape={<CustomBar />}
          />
          <Bar
            dataKey="Others"
            fill="url(#colorOthers)"
            barSize={20}
            shape={<CustomBar />}
          />
        <defs>
            <linearGradient id="colorEntertainment" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007bff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#007bff" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorProductivity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0056b3" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0056b3" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorOthers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#003d80" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#003d80" stopOpacity={0.3} />
            </linearGradient>
          </defs>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionExpenseChart;
