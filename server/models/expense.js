const pool = require("../config/dbConfig");
// Fetch weekly expenses
const getWeeklyExpenses = async (email, startDate, endDate) => {
  const query = `
    SELECT date, total_expense 
    FROM daily_expenses 
    WHERE user_email = $1 AND date BETWEEN $2 AND $3 
    ORDER BY date;
  `;

  try {
    const { rows } = await pool.query(query, [email, startDate, endDate]);

    return rows;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
};

module.exports = { getWeeklyExpenses };
