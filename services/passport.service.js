const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv = require("dotenv");
const User = require("../models/User");
const passport = require("passport");
dotenv.config();
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
module.exports = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    proxy: true,
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id }).then((userExists) => {
      if (!userExists) {
        User.create({ googleID: profile.id })
          .then((user) => {
            console.log("Profile Created Successfully");
            done(null, user);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        done(null, userExists);
      }
    });
  }
);
