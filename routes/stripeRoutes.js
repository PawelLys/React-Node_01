const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const response = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description: "Money, money, money",
      source: req.body.id
    });
    
    if(response.status === 'succeeded') {
      req.user.wallet += req.body.amount;
      const user = await req.user.save();
      res.send(user);
    }
  });   
}