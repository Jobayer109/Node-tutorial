const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/register", (req, res) => {
  const { fullName, age } = req.body;
  res.send(`<h1>Welcome ${fullName} , your age ${age}</h1>`);
});

app.use("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`sever is running at http://localhost:${port}`);
});
