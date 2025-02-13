const pool = require('../config/dbConfig');

const getSubscriptionsByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM subscription_tracker WHERE user_email = $1', [email]);
    return result.rows;
};
const createSubscription = async (email, subscription_name, subscription_cost, start_date, end_date) => {
    const result = await pool.query(
        'INSERT INTO subscription_tracker (user_email, subscription_name, subscription_cost, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [email, subscription_name, subscription_cost, start_date, end_date]
    );
    return result.rows[0];
};

module.exports = { getSubscriptionsByEmail, createSubscription };
