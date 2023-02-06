const app = require("./routes/calculate.routes");
const port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
