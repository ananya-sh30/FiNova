const express = require('express');
const { getSubscriptions, addSubscription } = require('../controllers/subscriptionController');

const router = express.Router();

router.get('/:email', getSubscriptions); 
router.post('/add', addSubscription); 

module.exports = router;
