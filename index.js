require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Orders');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

const maxAgeCookie = 30 * 24 * 60 * 60 * 1000;
app.use(cookieSession({ maxAge: maxAgeCookie, keys: [keys.cookieKey] }));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/localAuthRoutes')(app);
require('./routes/stripeRoutes')(app);
require('./routes/orderRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
