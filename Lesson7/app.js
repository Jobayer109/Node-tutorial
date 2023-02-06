const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.cookie("name", "Jobayer");
  res.cookie("age", "30");
  res.end();
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("Page not found: 404");
});

module.exports = app;
