const Goal = require("../models/goals");

// Save a goal
const saveGoal = async (req, res) => {
   
  try {
    const { goalName, targetAmount, monthlyContribution, timePeriod, inflationRate, contributionFrequency, userEmail } = req.body;
    const newGoal = {
      goal_name: goalName,
      target_amount: targetAmount,
      contribution_amount: monthlyContribution,
      time_period: timePeriod,
      inflation_rate: inflationRate,
      contribution_frequency: contributionFrequency,
      user_email: userEmail
    };
    const savedGoal = await Goal.addGoal(newGoal);
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get saved goals
const getSavedGoals = async (req, res) => {
   
  try {
    const { userEmail } = req.query;
    
    const goals = await Goal.getGoals(userEmail);
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { saveGoal, getSavedGoals };
