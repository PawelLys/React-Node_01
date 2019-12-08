const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  if (user) {
    done(null, user);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id,
          name: profile.displayName
        }).save();

        if (user) {
          done(null, user);
        }
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });

      if (existingUser) done(null, existingUser);
      else {
        const user = await new User({
          facebookId: profile.id,
          name: profile.displayName
        }).save();

        if (user) done(null, user);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "login"
    },
    async (login, password, done) => {
      const existingUser = await User.findOne({ login: login.toLowerCase() });
      if (existingUser) {
        bcrypt.compare(password, existingUser.password, (err, isMatch) => {
          if (isMatch) done(null, existingUser);
          else done(null, false);
        });
      } else {
        done(null, false);
      }
    }
  )
);
