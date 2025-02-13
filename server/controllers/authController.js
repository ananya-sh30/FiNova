const bcrypt = require('bcryptjs');
const { getUserByEmail, createUser } = require('../models/user');

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(email, hashedPassword);

    res.status(201).json({ message: 'User created successfully', user: newUser });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
     
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    return res.status(200).json({ success: true, message: 'Login successful', user });
  };
  

module.exports = { registerUser, loginUser };
