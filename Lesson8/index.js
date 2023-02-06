const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/user", (req, res) => {
  const { id, name, age } = req.query;

  res.send(`User id: ${id}, user name: ${name} and age:${age}`);
});

app.use("/", (req, res) => {
  res.send("Sever is running at HOME");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
