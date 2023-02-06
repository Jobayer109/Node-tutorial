const express = require("express");
const router = express.Router();

router.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});
router.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const result = Math.sqrt(radius / Math.PI).toFixed(2);
  res.send(`<h2>The result is: ${result}</h2>`);
});

router.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const area = (base * height) / 2;
  res.send(`<h2>The result is: ${area}</h2>`);
});

module.exports = router;
