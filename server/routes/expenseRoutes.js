const express = require("express");
const { fetchWeeklyExpenses, addExpense } = require("../controllers/expenseController");

const router = express.Router();


router.get("/get", fetchWeeklyExpenses);

router.post("/add", addExpense);

module.exports = router;
