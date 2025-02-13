const pool = require('../config/dbConfig');

const getUserByEmail = async(email)=>{
    const result = await pool.query('SELECT * FROM users where email = $1', [email]);
    return result.rows[0];
};
const createUser = async(email, password) => {
    const result = pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password]);
    return result.rows[0];
}
module.exports = { getUserByEmail, createUser };
