const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", function (req, res, next) {
  res.send({ hi: "There" });
});
app.get("/server-app", function (req, res, next) {
  res.status(200).json({ message: "finally done" });
});
app.listen(PORT, function () {
  console.log("App running in port " + PORT);
});
