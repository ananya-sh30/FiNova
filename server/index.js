const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const goalRoutes = require("./routes/goalRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 


// Add your Vercel frontend URL here
const allowedOrigins = [
  'https://finova-phi.vercel.app'
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // If you're using cookies or authentication
};

app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/expenses", expenseRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
