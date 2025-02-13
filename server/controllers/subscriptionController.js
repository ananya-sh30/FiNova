const { getSubscriptionsByEmail, createSubscription } = require('../models/subscription');

const getSubscriptions  = async(req, res) => {
    const {email} = req.params;
    const subscriptions = await getSubscriptionsByEmail(email);
    res.status(200).json(subscriptions);
};
const addSubscription = async(req, res) =>{
    const {email, subscription_name, subscription_cost, start_date, end_date } = req.body;
    const newSubscription = await createSubscription(email, subscription_name, subscription_cost, start_date, end_date);
    res.status(201).json(newSubscription);

};
module.exports = { getSubscriptions, addSubscription };
