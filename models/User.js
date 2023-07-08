const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleID: {
    type: String,
  },
});

module.exports = mongoose.model("GAuth", UserSchema, "GAuth");
