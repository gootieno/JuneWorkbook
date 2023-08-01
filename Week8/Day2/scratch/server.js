const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const responseBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }

  if (req.method === "GET" && req.url === "/styles") {
    const responseBody = fs.readFileSync("./styles/index.css");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    return res.end(responseBody);
  }
});

const port = 8080;
server.listen(port, () => console.log("server listening on port ", port));
