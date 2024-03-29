const http = require("http");
const { readFile } = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const handleReadFile = (statusCode, fileLocation, req, res) => {
  readFile(fileLocation, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};
const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile(200, "./views/index.html", req, res);
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html", req, res);
  } else if (req.url === "/contact") {
    handleReadFile(200, "./views/contact.html", req, res);
  } else {
    handleReadFile(404, "./views/error.html", req, res);
  }
});

myServer.listen(PORT, hostName, () => {
  console.log(`Server is running on http://${hostName}:${PORT}`);
});
