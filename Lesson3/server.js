const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";

const httpSever = http.createServer((req, res) => {
  res.end("<h1>Node server is running</h1>");
});

httpSever.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
