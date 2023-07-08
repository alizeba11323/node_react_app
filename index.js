const express = require("express");
const session = require("express-session");
const DB = require("./connectDB");
const dotenv = require("dotenv");
const passport = require("passport");
const GoogleRoute = require("./routes/auth.route");
const GoogleStrategy = require("./services/passport.service");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
passport.use(GoogleStrategy);
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));
app.use("/auth", GoogleRoute);
app.listen(PORT, function () {
  console.log("App running in port " + PORT);
  DB();
});
