const { getWeeklyExpenses } = require("../models/expense");
const pool = require("../config/dbConfig");

// Get current week range (Monday - Sunday)
const getCurrentWeekRange = () => {
  const today = new Date();
  const first = new Date(today);
  first.setDate(today.getDate() - today.getDay() + 1); // Start of the week (Monday)
  first.setHours(0, 0, 0, 0);
  
  const last = new Date(first);
  last.setDate(first.getDate() + 6); // End of the week (Sunday)
  last.setHours(23, 59, 59, 999);
  
  return { first, last };
};

// Fetch weekly expenses
const fetchWeeklyExpenses = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "User email is required" });
  }

  const { first, last } = getCurrentWeekRange();
  const startDate = first.toISOString().split("T")[0];
  const endDate = last.toISOString().split("T")[0];

  try {
    const rows = await getWeeklyExpenses(email, startDate, endDate);

    // Map expenses to match [Mon, Tue, ..., Sun]
    const weeklyExpenses = Array(7).fill(0);
    rows.forEach(row => {
      const dayIndex = new Date(row.date).getDay() - 1; // Convert Date to Weekday Index (Mon=0, Sun=6)
      if (dayIndex >= 0) {
        weeklyExpenses[dayIndex] = parseFloat(row.total_expense);
      }
    });

    res.json(weeklyExpenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addExpense = async (req, res) => {
  const { email, date, food, transport, housing, entertainment, health, miscellaneous } = req.body;
  if (!email || !date) {
    return res.status(400).json({ error: "Email and Date are required" });
  }

  try {
    // Check if a record with the same email and date already exists
    const checkQuery = `SELECT * FROM daily_expenses WHERE user_email = $1 AND date = $2`;
    const existingExpense = await pool.query(checkQuery, [email, date]);

    if (existingExpense.rows.length > 0) {
      // If record exists, update it
      const updateQuery = `
        UPDATE daily_expenses
        SET 
          food = $3, 
          transport = $4, 
          housing = $5, 
          entertainment = $6, 
          health = $7, 
          miscellaneous = $8
        WHERE user_email = $1 AND date = $2
      `;
      await pool.query(updateQuery, [email, date, food, transport, housing, entertainment, health, miscellaneous]);
      res.json({ message: "Expense updated successfully!" });
    } else {
      // If no record exists, insert a new one
      const insertQuery = `
        INSERT INTO daily_expenses (user_email, date, food, transport, housing, entertainment, health, miscellaneous)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `;
      await pool.query(insertQuery, [email, date, food, transport, housing, entertainment, health, miscellaneous]);
      res.json({ message: "Expense added successfully!" });
    }
  } catch (error) {
    console.error("Error adding or updating expense:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { fetchWeeklyExpenses, addExpense };
