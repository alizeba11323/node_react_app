const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/", function (req, res, next) {
  res.send({ hi: "There" });
});
app.listen(PORT, function () {
  console.log("App running in port " + PORT);
});
