const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is Get request");
});
app.post("/", (req, res) => {
  res.send("This is Post request");
});
app.put("/", (req, res) => {
  res.send("This is Put request");
});
app.delete("/", (req, res) => {
  res.send("This is Delete request");
});

module.exports = app;
