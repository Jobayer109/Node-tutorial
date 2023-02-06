const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Query parameter:
app.get("/user1", (req, res) => {
  const { id, name, age } = req.query;
  res.send(`User id: ${id}, user name: ${name} and age:${age}`);
});

// Route parameter:
app.get("/userId/:id/userAge/:age", (req, res) => {
  const { id, age } = req.params;
  res.send(`User id: ${id}, Age:${age}`);
});

// Header parameter:
app.get("/user3", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  const age = req.header("age");
  res.send(`User id: ${id}, Name:${name}, Age: ${age}`);
});

app.use("/", (req, res) => {
  res.send("Sever is running at HOME");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
