import React from 'react';

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
  const maxEfficiency = Math.max(...subscriptions.map(sub => calculateCostEfficiency(sub.cost, sub.usageHours)));

  // Calculate the different section widths based on the overall values
  const costEfficiencyWidth = (1 - overallCostEfficiency / maxEfficiency) * 50; // Max 50% width for cost efficiency
  const subscriptionVolumeWidth = (subscriptions.length / 10) * 30; // Max 30% width for volume efficiency
  const totalSpendingWidth = (totalCost / 100) * 20; // Max 20% width for spending efficiency

  // Calculate metrics
  const averageCostPerHour = totalCost / totalUsageHours;
  const costEfficiencyScore = (totalCost / totalUsageHours).toFixed(2);

  // Calculate the values to show in the legend
  const costEfficiencyValue = (overallCostEfficiency).toFixed(2);
  const volumeEfficiencyValue = (subscriptions.length / 10).toFixed(2); // Just for example
  const spendingEfficiencyValue = (totalCost / 100).toFixed(2);

  return (
    <div style={{height:"100%"}}>
      
      <div style={{
        width: '95%',
        height: '20px',
        border: "2px solid",
        borderColor: " rgb(231, 231, 231)",
        borderRadius: '14px',
        display: 'flex',
        padding: '7px',
        alignItems: "center"
      }}>
        {/* Cost Efficiency Section */}
        <div
          style={{
            height: '80%',
            width: `${costEfficiencyWidth}%`,
            backgroundColor: 'rgb(53, 66, 190)', // Purple for cost efficiency
            borderRadius: '7px',
            marginRight: "3px"
          }}
        ></div>

        {/* Subscription Volume Section */}
        <div
          style={{
            height: '80%',
            width: `${subscriptionVolumeWidth + 10}%`, // Slight increase to the black bar
            backgroundColor: '#000000', // Black for volume efficiency
            borderRadius: '7px',
            marginRight: "3px"
          }}
        ></div>

        {/* Total Spending Efficiency Section */}
        <div
          style={{
            height: '80%',
            width: `${totalSpendingWidth}%`,
            backgroundColor: 'rgb(14, 99, 44)', // Green for spending efficiency
            borderRadius: '4px',
            marginRight: "3px"
          }}
        ></div>

        {/* Remaining Area (Gray) */}
        <div
          style={{
            height: '80%',
            width: `${100 - (costEfficiencyWidth + subscriptionVolumeWidth + totalSpendingWidth)}%`,
            backgroundColor: 'rgb(226, 226, 226)', // Gray for remaining area
            borderRadius: '4px'
          }}
        ></div>
      </div>

      {/* Legend below the bar */}
      <div style={{ marginTop: '30px' , height:"100%", marginRight:"10px"}}>
      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: '5px' }}>
  <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
    <div
      style={{
        width: '12px',
        height: '12px',
        backgroundColor: '#9C27B0', // Purple
        borderRadius: '50%',
        marginRight: '5px',
      }}
    ></div>
    <span style={{ fontSize: '14px', fontWeight: '500', color: 'gray' }}>Cost Efficiency:</span>
  </div>
  <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: 'black' }}>Value: {costEfficiencyValue}</span>
</div>

<div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: '5px' }}>
  <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
    <div
      style={{
        width: '12px',
        height: '12px',
        backgroundColor: '#000000', // Black
        borderRadius: '50%',
        marginRight: '5px',
      }}
    ></div>
    <span style={{ fontSize: '14px', fontWeight: '500', color: 'gray' }}>Volume Efficiency:</span>
  </div>
  <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: 'black' }}>Value: {volumeEfficiencyValue}</span>
</div>

<div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginBottom: '5px' }}>
  <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
    <div
      style={{
        width: '12px',
        height: '12px',
        backgroundColor: 'rgb(38, 164, 106)', // Green
        borderRadius: '50%',
        marginRight: '5px',
      }}
    ></div>
    <span style={{ fontSize: '14px', fontWeight: '500', color: 'gray' }}>Spending Efficiency:</span>
  </div>
  <span style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '600', color: 'black' }}>Value: {spendingEfficiencyValue}</span>
</div>

</div>

    
    </div>
  );
};

export default SubBar;
