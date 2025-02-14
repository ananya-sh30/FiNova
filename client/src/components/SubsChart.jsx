import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Planned", value: 3000 },
  { name: "Actual", value: 1350 },
];

const COLORS = ["#007bff", "#4a73a9"]; // Colors for the pie sections

const SubscriptionBudgetPieChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="70%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              fontSize: "clamp(10px, 2vw, 12px)", // Dynamic font size
              marginTop: "10px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#333",
        }}
      >
        <div
          style={{
            fontSize: "clamp(16px, 4vw, 22px)", // Dynamic font size for the value
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          {`₹${data[1].value}`} {/* Highlight actual value */}
        </div>
        <div
          style={{
            fontSize: "clamp(10px, 2.5vw, 16px)", // Dynamic font size for the label
            color: "#555",
          }}
        >
          (Actual)
        </div>
        <div
          style={{
            marginTop: "5px",
            fontSize: "clamp(12px, 3vw, 13px)", // Dynamic font size for the budget status
            color: data[1].value > data[0].value ? "#e63946" : "#3c9f3f", // Red for over budget, green otherwise
          }}
        >
          {data[1].value > data[0].value ? "Over Budget" : "Within Budget"}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBudgetPieChart;
