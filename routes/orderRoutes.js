const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireMoney');

const Orders = mongoose.model('orders');

module.exports = app => {
  app.post('/api/orders', requireLogin, requireCredits, async (req, res) => {
    const { title, body, typeOfTruck, adress } = req.body;

    await new Orders({
      title,
      body,
      typeOfTruck,
      adress,
      _user: req.user.id,
      dateOfCreation: Date.now()
    }).save();

    res.redirect('/');
  });

  app.get('/api/users_orders', requireLogin, async (req, res) => {
    const orders = await Orders.find({ _user: req.user.id });
    console.log(orders);
    res.send(orders);
  });

  /*Route for updating 
  .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        ).exec();
      })*/
};
