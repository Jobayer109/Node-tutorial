const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";

const httpSever = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h1>Server Running</h1>");
  res.end();
});

httpSever.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
