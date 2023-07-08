const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get("/google/callback", passport.authenticate("google"));
router.get("/current_user", function (req, res) {
  res.send(req.user);
});
router.get("/logout", function (req, res, next) {
  req.logout((err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: "User LoggedOut successfully", user: req.user });
    }
  });
});
module.exports = router;
