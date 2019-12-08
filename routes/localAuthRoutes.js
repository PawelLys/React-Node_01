const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

module.exports = app => {
  app.post('/local/register', async (req, res) => {
    const { login, password, fullName, adress } = req.body;

    if (!login || !passport) res.status(404).send({ success: false, error: true });

    const loginUnavailable = await User.findOne({ login });

    if (loginUnavailable) res.send({ success: false, userExist: true });
    else {
      req.user.login = login;
      req.user.name = fullName;
      req.user.adress = adress;
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(password, salt, (err, hash) => {
          req.user.password = hash;
          req.user.registered = true;
          req.user.save();
          res.send({ success: true, user: req.user });
        })
      );
    }
  });

  app.post('/local/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user);
  });

  app.get('/local/skip', (req, res) => {
    req.user.registered = true;
    req.user.save();
    res.send(req.user);
  });
};
