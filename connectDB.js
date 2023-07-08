const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = DB;
