const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");

app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.send("This is Home page");
});

app.use((req, res) => {
  res.send("Page not found: 404");
});

module.exports = app;
