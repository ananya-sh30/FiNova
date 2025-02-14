import React from "react";

// Utility function to calculate the cost efficiency
const calculateCostEfficiency = (cost, usageHours) => {
  return cost / usageHours; // cost per hour
};

const SubBar = ({ subscriptions }) => {
  const totalCost = subscriptions.reduce((acc, sub) => acc + sub.cost, 0);
  const totalUsageHours = subscriptions.reduce((acc, sub) => acc + sub.usageHours, 0);

  // Calculate overall cost efficiency (lower value means more efficient)
  const overallCostEfficiency = calculateCostEfficiency(totalCost, totalUsageHours);

  // Normalize the efficiency values to represent the different sections
  const maxEfficiency = Math.max(
    ...subscriptions.map((sub) =>
      calculateCostEfficiency(sub.cost, sub.usageHours)
    )
  );

  // Calculate the different section widths based on the overall values
  const costEfficiencyWidth = (1 - overallCostEfficiency / maxEfficiency) * 50; // Max 50% width for cost efficiency
  const subscriptionVolumeWidth = (subscriptions.length / 10) * 30; // Max 30% width for volume efficiency
  const totalSpendingWidth = (totalCost / 100) * 20; // Max 20% width for spending efficiency

  // Calculate metrics
  const averageCostPerHour = (totalCost / totalUsageHours).toFixed(2);
  const costEfficiencyScore = overallCostEfficiency.toFixed(2);

  // Legend values
  const costEfficiencyValue = overallCostEfficiency.toFixed(2);
  const volumeEfficiencyValue = (subscriptions.length / 10).toFixed(2);
  const spendingEfficiencyValue = (totalCost / 100).toFixed(2);

  return (
    <div style={{ width: "100%", padding: "16px"}}>
      {/* Metrics above the bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
          fontSize: "14px",
        }}
      >
        <div>
          <strong>Total Cost:</strong> ₹{totalCost}
        </div>
        <div>
          <strong>Total Usage Hours:</strong> {totalUsageHours} hrs
        </div>
        <div>
          <strong>Avg Cost per Hour:</strong> ₹{averageCostPerHour}/hr
        </div>
      </div>

      {/* Efficiency Bar */}
      <div
        style={{
          width: "100%",
          height: "24px",
          border: "1px solid #E7E7E7",
          borderRadius: "14px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Cost Efficiency Section */}
        <div
          style={{
            width: `${costEfficiencyWidth}%`,
            background: "linear-gradient(90deg, #5C6BC0, #8E99F3)",
            borderRadius: "14px 0 0 14px",
            height: "100%",
          }}
        ></div>

        {/* Subscription Volume Section */}
        <div
          style={{
            width: `${subscriptionVolumeWidth + 10}%`,
            background: "linear-gradient(90deg, #424242, #616161)",
            height: "100%",
          }}
        ></div>

        {/* Total Spending Efficiency Section */}
        <div
          style={{
            width: `${totalSpendingWidth}%`,
            background: "linear-gradient(90deg, #2196F3, #64B5F6)", // Replaced green with blue
            height: "100%",
          }}
        ></div>

        {/* Remaining Area */}
        <div
          style={{
            flex: 1,
            background: "#E0E0E0",
            height: "100%",
            borderRadius: "0 14px 14px 0",
          }}
        ></div>
      </div>

      {/* Legend */}
      <div style={{ marginTop: "16px", fontSize: "12px", color: "#616161" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "linear-gradient(90deg, #5C6BC0, #8E99F3)",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          ></div>
          <span>Cost Efficiency: {costEfficiencyValue}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "linear-gradient(90deg, #424242, #616161)",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          ></div>
          <span>Volume Efficiency: {volumeEfficiencyValue}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "linear-gradient(90deg, #2196F3, #64B5F6)",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          ></div>
          <span>Spending Efficiency: {spendingEfficiencyValue}</span>
        </div>
      </div>
    </div>
  );
};

export default SubBar;