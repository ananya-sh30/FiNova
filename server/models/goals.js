const pool = require("../config/dbConfig");

// Function to insert a new goal
async function addGoal(goal) {
   
  const query = `
    INSERT INTO user_investment_plans (goal_name, target_amount, contribution_amount, time_period, inflation_rate, contribution_frequency, user_email)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
  `;
  const values = [
    goal.goal_name,
    goal.target_amount,
    goal.contribution_amount,
    goal.time_period,
    goal.inflation_rate,
    goal.contribution_frequency,
    goal.user_email,
  ];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

// Function to fetch all goals for a user
async function getGoals(userEmail) {
    const query = "SELECT * FROM user_investment_plans WHERE user_email = $1;";
    try {
      const { rows } = await pool.query(query, [userEmail]);
      return rows; // Return all rows instead of just rows[0]
    } catch (error) {
      throw error;
    }
  }
  

module.exports = { addGoal, getGoals };
