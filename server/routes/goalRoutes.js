const express = require("express");
const { saveGoal, getSavedGoals } = require("../controllers/goalsController");
const router = express.Router();

router.post("/save", saveGoal); // Save goal
router.get("/", getSavedGoals); // Get saved goals using query parameter

module.exports = router;
