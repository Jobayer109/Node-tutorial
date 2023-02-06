const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const result = Math.sqrt(radius / Math.PI).toFixed(2);
  res.send(`<h2>The result is: ${result}</h2>`);
});

app.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const area = (base * height) / 2;
  res.send(`<h2>The result is: ${area}</h2>`);
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
